import React, { useState, useEffect,forwardRef } from 'react';
import HTMLFlipBook from "react-pageflip";
import "../App.css";
import photo from "../assets/my-photo.png";
import Tshirt from "../assets/3D-T-shitt.png";
import prayers from "../assets/prayers.png"
import  leon from "../assets/leon1.png";
import CV from "../assets/WebDeveloper-GhaithZoaiterCV.pdf"

const Page = forwardRef((props, ref) => (
  <div className={`page ${props.className || ""}`} ref={ref}>
    <div className="page-content">{props.children}</div>
  </div>
));

const Book = () => {

    const [isPortrait, setIsPortrait] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="book-container">
      <HTMLFlipBook
  width={400}
  height={550}
  size="fixed"
  minWidth={315}
  maxWidth={1000}
  maxShadowOpacity={0.7}
  showCover={true}
  mobileScrollSupport={true}
  drawShadow={true}
  getPageCount
  flippingTime={1500}
  usePortrait={isPortrait}
  startZIndex={10}
       >
        <Page number={2} className="cover front-cover">
          
          <img
            src={photo}
            alt="My Photo"
            className="my_photo"
            />
          <i className="ico" class="fa-solid fa-code"></i>
          <h1>Ghaith Zoaiter</h1>
          <p>FrontEnd Developer
          </p>
        </Page>
        <Page>
          <h2>About Me :</h2>
          <p className="about-me">
            I'm a passionate Front-End Developer with 
            a strong foundation in modern web technologies 
            including HTML, CSS, JavaScript, and React. 
            I enjoy creating clean, responsive, 
            and user-friendly interfaces that deliver 
            great user experiences. 
            I am always eager to learn new tools and frameworks 
            to enhance my skills and contribute to innovative projects.
            My goal is to grow as a developer and collaborate with
            dynamic teams to build high-quality web applications.
          </p>
        </Page>
        <Page>
          <h2>Skills :</h2>
          <ul className="skills-icons">
            <li>React
            <i className="fab fa-react"></i>
            </li>
            <li>JavaScript
            <i className="fab fa-js-square"></i>
            </li>
            <li>HTML
            <i className="fab fa-html5"></i>
            </li>
            <li>CSS
            <i className="fab fa-css3-alt"></i>
            </li>
            <li>Git
            <i class="fa-brands fa-git-alt"></i> 
            </li>
            <li>Three.js
              <i class="fa-solid fa-cubes"></i>
            </li>
          </ul>
        </Page>
        <Page>
          <h2>Last Projects :</h2>
          <a
            href="https://ghaithzoaiter.github.io/Deploy_Clothes_Shop3D/"
            rel="noopener noreferrer"
          >
              <img  
              src={Tshirt}
              alt="photo for 3D T-shirt wibsite"
              className="project-image"
              />

              </a>

              <h3 className="progject-titles">T-shirt 3D Wibsite :</h3>
              <p className="project-description">
                A web application that allows users to customize and visualize
                3D T-shirt designs in real-time using React and Three.js.
              </p>
              
          <a 
              href="https://github.com/Ghaithzoaiter/Clothes_Shop3D"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Source Code
            </a>
                      <a 
              href="https://ghaithzoaiter.github.io/Deploy_Clothes_Shop3D/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Preview
            </a>

        </Page>
                <Page>
          <h2>Experience :</h2>
            <a 
            href="https://ghaithzoaiter.github.io/Prayer_Times/"
            rel="noopener noreferrer">
          <img 
          src={prayers}
          className="project-image"
          />
            </a>
          <h3 className="progject-titles">Prayer Times Wibsite :</h3>
              <p className="project-description">
          A sleek and responsive web application that accurately displays 
          times based on the user's location with seamless API integration.
              </p>
          <a 
            href="https://github.com/Ghaithzoaiter/Prayer_Times"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Source Code
          </a>
                    <a 
            href="https://ghaithzoaiter.github.io/Prayer_Times/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Preview
          </a>
      </Page>
        

        <Page>
          <h2>Experience :</h2>
            <a 
            href="https://ghaithzoaiter.github.io/leon/"
            rel="noopener noreferrer">
          <img 
          src={leon}
          className="project-image"
          />
          </a>
          <h3 className="progject-titles">Leon Website :</h3>
              <p className="project-description">
A modern and stylish website, built using HTML, CSS, and JavaScript.
It features a clean layout and a fully responsive design.
              </p>
          <a 
            href="https://github.com/Ghaithzoaiter/leon"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Source Code
          </a>
                    <a 
            href="https://ghaithzoaiter.github.io/leon/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Preview
          </a>
      

        </Page>

        <Page className="back-cover">
          <h2>Connect with me :</h2>
          <ul className="social-icons">
  <li> 
  <a href="https://wa.me/+963930122796" target="_blank" >
    <i class="fab fa-whatsapp"></i><br/>
    WhatsApp
  </a>
  </li>

    <li>
  <a
  href="https://t.me/Ghaith_zoaiter?start=hello"
  target="_blank"
  rel="noopener noreferrer"
  >
    <i className="fab fa-telegram"></i><br/>
    Telegram
    </a>
    </li>
  <li> 
  <a href="https://www.linkedin.com/in/ghaithzoaiter" target="_blank">
    <i class="fab fa-linkedin-in"></i><br/>
    Linkedin
  </a>
  </li>

  <li> 
  <a href="https://github.com/Ghaithzoaiter" target="_blank">
    <i class="fab fa-github"></i><br/>
    GitHub
  </a>
  </li>

  <li> 
  <a href="mailto:ghaith.zoaiter@gmail.com" >
    <i class="fas fa-envelope"></i><br/>
    Email
  </a>
  </li>

  <li> 
  <a   href={CV}
  download="WebDeveloper-GhaithZoaiterCV.pdf" >
    <i class="fas fa-file-alt"></i><br/>
    CV
  </a>
  </li>
          </ul>
        </Page>
        
      </HTMLFlipBook>
      
    </div>
  );
};

export default Book;