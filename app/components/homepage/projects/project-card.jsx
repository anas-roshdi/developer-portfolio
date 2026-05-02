"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // Added for teleporting the modal
import { FaImage, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // To handle SSR in Next.js

  // Handle component mount to safely use document.body for the portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const images = project.images || (project.image ? [project.image] : []);

  const openModal = () => {
    if (images.length > 0) {
      setCurrentImageIndex(0);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // The modal UI extracted into a variable
  const modalContent = isModalOpen && mounted ? (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050714]/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={closeModal} 
    >
      <button 
        onClick={closeModal} 
        className="absolute top-6 right-6 text-white hover:text-pink-500 text-3xl transition-colors z-50"
      >
        <FaTimes />
      </button>

      <div 
        className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center p-4" 
        onClick={(e) => e.stopPropagation()} 
      >
        {images.length > 1 && (
          <button 
            onClick={prevImage} 
            className="absolute left-4 lg:left-8 text-white hover:text-pink-500 text-3xl lg:text-5xl p-2 z-10 bg-black/40 hover:bg-black/80 rounded-full transition-all"
          >
            <FaChevronLeft />
          </button>
        )}

        <img
          src={images[currentImageIndex]?.src || images[currentImageIndex]}
          alt={`Screenshot ${currentImageIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_30px_rgba(236,72,153,0.15)] border border-[#1b2c68a0] select-none"
        />

        {images.length > 1 && (
          <button 
            onClick={nextImage} 
            className="absolute right-4 lg:right-8 text-white hover:text-pink-500 text-3xl lg:text-5xl p-2 z-10 bg-black/40 hover:bg-black/80 rounded-full transition-all"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-8 text-white text-sm bg-black/60 border border-indigo-900/50 px-4 py-2 rounded-full tracking-widest font-mono">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  ) : null;

  return (
    <>
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        
        <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        </div>

        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {project.tools?.length - 1 !== i && (
                    <span className="text-gray-400">{`', '`}</span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>

          {/* Action Buttons Row */}
          <div className="flex items-center justify-end gap-4 mt-8">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-[#1b203e] border border-[#353a52] rounded-full hover:bg-pink-500 hover:border-pink-500"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
                <span>View Code</span>
              </a>
            )}
            
            {/* View Screenshots Button - تم تصحيح القوس هنا */}
            {images.length > 0 && (
              <button
                onClick={openModal}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full hover:scale-105"
              >
                <FaImage className="text-lg" />
                <span>View Screenshots</span>
              </button>
            )} {/* <--- هذا القوس هو الذي كان مفقوداً! */}

            {/* Live Demo Button */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full hover:scale-105"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Live Demo</span>
              </a>
            )}  
          </div>
        </div>
      </div>

      {/* Render the modal using React Portal to place it at the root of the document */}
      {mounted && modalContent ? createPortal(modalContent, document.body) : null}
    </>
  );
}

export default ProjectCard;