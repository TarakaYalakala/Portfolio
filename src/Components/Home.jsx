import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
import myimg from "../images/My_image.jpg"
import { Link } from 'react-router-dom'
import reactic from "../images/1174949_js_react js_logo_react_react native_icon.png"
import { useEffect,useState } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import comerce from "../images/Screenshot (6).png"
import ui from "../images/Screenshot (2).png"
import Footer from './Footer'




function Home() {


  useEffect(() => {
       AOS.init({duration:600})
  }, [])
  

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../assets/Taraka_resume_(1).pdf'; // Path to your PDF file
    link.download = 'Taraka_resume_(1).pdf';  // The name of the downloaded file
    link.click();
  };



  return (
    <div>
        <Navbar/>
        <div className="about">
          <div className="dev">
          <span className='full' data-aos="fade-right">Full</span><span className='span-dev'>────</span><span className='stack' data-aos="fade-left">stack</span>
          </div>
          <div className="dev-h">
            Developer
          </div>
          <br />
          <div className="img-h">
            <img src={myimg} alt="My_img" style={{height:"100%",width:"100%"}}/>
          </div>
          <div className="aval">
            <div className="aval-img" data-aos="zoom-in">
              <img src={reactic} alt="react_img" className='image-avl' style={{height:"100%",width:"100%",cursor:"pointer"}}/>
              </div>
            <div className="context-avl">
            Avaliable for Fulltime job
            <br />
            <Link to="/https://www.linkedin.com/in/taraka-y-aa3624255/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='connect'>Lets Connect</Link>
            </div>
          </div>
          <div className="abt-me" data-aos="zoom-in-up">
            0/1
          <div className="info">
            About me
          </div>
          <div className="info-details">
            Hi, I am <span style={{fontSize:"40px",color:"rgb(173, 94, 247)",fontWeight:"750"}}>Taraka</span>
          </div>
           <div className="info-sa">A passionate Full stack developer</div>
           <p className='para-abt'>With good command in Desgin and Development,  I specialize in crafting engaging and responsive web applications using MongoDB, Express.js, React.js, and Node.js.</p>
           <button className='abt-btn' onClick={handleDownload}>Download CV <i className="fa-solid fa-download fa-xl"></i></button>
          </div>
          <span style={{fontSize:"35px",margin:"25px"}}>Skills</span>
          <div className="skills">
             <div className="fnt sks" data-aos="fade-up">
            <div className="frontend ">Frontend</div>
            <div className="tab">
              <div className="tml">HTML</div>
              <div className="percen">90%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range2"></div>
                </div>
            </section>
            <br />
            <div className="tab">
              <div className="tml">Css</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            
            <br />
            <div className="tab">
              <div className="tml">React.js</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            <br />
            <div className="tab">
              <div className="tml">Redux</div>
              <div className="percen">70%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range70"></div>
                </div>
            </section>
            <br />
            <div className="tab">
              <div className="tml">Tailwind</div>
              <div className="percen">70%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range70"></div>
                </div>
            </section>
            <br />
            <div className="tab">
              <div className="tml">Bootstrap</div>
              <div className="percen">90%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range2"></div>
                </div>
            </section>
            <br />
            <br />
            </div>
            <div className="bnd sks" data-aos="fade-up">
            <div className="backend">
              Backend
            </div>
            <div className="tab">
              <div className="tml">Express.js</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            <br />
            <br />
            <div className="tab">
              <div className="tml">Node.js</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            <br />
            <br />
            <div className="tab">
              <div className="tml">MongoDB</div>
              <div className="percen">70%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range70"></div>
                </div>
            </section>
            <br />
            <br />
            </div>
            <div className="tool sks" data-aos="fade-up">
            <div className="backend">
              Tools
            </div>
            <div className="tab">
              <div className="tml">Docker</div>
              <div className="percen">70%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range70"></div>
                </div>
            </section>
            <br />
            <br />
            <div className="tab">
              <div className="tml">Material-UI</div>
              <div className="percen">70%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range70"></div>
                </div>
            </section>
            <br />
            <br />
            <div className="tab">
              <div className="tml">Javascript</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            <br />
            <br />
            <div className="tab">
              <div className="tml">Vercel</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            <br />
            <div className="tab">
              <div className="tml">Git&Github</div>
              <div className="percen">80%</div>
            </div>
            <br />
            <section className='bar'>
                <div className="range1">
                  <div className="range80"></div>
                </div>
            </section>
            </div>
          </div>
          <div className="projects">
             <span className='pgt-rsm'>Projects</span>
             <div className="project-main" data-aos="zoom-out">
              <div className="first">
               <div className="img-pct">
                <img src={comerce} alt="F-1 Store" style={{height:"100%",width:"100%"}}/>
               </div>
               <div className='flex-diff'>
               <span className='store'>F1-store</span>
               <p className='store-info'>A Fully functional Full stack E-commerce site.</p>
               <div className="tech">
                <ul>
                  <li data-aos="flip-left">React.js</li>
                  <li data-aos="flip-left">Express.js</li>
                  <li data-aos="flip-left">MongoDb</li>
                  <li data-aos="flip-left">Node.js</li>
                  <li data-aos="flip-left">Docker</li>
                  <li data-aos="flip-left">Bootstrap</li>
                </ul>
                <div className="anc-tc">
                  <a className='anc-fc' href="https://github.com/TarakaYalakala" target='_blank'>
                   Github <i className="fa-brands fa-github" style={{color: "020203"}}></i>
                  </a>
                </div>
               </div>
               </div>
              </div>
             </div>

             {/* 2 */}
             <div className="spotify project-main" data-aos="zoom-out">
              <div className="img-ui img-pct">
                <img src={ui} alt="UI clone"  style={{height:"100%",width:"100%"}}/>
              </div>
              <div className="para-ui">
               <p className='uiclone store'>Spotify UI</p>
               <p>A responsive web application that replicates Spotify's user interface</p>
               <div className="tech">
                <ul>
                  <li data-aos="flip-left">React.js</li>
                  <li data-aos="flip-right">Redux</li>
                  <li data-aos="flip-left">Material UI</li>
                  <li data-aos="flip-right">Aos</li>
                </ul>
                <div className="anc-tc">
                  <a className='anc-fc' href="https://github.com/TarakaYalakala" target='_blank'>
                   Github <i className="fa-brands fa-github" style={{color: "020203"}}></i>
                  </a>
                </div>
               </div>
              </div>
             </div>
          </div>
          <hr />
          <marquee behavior="scroll" direction="left" scrollamount="15">
      <p style={{fontSize:"35px",fontFamily:"sans-serif",fontWeight:"700"}}>Interested in connecting? Let's network on LinkedIn.</p>
    </marquee>
    <hr />
      <Footer/>
    </div>
    </div>
  )
}


export default Home





