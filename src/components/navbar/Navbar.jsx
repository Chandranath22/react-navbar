import React from "react";
import NavbarConfig from "./NavbarConfig";
import styles from "./Navbar.module.css";

import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
    const { button, logo } = NavbarConfig;
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoContainer} onClick={logo.isClickable ? logo.onclick : null}>
                <div className={logo.isImage ? styles.imgContainer : styles.imgContainerHidden}>
                    <img
                        src={logo.imageSrc}
                        alt={logo.alt}
                        className={styles.logoImg}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1
                        className={styles.logoText}
                    >
                        {logo.name}
                    </h1>
                </div>
            </div>
            <Searchbar onClick={() => console.log("clicked")}/>
            <div className={styles.buttonContainer}>
                {button.map((item, index) => (
                    <button
                        key={index}
                        className={styles.button}
                        onClick={item.onclick}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    )
};

export default Navbar;