import "../Projects/projects.scss";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";

const ProjectMockup = ({ project }) => {
  const { titulo, desc, img, stack,link,github } = project;

  return (
    <div className="grid grid-cols-6 mockup">
      <div className="container img-container rounded-2xl overflow-hidden h-[50vh] col-span-4
      
      ">
        <img className='rounded-lg' src={img} alt={desc} />
      </div>

      <div className="col-span-2 pl-8 text-justify flex flex-col gap-4">
        <p className="text-2xl text-verde font-semibold">{titulo}</p>
        <div className="project-desc">{desc}</div>
        <div className="flex justify-center gap-5">
         <a href={link} target="blank"><button className="botao-projeto px-5 py-2 rounded-3xl flex gap-1 items-center hover:bg-gray-700">
            <div className="text-lg text-cyan-500"><TbWorld /></div>
            <p className="text-sm text-gray-400">Demo</p>
          </button></a> 
          <a href={github} target="blank"><button className="botao-projeto px-5 py-2 rounded-3xl flex gap-1 items-center hover:bg-gray-700">
            <div className="text-lg text-purple-500"><FaGithub /></div>
            <p className="text-sm text-gray-400">GitHub</p>
          </button></a> 
        </div>
      </div>

      <div className="col-span-6 mt-4 pb-6">
        <div className="text-2xl flex gap-2 justify-start ">
          {stack.map((icon, index) => (
            <div key={index} className="p-2 border-2 border-gray-300 rounded-3xl hover:bg-gray-800">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup;
