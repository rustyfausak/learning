import globeLogo from './../img/globe.png';

function Header() {
    return (
        <header>
            <img src={globeLogo} alt="Globe Logo" />
            <div>my travel journal.</div>
        </header>
    );
}

export default Header;
