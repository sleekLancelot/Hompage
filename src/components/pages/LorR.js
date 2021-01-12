import React, { useRef, useState, Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Reg from './Reg';
import '../../css/LorR.css';

const LorR = () => {
    const [showReg, setShowReg] = useState(false);
    const [showLog, setShowLog] = useState(true);

    const [notHome, setNotHome] = useState(false)

    const location = useLocation()

    const login = useRef('Login')
    const register = useRef('Register')
    const With = useRef('Register With')

    const log = (e) => {
        setShowReg(() => false);
        setShowLog(() => true);
        With.current = `${login.current.outerText} with:`;

        e.preventDefault();
    }

    const reg = (e) => {
        setShowReg(() => true);
        setShowLog(() => false);
        With.current = `${register.current.outerText} with:`;

        e.preventDefault();
    }

    useEffect(() => {
        if (location.pathname.slice(1, location.pathname.length)) {
            setNotHome(() => true)
        } else {
            setNotHome(() => false)
        }
    }, [location.pathname])

    return (
        <Fragment>
            {notHome && <section className="page-title" style={{ marginBottom: '50px' }}>
                <div className="auto-container">
                    <h1>Login / SignUp With Us</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
            </section>}

            <div id='signUp' className='lor'>
                <p className="lorCaption text-center">
                    Join <strong>millions</strong>  of real estate investors, buyers, developers, professionals, realtors, contractors, organisations and other stakeholders that are getting ahead in their investment knowledge, profitability, security and networking.
            </p>
                <div className="formBox">
                    <div className="btnBox">
                        <div style={{ left: showLog ? '110px' : '0' }} className="btnColor"></div>
                        <Link to='/register' ref={register} id="register" className="lr-btn" onClick={reg}>SignUp</Link>
                        <Link to='/login' ref={login} id="login" className="lr-btn" onClick={log}>Login</Link>
                    </div>
                    <p reg={With} className="with">{With.current}</p>
                    <div className="socials">
                        <i className="fab fa-facebook-f fa-2x"></i>
                        <i className="fab fa-twitter fa-2x"></i>
                        <i className="fab fa-google fa-2x"></i>
                    </div>
                    <div className="LorR" style={{ marginBottom: showLog ? '-400px' : '0' }}>
                        <Reg showReg={showReg} />
                        <Login showLog={showLog} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LorR
