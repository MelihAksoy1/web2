interface footer {
    logo: string;
    children: React.ReactNode;
}

const Footer = (props: footer) => {
    return (
        <footer>
            {props.children}
            <img src={props.logo} alt="logo" className="logo" />
        </footer>
    );
}

export default Footer;