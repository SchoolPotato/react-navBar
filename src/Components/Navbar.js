import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBehance, FaTwitter, FaFacebookF, FaLinkedin, FaRedditAlien, FaBars } from "react-icons/fa";
import List from "./List";

const Navbar = () => {
    const [ currentWidth, setCurrentWidth ] = useState(window.innerWidth);
    const [ clicked, setClicked ] = useState(false);
    // console.log(currentWidth);
    const showSocials = (shown) => {
        if(shown) {return (
            <div className={"Navbar Clicked"} id="socialsCompressed">
                <div className="Social">
                    <a rel="noreferrer" target="_blank" href="https://twitter.com"><FaTwitter /></a>
                    <a rel="noreferrer" target="_blank" href="https://facebook.com"><FaFacebookF /></a>
                    <a rel="noreferrer" target="_blank" href="https://behance.net"><FaBehance /></a>
                    <a rel="noreferrer" target="_blank" href="https://linkedin.com"><FaLinkedin /></a>
                    <a rel="noreferrer" target="_blank" href="https://reddit.com"><FaRedditAlien /></a>
                </div>
             </div>
        )}
    }

    useEffect(() => {
        window.addEventListener("resize", ()=>{
            let innerWidth = window.innerWidth;
            setCurrentWidth(innerWidth);
            //console.log(currentWidth);
        });
        //setClicked("Clicked");
    }, [])

    if(currentWidth >= 1085){
        return (
            <div className="Navbar">
            <h2 id="Logo"><span id="Hello">Hello</span>There</h2>
            <div className="Links">
                <Link className="Link1" to="/">Home</Link>
                <Link className="Link2" to="/about">About</Link>
                <Link className="Link3" to="/products">Products</Link>
                <Link className="Link4" to="/cart">Cart</Link>
            </div>
            <div className="Social">
                <a rel="noreferrer" target="_blank" href="https://twitter.com"><FaTwitter /></a>
                <a rel="noreferrer" target="_blank" href="https://facebook.com"><FaFacebookF /></a>
                <a rel="noreferrer" target="_blank" href="https://behance.net"><FaBehance /></a>
                <a rel="noreferrer" target="_blank" href="https://linkedin.com"><FaLinkedin /></a>
                <a rel="noreferrer" target="_blank" href="https://reddit.com"><FaRedditAlien /></a>
            </div>
        </div>
        )
    }else {
        return (
            <>
                <div className="Navbar Compressed">
                    <h2 id="Logo"><span id="Hello">Hello</span>There</h2>
                    <button className={(clicked) ? "menuTurn" : "menu"} onClick={()=>{setClicked(!clicked)}}><FaBars /></button>
                </div>
                {showSocials(clicked)}
                <List clicked={clicked} item="Home" />
                <List clicked={clicked} item="About"/>
                <List clicked={clicked} item="Products"/>
                <List clicked={clicked} item="Cart" />
            </>
        )
    }
}

export default Navbar
