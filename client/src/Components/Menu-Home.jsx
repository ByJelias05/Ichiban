import "../Styles/Menu-Home.css"

import arrow from "../Images/Arrow.png"

export function Menu_Home(){
    return(
        <div className="Contendor-Menu-Body">

            <div className="Menu-Body-Left">
                
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label htmlFor="">description</label>
                        <label htmlFor="">mod.001</label>
                    </div>
                </div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <p>Ichiban isn't simply a mode of transport; it's an escape, a liberating streak of freedom in an excessively interconnected world.</p>
            </div>

            <div className="Menu-Body-Center">
                <div className="Items">
                    <label htmlFor="">Scroll</label>
                    <div className="Box-Scroll">
                        <img src={arrow} alt="" />
                    </div>
                    <label htmlFor="">For me</label>
                </div>
            </div>

            <div className="Menu-Body-Rigth">
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label htmlFor="">Browse</label>
                        <label htmlFor="">list:full</label>
                    </div>
                </div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line"></div>
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label htmlFor="">001</label>
                        <a href="">Unique design</a>
                    </div>
                </div>
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label htmlFor="">002</label>
                        <a href="">Key Features</a>
                    </div>
                </div>
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label htmlFor="">003</label>
                        <a href="">Godzilla Mode</a>
                    </div>
                </div>
                <div className="Line">
                    <div style={{width: "50%", display: "flex", justifyContent: "space-between"}}>
                        <label style={{background: "blue"}} htmlFor="">004</label>
                        <div style={{textAlign:"left", background: "red"}}>
                            <a  href="">Contacts Us</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}