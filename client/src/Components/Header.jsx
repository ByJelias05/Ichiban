import "../Styles/Header.css"
import Logo from "../Images/Logo.png"

export function Header(){
    return(
        <div className="Contenedor-Header">
            <div className="image">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}