import React from "react";
import styles from "./Navbar.module.css";

import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";

const Navbar = (props) => {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.logoContainer} onClick={props.isClickable ? props.onLogoClick : null}>
                <div className={props.isImage ? styles.imgContainer : styles.imgContainerHidden}>
                    <img
                        src={props.imgSrc}
                        alt={props.alt}
                        className={styles.logoImg}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1
                        className={styles.logoText}
                    >
                        {props.name}
                    </h1>
                </div>
            </div>
            <Searchbar onClick={props.onClick} />
            <div className={styles.buttonContainer}>
                {props.button.map((item, index) => (
                    <Button
                        key={index}
                        label={item.name}
                        isImage={false}
                        isImgLeft={true}
                        styles={{ background: "transparent", marginLeft: "1rem" }}
                        onClick={() => console.log("clicked")}
                    />
                ))}
            </div>
        </nav>
    )
};

export default Navbar;

Navbar.defaultProps = {
    imgSrc: "https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg",
    alt: "",
    name: "Logo",
    onClick: () => console.log("default"),
    isImage: true,
    isClickable: false,
    onLogoClick: () => console.log("default"),
    button: [
        {
            name: "Sign up",
            onclick: () => console.log("clicked")
        },
        {
            name: "Login",
            onclick: () => console.log("clicked")
        },
        {
            name: "About",
            onclick: () => console.log("clicked")
        }
    ]
};