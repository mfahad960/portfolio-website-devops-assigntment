import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
        <div className="main d-flex flex-column">
            <div className="about-head text-size-2">
            Hi! im Muhammad Fahad
            </div>
            <div className="about text-size-3">
            I am a Computer Science bachelor student passionate about AI, ML, DL, and computer vision. 
            Through hands-on projects and coursework, I've honed my skills in building intelligent systems that learn from data and understand visual information. 
            I'm driven by the potential of AI to revolutionize industries and solve complex problems. Let's connect and collaborate on exciting projects together!
            </div>
            <div>
                <Link to="/projects">
                    <button type="button" className="btn btn-purple mx">Projects</button>
                </Link>
                <Link to="/education">
                    <button type="button" className="btn btn-purple mx-3">Education</button>
                </Link>
            </div>
        </div>
    </>
  )
}
