import { Link } from 'react-router-dom'
const Narbar = () => {
    return ( 
        <header>
            <div className="nav-container">
                <div className='left-bar'>
                    <Link to="/">Shop</Link>
                    <Link to="/">Contact</Link>
                </div>
                <div className='right-bar'>
                    <Link to="/">Sign in</Link>
                    <Link to="/">Cart</Link>
                </div>
            </div>
        </header>
    );
}

export default Narbar;
