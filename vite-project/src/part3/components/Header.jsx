import chefLogo from './../img/chef.png';

function Header() {
    return (
        <header>
            <img src={chefLogo} alt="Chef Logo" className="logo" />
            Robot Chef
        </header>
    );
}

export default Header;
