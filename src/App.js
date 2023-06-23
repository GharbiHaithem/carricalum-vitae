
import './App.css';

import {CiLocationOn,CiLinkedin} from 'react-icons/ci'
import me from './images/Screenshot_2022-02-18-03-58-28-546_com.google.android.apps.photos-removebg-preview.png'
import {ImPhone} from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import {PiGlobeStandDuotone,PiGameControllerThin,PiMusicNoteFill} from 'react-icons/pi'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiReact} from 'react-icons/si'
import{FaNode,FaCameraRetro} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import diploma from './images/Diploma-Background-PNG.png'
import{FaLaptopCode} from 'react-icons/fa'
import{SiReadme} from 'react-icons/si'
import { useState } from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
function App() {
  const[loader,setLoader] = useState(false)
  const downloadPDF = ()=>{
    const capture = document.querySelector('.generate-pdf')
    setLoader(true)
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p','mm','a4')
      const componentWidth =doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData,0,0,componentWidth,componentHeight)
      setLoader(false)
      doc.save('receipt-pdf.pdf')
    })

  }
  return (
    <div className="container">
   <div className='generate-pdf'>
   <div className='top'>
      <div className='title'><h2>Gharbi Haithem<br/><span>Mern Stack Develloper</span></h2></div>
      <div className='group'>
        <div className='left-side'>
           <div className='img-box'>
            <img src={me}  alt='x'/>
           </div>
        </div>
        <div className='right-side'>
          <p className='desc'>Informaticien polyvalent avec une solide expérience dans le développement web MERN. Expertise en réseau et systèmes informatiques, combinée à une maîtrise des technologies front-end et back-end. Passionné par la création de solutions informatiques innovantes et axées sur les utilisateurs.</p>
        </div>
      </div>
    </div>
    <div className='bottom'>
     <div className='left-side'>
       <h4>Contact</h4>
       <ul className='contactInfo'>
         <li>
            <span className='icon fs-4'><ImPhone/></span>
            <span className='text'>+216&nbsp;22013583</span>
         </li>
         <li>
         <span className='icon  fs-4'><AiOutlineMail/></span>
            <span className='text'>gharbi.haythem1988@gmail.com</span>
         </li>
         <li>
         <span className='icon  fs-4'><PiGlobeStandDuotone/></span>
            <span className='text text-decoration-underline'>https://github.com/GharbiHaithem</span>
         </li>
         <li>
         <span className='icon fs-4'><CiLinkedin/></span>
            <span className='text'>www.linkendin.com/me</span>
         </li>
         <li>
         <span className='icon fs-4'><CiLocationOn/></span>
            <span className='text'>Tunisie , &nbsp; Nabeul</span>
         </li>
       </ul>
       <h4>Skills</h4>
       <div className='skills '>
          <div className='skills-box position-relative ' style={{"--i":'75%'}}>
         <div className='d-flex align-items-center gap-20'>
         <AiFillHtml5 className='fs-4' style={{color:"#f4460b"}}/> <p>HTML</p>
         </div>
            <div className='value'></div>
          </div>
          <div className='skills-box position-relative' style={{"--i":'70%'}}>
           <div className='d-flex align-items-center gap-20'>
           <SiCss3 className='fs-4' style={{color:"#2862e9"}} /> <p>CSS</p>
           </div>
            <div className='value'></div>
          </div>
          <div className='skills-box position-relative' style={{"--i":'66%'}}>
          <div className='d-flex align-items-center gap-20'>
          <TbBrandJavascript className='fs-4' style={{color:"#e2c430"}} /><p>JS</p>
          </div>
            <div className='value'></div>
          </div>
          <div className='skills-box position-relative' style={{"--i":'78%'}}>
         <div className='d-flex align-items-center gap-20'>
         <SiReact  className='fs-4' style={{color:'#00d1f7'}}/> <p>REACT</p>
         </div>
            <div className='value'></div>
          </div>
          <div className='skills-box position-relative' style={{"--i":'88%'}}>
           <div className='d-flex align-items-center gap-20'>
           <FaNode  className='fs-3' /> <p>NODE JS</p>
           </div>
            <div className='value'></div>
          </div>

          <div className='skills-box position-relative' style={{"--i":'58%'}}>
           <div className='d-flex align-items-center gap-20'>
           <AiFillGithub  className='fs-3' /> <p>Git</p>
           </div>
            <div className='value'></div>
          </div>
       </div>
     </div>
    <div className='right-side'>
     <div className='container'>
     <h4>Etudes</h4>
     <div className='etude'>
     <div className='section-paint'>
      <div className='section'></div>
      <div className='section'></div>
      <div className='section'></div>
      <div className='section'></div>
      <div className='section'></div>
      </div>
      <div className='descc'> <p>Diplôme de l'Institut Supérieur d'Etudes Technologiques de Nabeul en 2011
      </p><br/><br/><br/><br/><br/><br/><br/>
      <p>Experience Proffesionnel:<br/>
     <b className='fw-400'> FULL STACK / MERN STACK DEVELOPER</b><br/>
     <b>COMPETENCES :</b><br/>

 MongoDB Developer<br/>
 React.js Developer<br/><br/><br/><br/><br/><br/>
 <b className='fw-600'>Projet Réalisé :</b> - [Lien GitHub :<span className='text-decoration-underline'>https://github.com/GharbiHaithem</span> ]<br/>

Développement d'une application <b className='text-muted'> E-Commerce & BLOG & SOCIAL MEDIA & PORTFOLIO & RENT-CAR</b> en utilisant MERN stack<br/>
Intégration de fonctionnalités avancées telles que l'authentification utilisateur et les notifications en temps réel
     </p>
     <p>
     Licence en Informatique (Spécialité Réseau et Systèmes Informatiques) - [Université : <span style={{fontWeight:'400'}}>Institut Superieure des Etudes Technologique a Nabeul</span>], [Année d'obtention:<b>2011</b>]
     </p><br/>
    <p>
    <b>COMPÉTENCES TECHNIQUES</b><br/>

Langages de programmation : JavaScript, HTML, CSS <br/>
Frameworks et bibliothèques : React.js, Node.js, Express.js<br/>
Base de données : MongoDB<br/>
Outils de développement : Git, Webpack, Babel<br/>
Systèmes d'exploitation : Windows, Linux<br/>
Réseaux informatiques : TCP/IP, DNS, VPN<br/>
    </p>
      </div>
     </div>
      
    </div>
     </div>
    </div>
    <h4 className='d-block mx-auto text-center p-2 '>Hobbies</h4>
    <div className='hobbies'>
     
      <div className='box-hobbies d-flex align-items-center justify-content-center flex-column'>
       
          <FaLaptopCode className='fs-1' />
          <p className='text-secondary letter-spacing-2'>CODDING</p>
          
      </div>
      <div className='box-hobbies d-flex align-items-center justify-content-center flex-column'>
      <SiReadme className='fs-1' />
          <p className='text-secondary letter-spacing-2'>READING</p>
      </div>
      <div className='box-hobbies d-flex align-items-center justify-content-center flex-column'>
      <PiGameControllerThin className='fs-1' />
          <p className='text-secondary letter-spacing-2'>GAMING</p>
      </div>
      <div className='box-hobbies d-flex align-items-center justify-content-center flex-column'>
      <PiMusicNoteFill className='fs-1' />
          <p className='text-secondary letter-spacing-2'>MUSIC</p>
      </div>
      <div className='box-hobbies d-flex align-items-center justify-content-center flex-column'>
      <FaCameraRetro className='fs-1' />
          <p className='text-secondary letter-spacing-2'>PHOTOGRAPHY</p>
      </div>
     
    </div>
   </div>
    <div className='recipt-actions-div my-5 mb-5'>
<div className='action-right'>
  <button className='receipt-modal-download-button'
  onClick={downloadPDF}
  disabled={!(loader === false)}
  >
    {loader ? (
      <span>Downloading</span>
    ) : (<span>Download</span>)}
  </button>
</div>
</div>
    </div>



  );
}

export default App;
