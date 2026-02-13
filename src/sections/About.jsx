import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailBtn from "../components/CopyEmailBtn";
import {FrameWorks} from "../components/FrameWorks";

 const About = () => {
    const grid2Container = useRef();
   return (
     <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src='assets/coding-pov.png'className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50
                md:inset-y-10 lg:scale-[2.5]" />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Anmol Pandey</p>
                    <p className="subtext">
                       In the last few years, I've gotten really good at Full-Stack and AI, 
                       and I've made software and web apps that are dynamic and can grow.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/2
                bg:gradient-t0-t from-indigo" />
        </div>

            {/* Grid 2 */}
            <div className="grid-default-color grid-2" ref={grid2Container}>
                <div className="flex items-center justify-center h-full w-full">
                    <p className="flex items-end text-5xl text-grey-500">
                        CODE IS CRAFT
                    </p>
                    <Card style={{rotate: '75deg', top:'30%', left:'20%'}} text={"LLMs"} containerRef={grid2Container}/>
                    <Card text={"AI Systems"} style={{rotate: '-30 deg', top:'60%', left:'45%'}} containerRef={grid2Container}/>
                    <Card text={"RAG"} style={{rotate: '90deg', botton:'30%', left:'70%'}} containerRef={grid2Container}/>
                    <Card text={"Cloud Native"} style={{rotate: '-45deg', top:'55%', left:'28%'}} containerRef={grid2Container}/>
                    <Card text={"Distributed Systems"} style={{rotate: '20deg', top:'10%', left:'30%'}} containerRef={grid2Container}/>
                    <Card image='assets/logos/cplusplus.svg' style={{rotate: '30deg', top:'70%', right:'70%'}} containerRef={grid2Container}/>
                    <Card image='assets/logos/git.svg' style={{rotate: '56deg', bottom:'70%', left:'65%'}} containerRef={grid2Container}/>
                    <Card image='assets/logos/javascript.svg' style={{rotate: '86deg', top:'25%', left:'35%'}} containerRef={grid2Container}/>
                    <Card image='assets/logos/react.svg' style={{rotate: '-65deg', bottom:'25%', left :'75%'}} containerRef={grid2Container}/>
                    <Card image='assets/logos/sqlite.svg' style={{rotate: '30deg', top:'25%', right :'75%'}} containerRef={grid2Container}/>
                </div>
            </div>

            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p>Based in Mumbai, India, and open to remote opportunities worldwide.</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe/>
                </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Do you want to start a project together?
                    </p>
                    <CopyEmailBtn/>
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Tech Stack</p>
                    <p className="subtext">I specialize in a diverse range of programming languages, frameworks, and development tools 
                        that enable me to design and build robust, scalable, and high-performance applications.</p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <FrameWorks/>
                </div>
            </div>
        </div>
     </section>
   );
 };
 
 export default About;