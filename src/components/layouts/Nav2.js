import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import logo from '../assets/FHGC weblogo.png';

// import '../../css/layouts/Nav.css'
import '../../css/layouts/PrefixedNav.css';

const Nav2 = () => {
    const [navScroll, setNavScroll] = useState(false)
    const [showDrop1, setShowDrop1] = useState(false)
    const [showDrop2, setShowDrop2] = useState(false)
    const [notHome, setNotHome] = useState(false)

    let location = useLocation()

    useEffect(() => {
        if (location.pathname.slice(1, location.pathname.length)) {
            setNotHome(() => true)
        } else {
            setNotHome(() => false)
        }
    }, [location.pathname])


    const onScroll = () => {
        if (window.pageYOffset > 100) {
            setNavScroll(() => true)
        } else if (window.pageYOffset < 100) {
            setNavScroll(() => false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('touchmove', onScroll)

    })

    const showMenu = () => {
        document.body.classList.add('mobile-menu-visible')
    }

    const closeMenu = () => {
        document.body.classList.remove('mobile-menu-visible')
    }

    const showDropDown1 = () => {
        setShowDrop1(() => !showDrop1)
    }

    const showDropDown2 = () => {
        setShowDrop2(() => !showDrop2)
    }

    const showModal = () => {
        const open = document.querySelector('.search-box-btn');
        const modal = document.getElementById('modal');

        // Show modal
        open.addEventListener('click', () => modal.classList.add('show-modal'));

    }

    const unMountUL = (e) => {

        if (document.body.classList.contains('mobile-menu-visible')) {
            if (!e.target.classList.contains('dropdown-btn') && !e.target.classList.contains('fa-angle-down')) {
                document.body.classList.remove('mobile-menu-visible')
            }
        }
        e.preventDefault()
    }

    return (
        <header className={`main-header header-style-two alternate-two ${navScroll ? 'fixed-header' : 'nothing'}`}>

            <div className="main-box">
                <div className="auto-container clearfix">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" title="FloraHomes GC" width="150" />
                            </Link>
                        </div>
                    </div>

                    <div className="nav-outer clearfix">
                        <div className="mobile-nav-toggler" onClick={showMenu}>
                            <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: '#541484' }}></i></span>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li className="dropdown"><Link to="/product">Products</Link>
                                        <ul>

                                            <li><Link to="/verification">Verification Service</Link></li>
                                            <li><Link to="/cpbs">Complete Property Buyer Service</Link></li>
                                            <li><Link to="/floracity">Floracity</Link></li>
                                            <li><Link to="/#">Bulk And Purchase</Link></li>
                                            <li><Link to="/#">Design Build &amp; Manage</Link></li>
                                            <li><Link to="/#">Books</Link></li>
                                            <li><Link to="/#">Professional Advisory</Link></li>
                                            <li><Link to="/#">Investment Management</Link></li>
                                            <li><Link to="/#">Sell My Property</Link></li>

                                        </ul>
                                        <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                                    <li className="dropdown"><Link to="/our-estates">Our Estates</Link>
                                        <ul>
                                            <li>
                                                <Link to="/thefernisland">The Fern Island</Link>
                                            </li>
                                            <li>
                                                <Link to="/the-hive">The Hive</Link>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>

                                    <li className=""><Link to="blog.">Blog</Link></li>

                                </ul>
                            </div>
                        </nav>

                        <div className="outer-box">

                            <div className="search-box-outer" onClick={showModal}>
                                <div className="search-box-btn">
                                    <span className="fa fa-search"></span>
                                </div>
                            </div>

                            <div className="btn-box">
                                {/* <Link to="/login-signup" className="theme-btn btn-style-one"><span className="btn-title">SignUp / Login</span></Link> */}
                                {
                                    notHome ? <Link to='/login-signup'>
                                        <button type="button" className="custom-btn btn btn-lg">SignUp / Login</button>
                                    </Link> : <ScrollLink to='signUp' spy={true} smooth={true}>
                                            <button type="button" className="custom-btn btn btn-lg">SignUp / Login</button>
                                        </ScrollLink>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn">
                    <span className="icon flaticon-cancel-1"></span>
                </div>

                <nav className="menu-box">
                    <div className="nav-logo" onClick={closeMenu}>
                        <Link to="/">
                            <img src={logo} alt="logo" title="" />
                        </Link>
                    </div>
                    <ul className="navigation clearfix" onClick={unMountUL}>

                        <li><Link to="/login-signup">login / SingUp</Link></li>



                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li className="dropdown"><Link to="/product">Products</Link>
                            <ul style={{ display: `${showDrop1 ? 'block' : 'none'}` }}>

                                <li><Link to="/verification">Verification Service</Link></li>
                                <li><Link to="/cpbs">Complete Property Buyer Service</Link></li>
                                <li><Link to="/#">Floracity</Link></li>
                                <li><Link to="/#">Bulk &amp; Purchase</Link></li>
                                <li><Link to="/#">Design Build &amp; Manage</Link></li>
                                <li><Link to="/#">Done-For-You Investment</Link></li>
                                <li><Link to="/#">Books</Link></li>
                                <li><Link to="/#">Professional Advisory</Link></li>
                                <li><Link to="/#">Investment Management</Link></li>
                                <li><Link to="smp.">Sell My Property</Link></li>

                            </ul>
                            <div className="dropdown-btn" onClick={showDropDown1}>
                                <span className="fa fa-angle-down"></span>
                            </div>
                        </li>
                        <li className="dropdown"><Link to="/our-estates">Our Estates</Link>
                            <ul style={{ display: `${showDrop2 ? 'block' : 'none'}` }}>
                                <li><Link to="/#">The Fern Island</Link></li>
                                <li><Link to="/#">The Hive</Link></li>
                            </ul>
                            <div className="dropdown-btn" onClick={showDropDown2}>
                                <span className="fa fa-angle-down"></span>
                            </div>
                        </li>

                        <li className=""><Link to="/#">Blog</Link></li>
                    </ul>
                </nav>
                <div className="close-btn" onClick={closeMenu}>
                    <i className="fas fa-window-close"></i>
                </div>
            </div>

        </header>
    )
}

export default Nav2
