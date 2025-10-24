import Link from 'next/link';
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg?: boolean;
  technologies: string[];
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  return (
    <section className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl font-Mediasansextended tracking-wide mb-6 sm:mb-8">Featured Projects</h2>
      <p className="text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto font-sans text-sm sm:text-base px-4">
        다양한 프로젝트 경험을 통해 성장한 개발 여정을 확인해보세요.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={{
              pathname: '/projects',
              query: {
                slide: project.id
              }
            }}
            className="group bg-white/20 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg hover:bg-white/30 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl block"
          >
            <div className="mb-4">
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center ${project.iconBg ? 'bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700 rounded-lg' : ''}`}>
                <span className={`${project.iconBg ? 'text-white font-bold text-lg font-sans' : 'text-4xl'}`}>
                  {project.icon}
                </span>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-sans font-bold mb-3 sm:mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 font-sans">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-white/80 text-gray-800 text-xs rounded-full font-sans">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-12">
        <Link 
          href={{
            pathname: '/projects',
          }}
          className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium tracking-wide rounded-lg overflow-hidden transition-all duration-500 ease-out hover:from-gray-900 hover:to-gray-800 hover:scale-[1.02] hover:shadow-xl font-sans text-sm sm:text-base"
        >
          <span className="relative z-10 flex items-center gap-2">
            View All Projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
