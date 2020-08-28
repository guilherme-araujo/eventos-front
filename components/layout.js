import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import layoutStyle from '../styles/layout.module.css'

const name = 'BioME'
export const siteTitle = 'Eventos - BioME'

export default function Layout({ children, home }) {

    const [aboutIsOpen, updateAboutIsOpen] = useState(false);
    const [coreIsOpen, updateCoreIsOpen] = useState(false);
    const [outreachIsOpen, updateOutreachIsOpen] = useState(false);

    return (
        <div className="style-container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Sistema de eventos do BioME - IMD/UFRN"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className="header-eventos">
                <div className="container-top">
                    <Navbar bg="dark" variant="dark" expand="lg" >
                        <Container>
                            <Link href="https://bioinfo.imd.ufrn.br/">
                                <a><Navbar.Brand >
                                    <img src="/images/biome2.png" alt="logo" className={`${layoutStyle.logoImg}`} />
                                </Navbar.Brand>
                                </a>
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav ">

                                <Nav className="p-3 ">
                                    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>
            </header>

            <main>{children}</main>

            <footer id="footer" className="bg-dark">
                <div className={`${layoutStyle.copyrights}`}>
                    <Container>
                        <div className={`${layoutStyle.col_half}`}>
                            Copyrights &copy; 2019 All Rights Reserved by BioME.
                            <br />

                        </div>
                        <div className={`${layoutStyle.col_half} `} >
                            <i className={`${layoutStyle.iconEnvelope2} `}></i> bioinfo@imd.ufrn.br <span className="middot">&middot;</span>
                            <i className={`${layoutStyle.iconHeadphones} `}></i> +55 (84) 3342-2216 Ramal 123
                        </div>

                    </Container>
                </div>
            </footer>


        </div>
    )
}