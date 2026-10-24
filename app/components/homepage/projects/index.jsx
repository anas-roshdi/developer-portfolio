import { projectsData } from '@/utils/data/projects-data';
import FeaturedProject from '../featured';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24 scroll-mt-20">
      {/* Section Header */}
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Featured Project — Watira */}
      <div className="pt-24">
        <FeaturedProject />
      </div>

      {/* More Projects subtitle */}
      <div className="flex items-center gap-4 mt-10 mb-6">
        <span className="h-[1px] flex-1 bg-[#1a1443]"></span>
        <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">More Projects</span>
        <span className="h-[1px] flex-1 bg-[#1a1443]"></span>
      </div>

      {/* Sticky project cards */}
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <div
            id={`sticky-card-${index + 1}`}
            key={index}
            style={{ '--index': index + 1 }}
            className="sticky-card w-full mx-auto max-w-2xl sticky"
          >
            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;