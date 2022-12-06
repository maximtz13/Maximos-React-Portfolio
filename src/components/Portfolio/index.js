import React from 'react'

import photo0 from '../../assets/projectImg/0.jpg';
import photo1 from '../../assets/projectImg/1.jpg';
import photo2 from '../../assets/projectImg/2.jpg';
import photo3 from '../../assets/projectImg/3.jpg';
import photo4 from '../../assets/projectImg/4.jpg';
import photo5 from '../../assets/projectImg/5.jpg';

function Portfolio() {
  return (
    <div className="flex-row">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <div className='image'>
        <img className="img-thumbnail" src={photo0} alt="Tech Blog"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://maximos-tech-blog.herokuapp.com/" >Tech Blog</a>
            |
            <a href= "https://github.com/maximtz13/Maximos-Tech-Blog" >  <i class="fa fa-github fa-2x"></i></a>
            <p>JavaScript, HTML, CSS, HandleBars</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo1} alt="Collective Social App"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://social-collective-app.herokuapp.com/" >Collective Social App</a>
            |
            <a href= "https://github.com/DXHASE/Collective-Social-App" >  <i class="fa fa-github fa-2x"></i></a>
            <p>JavaScript, CSS, HandleBars, Collaborative Project</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo2} alt="Text Editor"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://maximos-text-editor.herokuapp.com/" >Text Editor</a>
            |
            <a href= "https://github.com/maximtz13/Maximos-Text-Editor" >  <i class="fa fa-github fa-2x"></i></a>
            <p>IndexedDB, Node.js, Webpack, Workbox, Babel, Heroku, Useable offline</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo3} alt="Book Search Engine"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://maximtz13.github.io/Maximos-Book-Search-Engine/" >Book Search Engine</a>
            |
            <a href= "https://github.com/maximtz13/Maximos-Book-Search-Engine" >  <i class="fa fa-github fa-2x"></i></a>
            <p>MERN Stack, React, MongoDB, Node.js/Express.js</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo4} alt="Code Quiz"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://maximtz13.github.io/Maximos-Code-Quiz/" >Code Quiz</a>
            |
            <a href= "https://github.com/maximtz13/Maximos-Code-Quiz" >  <i class="fa fa-github fa-2x"></i></a>
            <p>JavaScript, HTML, CSS, Dynamically Updates</p>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo5} alt="Weather Dashboard"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://maximtz13.github.io/Maximos-Weather-Dashboard/" >Weather Dashboard</a>
            |
            <a href= "https://github.com/maximtz13/Maximos-Weather-Dashboard" >  <i class="fa fa-github fa-2x"></i></a>
            <p>JavaScript, HTML, CSS, utilizes third-party apis</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;