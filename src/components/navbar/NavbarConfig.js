const NavbarConfig = {
    logo: {
        isImage: true,
        name: "Logo",
        imageSrc: "https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg",
        alt: "",
        isClickable: false,
        onclick: () => console.log("logo clicked")
    },
    searchbar: {
        withImage: false,
        imageSrc: ""
    },
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

export default NavbarConfig;