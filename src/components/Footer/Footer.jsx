function Footer() {
    return (
        <footer>
            &copy; {new Date().getFullYear()} Movie Search by{' '}
            <a
                href="https://github.com/lastavchuk"
                target="_blank"
                rel="noopener noreferrer"
            >
                lastavchuk
            </a>
        </footer>
    );
}

export default Footer;
