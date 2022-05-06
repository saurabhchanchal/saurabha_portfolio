import React from 'react'
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'
import pharmeasy from "../images/pharmeasy.png.png"
import fraazo from "../images/fraazo.png"
// import githubhero from "../images/Mini Github.png"
import cricbuzz from "../images/Cricbuzz.png.png"
// import grubhero from "../images/GrubHub Hero.png"

function Project() {
    return (
        <div className="Project" id='projectDiv'>
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
  

               
                 <div className="projs">
                    <div className="img">
                        <img src={fraazo} alt="movies" />
                    </div>
                    <div className="title">
                       BigBasket Clone
                    </div>
                    <div className="projinfo">
                    A web application to buy groceries online in India.<br/>
                    <br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage 
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://fraazo-clone-project.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/saurabhchanchal/web-15-fraazo" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>

                 {/* project three */}
                 <div className="projs">
                    <div className="img pharm">
                        <img src={pharmeasy}autoCapitalize alt="movies" />
                    </div>
                    <div className="title">
                       PharmEasy Clone
                    </div>
                    <div className="projinfo">
                    A web application to buy groceries online in India.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | LocalStorage | MongoDb | Express | Mongoose | NPM | Heroku |  etc.
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://merry-kitten-8e2680.netlify.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/paruljamwal/Backend-best-buy-repo" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                 {/* project four */}
                 <div className="projs">
                    <div className="img">
                        <img src={cricbuzz} alt="movies" />
                    </div>
                    <div className="title">
                       CricBuzz Clone
                    </div>
                    <div className="projinfo">
                    A web application for getting live cricket scores and news related to cricket.<br/>
                    Tech Stack: HTML | CSS | Javascript | DOM | Weather API
                    </div>
                     <div className='flex'>
                     <div className="projlinks">
                        <a href="https://cric-buzz.vercel.app/" target={"_blank"}>Live</a>
                    </div>
                    <div className="projlinks">
                        <a href="https://github.com/Rahul130893/CricBuzz" target={"_blank"}>GitHub</a>
                    </div>
                     </div>
                </div>
                </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/saurabhchanchal" target={"_blank"}><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div>
    )
}

export default Project
