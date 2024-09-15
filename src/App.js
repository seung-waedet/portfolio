import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Clock from './components/Clock'; 
import myImage from './Seung-wa Akpan.jpg';



const PageLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center justify-center p-8">
    <div className="max-w-2xl w-full">
      {children}
    </div>
  </div>
);

const Home = () => (
  <PageLayout>
    <div className="text-center mb-8">
    <Clock />
      <img src={myImage} alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-2">Seung-wa Akpan</h1>
      <p className="text-xl text-gray-400">Backend Developer</p>
    </div>
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">About</h2>
      <p>
      I am a back-end developer with a strong foundation in building APIs using Node.js.
      I'm passionate about creating efficient and scalable solutions.
      </p>
      <p>
        I specialize in backend development with experience in React for frontend projects.
      </p>
      <p>
        I care deeply about writing clean, maintainable code and building user-friendly applications.
      </p>

      <p>
      I am a passionate back-end developer with a strong foundation in building APIs using Node.js.
      </p>
      <p>
        I am skilled in the following technologies: <strong>HTML, CSS, React, Linux, Python, and JavaScript/TypeScript. </strong>
        </p>
       <p>
      I'm interested in creating efficient, scalable solutions and always eager to tackle new challenges in an innovative environment. 
       Currently seeking an entry-level position where I can continue learning, grow my technical expertise, 
       and contribute to impactful projects in a collaborative setting.
       </p>
      

    </div>
  </PageLayout>
);

const Projects = () => (
  <PageLayout>
        <h1 className="text-3xl font-bold mb-8 invisible">s</h1>
        <h1 className="text-3xl font-bold mb-8 invisible">s</h1>


    <h1 className="text-3xl font-bold mb-8">My Projects</h1>
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Event Chat</h2>
        <p>
          This is an application to facilitate communication between speakers and participants in physical events, I built this for my final year project.
          This was a really interesting project to build, still working on a few things, really proud of this one.
          </p>
          <br></br>
          <p>
            Technologies used include Next.js for the frontend and Node.js for the backend, MongoDB for Database, JWT for authentication, Open API for API documentation, Websockets for real-time communication.
          </p>

          <br></br>
        <b> <a href="https://github.com/seung-waedet/event-chat-backend" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a></b>
         <p></p>
         <b><a href="https://event-chat-backend.onrender.com/api-docs/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">API Docs</a></b>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Text2Image</h2>
        <p>Text2Image is a user-friendly text-to-image generator that uses Stability AI's API to create images from text prompts. This Python script allows users to generate images in various formats (JPEG, PNG, WEBP) and save them with custom names.</p>
        <br></br>
        <p>Python libraries I used: requests, PIL (Pillow), pwinput</p>
        <br></br>
       <b><a href="https://github.com/seung-waedet/text2image-python" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a></b>

      </div>
      {/* <div>
        <h2 className="text-2xl font-semibold mb-2">Project 3</h2>
        <p>Brief description of Project 3 and your role in it.</p>
      </div> */}
    </div>
    
  </PageLayout>
);

const Links = () => (
  <PageLayout>
    <h1 className="text-3xl font-bold mb-8">Links</h1>
    <ul className="space-y-4">
      <li><a href="https://github.com/seung-waedet" target="_blank" rel="noreferrer"  className="text-blue-400 hover:underline">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/seungwaakpan/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a></li>
      <li><a href="https://x.com/seungwaedet" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">X</a></li>
      <li><a href="mailto:seungwaakpan@gmail.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Email</a></li>
      <li><a href="https://docs.google.com/document/d/13ajDEqDvIxDnRgxCzLWRxXAvINIiHCoe-v0DkSku8cM/edit?usp=sharing
" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Resume</a></li>

      
    </ul>

  </PageLayout>
);

const App = () => (
  <Router>
    <div className="font-mono">
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
          <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
          <li><Link to="/links" className="text-gray-300 hover:text-white">Links</Link></li>
        </ul>
      </nav>

      <div > 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;