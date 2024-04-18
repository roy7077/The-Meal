import '../style/header.css';
import { Link } from 'react-router-dom';

const Header=()=>{

    return (
      <div className="header">
       <div className="logo">
        <Link to="/" className='logo-link'><h1>The-Meal</h1></Link>
       </div>
       <div className="nav-bar">
        <ul>
        <li><Link to="/app" className='l1'>Home</Link></li>
        <li><Link to="/app/about" className='l2'>About</Link></li>
        <li><Link to="/app/contact" className='l3'>Contact</Link></li>
        <li><Link to="/app/favourite" className='l3'>Favourite</Link></li>
        </ul>
       </div>
      </div>
    )
}

export default Header;