import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
           
            <ul className="flex">
               
               
                <li>
                    <a href="https://www.linkedin.com/in/pigu00/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/pigu00" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/pigu.marban" target="_blank" rel="noreferrer">
                        <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5492494671799" target="_blank" rel="noreferrer">
                        <Image src="/icons/telefono.png" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:robertomarban@gmail.com" target="_blank" rel="noreferrer">
                        <Image src="/icons/correo.png" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}