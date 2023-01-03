import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    const getClassName = () => {
        if (props.isImage) {
            if (props.isImgLeft) {
                return styles.buttonWithImageLeft;
            }
            else {
                return styles.buttonWithImageRight;
            }
        }
        return styles.button;
    };

    return (
        <button
            className={getClassName()}
            onClick={props.onClick}
            style={props.styles}
        >
            {
                props.isImage
                    ?
                    (
                        <span>
                            <img src={props.imageSrc} alt={props.alt} style={props.imgStyles} />
                        </span>
                    )
                    :
                    ""
            }
            {props.label}
        </button>
    )
};

export default Button;

Button.defaultProps = {
    label: "Btn",
    isImage: false,
    isImgLeft: true,
    imageSrc: "https://e1.pngegg.com/pngimages/1006/392/png-clipart-metronome-blue-play-button-icon-thumbnail.png",
    alt: "alt",
    imgStyles: { width: "15px", height: "15px" },
    onClick: () => console.log("default")
}