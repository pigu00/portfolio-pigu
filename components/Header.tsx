import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Roberto Marbán - Fullstack Developer</button>
                    <h1 className="white">Desarrollador Web</h1>
                    <hr></hr>
                    <h3 className="gray">NodeJS | Angular | ReactJS | WordPress</h3>
                    <br></br>
                    <a className="green" href="mailto:robertomarban@gmail.com">Contactame</a>
                </div>
                <Image src="/images/fotoWeb.png" width={463} height={513} alt="marban"  /> 
            </div>
        </header>
    )
}