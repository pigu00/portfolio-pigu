import React from "react";
import Image, { StaticImageData } from "next/image";
import Footer from "./Footer";
export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <h2 className="white">Proyectos</h2>
                    <AboutCard
                        title="Backend"
                        icon="/icons/node_icon.png"
                        description="Backend app mensajeria"
                        link={`https://github.com/pigu00/correos-internos-back`}
                        deploy=""
                        description2="Backend consulta personajes Disney"
                        link2='https://github.com/pigu00/app-personajes-disney-node'
                        deploy2="" />
                    <AboutCard
                        title="Angular"
                        icon="/icons/angular-icono.png"
                        description="Frontend app mensajeria"
                        link='https://github.com/pigu00/correos-internos-front'
                        deploy=""
                        description2="App Pokemon fetch"
                        link2='https://github.com/pigu00/pokemon'
                        deploy2="https://pokemon-fetch-angular.netlify.app/" />
                    <AboutCard
                        title="React"
                        icon="/icons/react.png"
                        description="App fecth Rick & Morty"
                        link='https://github.com/pigu00/rick-morty-api-react'
                        deploy="https://rick-morty-api-r.netlify.app/"
                        description2="App carrito con Fake API"
                        link2='https://github.com/pigu00/app-carrito-react'
                        deploy2="https://app-carrito-fake-api.netlify.app/" />

                    <AboutCard
                        title="WordPress"
                        icon="/icons/wordpress_icon.png"
                        description="Desarrollo web personal"
                        link=''
                        deploy="https://matiascivale.com.ar/"
                        description2="Desarrollo web institucional"
                        link2=''
                        deploy2="https://juntostandil.com.ar/" />
                </div>

                <div className="flex-full about-text">
                    <h3 className="white">Desarrollador web Fullstack, Node.js, Express.js, MySql, React y Angular. Experiencia en desarrollo de sitios con WordPress (Elementor).</h3>
                    <p className="gray"> Experiencia en Marketing Digital en META y Google Adsense en campañas electorales</p>
                    <br />
                    <span className="white">Tandil, Buenos Aires Argentina</span>
                    <br />
                    <br />
                    <div className="footer" >

                    <Footer  />
                    </div>
                    
                    
                </div>
            </div>


        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    link: string,
    deploy: string,
    description2: string,
    link2: string
    deploy2: string,
}

function AboutCard({ title, icon, description, link, description2, link2, deploy, deploy2 }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <br></br>
            <p className="white">{description}</p>
            {link && (
                <>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="gray">&lt;Code/&gt;💻</a>
                </>
            )}
            {deploy && (
                <>
                    <a href={deploy} target="_blank" rel="noopener noreferrer" className="gray"> Live🌎</a>
                </>
            )}
            <br></br>
            <br />
            <hr />
            <br />
            <p className="white">{description2}</p>
            {link2 && (
                <>
                    <a href={link2} target="_blank" rel="noopener noreferrer" className="gray">&lt;Code/&gt;💻</a>{' '}
                </>
            )}
            {deploy2 && (
                <>
                    <a href={deploy2} target="_blank" rel="noopener noreferrer" className="gray">Live🌎</a>
                </>
            )}
        </div>
    )
}

