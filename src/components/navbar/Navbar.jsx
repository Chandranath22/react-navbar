import React from "react";
import NavbarConfig from "./NavbarConfig";
import styles from "./Navbar.module.css";

import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";

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
            <Searchbar onClick={() => console.log("clicked")} />
            <div className={styles.buttonContainer}>
                {button.map((item, index) => (
                    <Button 
                        key={index}
                        label={item.name}
                        isImage={false}
                        isImgLeft={true}
                        styles={{background: "transparent", marginLeft: "1rem"}}
                        onClick={() => console.log("clicked")}
                    />
                ))}
            </div>
        </nav>
    )
};

export default Navbar;