import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
            <nav className="flex justify-between items-center container md:py-0.5 pt-4 pb-3">

                {/* logo */}
                <Link to="/">
                    <img src={logo} alt="" width={150} height={70} />
                </Link>

                {/* account and shopping button */}
                <div className="text-lg text-black sm:flex items-center gap-4 hidden">
                    <Link to="/signup" className="flex items-center gap-2"><FaUser />Account</Link>
                    <Link to="/cart" className="flex items-center gap-2"><FaShoppingCart />Shopping</Link>
                </div>

                {/* navbar for sm devices  */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes className="text-black w-5 h-5" /> : <FaBars className="text-black w-5 h-5" />}
                    </button>
                </div>
            </nav>

            <hr />

            {/* only mobile menu items */}
            <div>
                <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                    <li className="hover:text-orange-500 my-3 cursor-pointer">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li className="hover:text-orange-500 my-3 cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="hover:text-orange-500 my-3 cursor-pointer">
                        <Link to="/cart"><FaShoppingCart />Cart</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
