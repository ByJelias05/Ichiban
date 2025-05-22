import { Header } from "../Components/Header";
import { Menu_Home } from "../Components/Menu-Home";
import image from "../Images/Frames-Moto/moto-0.webp"

import "../Styles/Home.css"

export function Home(){
    return(
        <div className="Contendor-Home">
            <div className="Home-Header">
                <Header></Header>
            </div>
            <div className="Home-Body">
                <div className="Body-Contenedor">
                  <Menu_Home></Menu_Home>
                </div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}