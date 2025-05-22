import { Header } from "../Components/Header";
import { Menu_Home } from "../Components/Menu-Home";
import image from "../Images/Frames-Moto/moto-0.webp"

import Gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import lenis from "lenis"

import "../Styles/Home.css"
import { useEffect, useRef, useState } from "react";

export function Home(){

    const ContenedorBackgroundRef = useRef(null);
    const [Frames, setFrames] = useState(0);

    useEffect(() =>{

        Gsap.registerPlugin(ScrollTrigger);

        const Lenis = new lenis();
        function raf(times){
            Lenis.raf(times);
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf);

        Gsap.ticker.add(times =>{
            ScrollTrigger.update(times)
        });

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(values){
                return arguments.length ? Lenis.scrollTo(values) : Lenis.scroll
            },
            getBoundingClientRect(){
                return {
                    top: 0,
                    left: 0,
                    height: window.innerHeight,
                    width: window.innerWidth
                }
            },
            pinType: document.body.style.transform ? "transform" : "fixed"
        });

        const CANTIDAD_FRAMES = 151;
        
        let ctx = Gsap.context(() =>{
            ScrollTrigger.create({
                trigger: ContenedorBackgroundRef.current,
                start: "top top",
                end: "bottom+=1000 top",
                scrub: 5,
                pin: true,
                onUpdate: (self) =>{
                    const progress = self.progress;
                    const currentFrames = Math.floor(progress * (CANTIDAD_FRAMES - 1))
                    setFrames(currentFrames)
                }
            })
        }, ContenedorBackgroundRef)

        return () => ctx.revert();
    }, [])

    return(
        <div className="Contendor-Home">
            <div className="Home-Header">
                <Header></Header>
                 <div className="Body-Contenedor">
                  <Menu_Home></Menu_Home>
                </div>
            </div>
            <div className="Home-Body">
               
                <div ref={ContenedorBackgroundRef} className="Contenedor-Image-Background">
                    <img src={`../src/Images/Frames-Moto/moto-${Frames}.webp`} alt="" />
                </div>
            </div>
        </div>
    )
}