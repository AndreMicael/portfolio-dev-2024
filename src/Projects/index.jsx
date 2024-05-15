import "./projects.scss"
import ProjectMockup from "../assets/ProjectMockup"
import {  useState } from 'react';


import {getTexts} from "../assets/texts"
import {getImages} from "../assets/texts"

const Projects = () => {

 

const [show,setShow] = useState(false);
const [showText,setShowText] = useState(<i class="fa-solid fa-plus"></i>);
const [space,setSpace] = useState(false);

const handleShow = () => {

  setShow(!show);
  setShowText(show ? <i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>);
  setSpace(!space);

}

 const texts = getTexts();
 const img = getImages();

  return (
    <div className="categories-container ">
        
        <h1 className="categories">projetos</h1>
        <div className="mockups">
        <ProjectMockup stack={texts.stack1} img={img.projeto1} desc={texts.projeto1} />
        
        <div className={`${show ? "ativo ": "inativo" }`}>
        <ProjectMockup stack={texts.stack2} img={img.projeto2} desc={texts.projeto2} />
        <ProjectMockup stack={texts.stack3} img={img.projeto3} desc={texts.projeto3} />
        </div>
        </div>
        <button className={`${space ? "ver-mais-button":""}  ${show ? "ativo ": "" } ver-mais`} onClick={handleShow}> <p> {showText} </p></button>
     
    </div>
  )
}

export default Projects