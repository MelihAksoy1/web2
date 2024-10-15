interface footerProps {
    footer: string;
}

const Footer = (props: footerProps) => {
    return (
        <footer>{props.footer}</footer>
    );
};

export default Footer;