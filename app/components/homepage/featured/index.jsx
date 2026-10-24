import Image from "next/image";
import Link from "next/link";
import { FaAndroid, FaCode } from "react-icons/fa";

const watiraScreenshots = [
  {
    src: "/projects/watira/01-login.jpeg",
    caption: "Sign in",
    width: 1080,
    height: 2340,
  },
  {
    src: "/projects/watira/02-original.jpeg",
    caption: "Original schedule",
    width: 1600,
    height: 670,
  },
  {
    src: "/projects/watira/03-proposal.jpeg",
    caption: "Suggested alternative (81% match)",
    width: 1600,
    height: 675,
  },
  {
    src: "/projects/watira/04-preferences.jpeg",
    caption: "Preferences",
    width: 770,
    height: 1600,
  },
  {
    src: "/projects/watira/05-add-course.jpeg",
    caption: "Add a course with prerequisites",
    width: 749,
    height: 1600,
  },
];

const watiraTools = [
  "React Native (Expo)",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "EAS Build",
];

const bulletPoints = [
  "Scheduling engine: constraint-based backtracking search with pruning and a weighted 0 to 100 scoring model that returns the three best diverse alternatives.",
  "Preferences: days off, morning or evening, maximum gaps and credit load.",
  "REST API with Zod validation, server-side revocable JWT sessions, bcrypt hashing, rate limiting and per-student data isolation, covered by 230+ automated tests (Vitest, Supertest).",
  "Deployed on Render with managed Neon PostgreSQL and transactional email (Brevo); Android builds with EAS; in-app account deletion.",
];

export default function FeaturedProject() {
  return (
    <div id="watira" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background glow and divider */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-semibold rounded-md uppercase tracking-wider">
            FEATURED PROJECT
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Main Card */}
      <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-xl border bg-gradient-to-r to-[#0a0d37] p-5 sm:p-8 lg:p-10 shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
        {/* Top gradient highlight border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 rounded-t-xl"></div>

        {/* Header & Badges */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-[#16f2b3] bg-[#16f2b31a] border border-[#16f2b340] rounded-full">
            Flagship Full-Stack Mobile App
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Watira: <span className="text-[#16f2b3]">Smart Timetable Planner for University Students</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            A full-stack Android app that builds conflict-free timetable alternatives from each student&apos;s preferences, with an Arabic right-to-left interface.
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {watiraTools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-[#1b203e] text-[#16f2b3] border border-[#16f2b333]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <div className="mb-8 bg-[#090d1f] p-4 sm:p-6 rounded-lg border border-[#1f223c]">
          <ul className="space-y-3">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                <span className="text-[#16f2b3] mt-1 font-bold">▹</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Link
            href="https://github.com/anas-roshdi/smart-schedule/releases/download/v1.0.0/Watira-v1.0.0.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
          >
            <FaAndroid className="text-lg" />
            <span>Download APK (Android)</span>
          </Link>
          <Link
            href="https://github.com/anas-roshdi/smart-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white transition-all duration-300 bg-[#1b203e] border border-[#353a52] rounded-full hover:bg-pink-500 hover:border-pink-500 hover:scale-105"
          >
            <FaCode className="text-lg" />
            <span>View Code</span>
          </Link>
        </div>

        {/* Small Notes */}
        <div className="space-y-1 mb-10 text-xs text-gray-400">
          <p>
            * Unofficial student tool, not affiliated with any university. Google Play release in preparation.
          </p>
          <p>
            * Hosted on a free tier: the first request after a period of inactivity can take up to a minute. Screenshots show demo data.
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#16f2b3] mb-4">
            App Screenshots
          </h4>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {watiraScreenshots.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-auto snap-center bg-[#11152c] p-2.5 rounded-xl border border-[#1f223c] flex flex-col justify-between hover:border-[#16f2b3] transition-all duration-300"
              >
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-lg bg-[#0d1224] flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-center text-xs font-medium text-gray-300 mt-2 px-1">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
