import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import '../../Pages/Contact/contact'
import { Link } from 'react-router-dom'

const header = () => {
    return (
        <div>
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg">

                    {/* Logo Section */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className='logo' />
                    </Link>

                    {/* Toggle button for mobile view */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links Section */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className='nav-item'><Link to="/">Home</Link></li>
                            <li className='nav-item'><Link to="/portfolio">Portfolio</Link></li>
                            <li className='nav-item'><Link to="https://drive.google.com/file/d/1V2Fyspjh_tw9iUKOWlO0LZZ9FYrnq8Um/view?usp=sharing">Resume</Link></li>
                            <li className='nav-item'><a href="#experiance">Experiance</a></li>
                        </ul>
                    </div>

                    {/* Contact Button Section */}
                    <div className="d-none d-lg-block">
                        <Link to='/contact' className="btn-header">Get Into Touch</Link>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default header
