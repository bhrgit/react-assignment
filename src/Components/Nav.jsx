import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div>
            <nav className="flex justify-between bg-white p-4" style={{ marginLeft: '145px', marginRight: '145px', paddingLeft: '32px', paddingRight: '32px' }}>
                <img src={logo} alt="Logo" />
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-475569">Home</a></li>
                    <li><a href="#" className="text-475569">Technologies</a></li>
                    <li><a href="#" className="text-475569">Projects</a></li>
                    <li><a href="#" className="text-475569">About</a></li>
                    <li><a href="#" className="text-475569">Contact</a></li>
                </ul>
                <div className="flex space-x-2">
                    <button className="btn btn-outline btn-secondary">Sign In</button>
                    <button className="btn btn-secondary">Sign Up</button>
                </div>
            </nav>
            
        </div>
    );
};

export default Nav;