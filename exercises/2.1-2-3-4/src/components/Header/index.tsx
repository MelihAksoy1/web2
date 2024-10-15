interface header {
    logo: string;
    children: React.ReactNode;
}

const Header = (props: header) => {
    return (
        <header>
            <img src={props.logo} alt="logo" />
            {props.children}
        </header>
    );
}

export default Header;