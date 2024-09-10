import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo/logo.png';
import logo2 from '../assets/images/logo/logo-3.png';


const NavItems = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // AddEvent Listener
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }
        else{
            setHeaderFixed(false);
        }
    })

    return (
     <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* Header_Top_Start */}
        <div className={`header-top d-md-none ${socialToggle ? "open": ""}`}>
        <div className="container">
            <div className="header-top-area">
                <Link to='/signup' className="lab-btn me-3"><span>Create Account</span></Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
        </div>

        {/* Header_botton */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>

                        </div>
                    </div>

                    {/* Menu Area */}

                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/blog'>Bolg</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                      {/* Sign in & Login */}
                      <Link to='/sign-up' className="lab-btn m-3 d-none d-md-block">Create Account</Link>
                      <Link to='/login' className="d-none d-md-block">Login</Link>

                      {/* Menu Toggle */}
                      <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>

                      </div>
                      {/* social toggle */}
                      <div onClick={()=> setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
                      <i className="icofont-info-square"></i>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
     </header>
    );
};

export default NavItems;

