import '../style/header.css';
import { Link } from 'react-router-dom';

const Header=()=>{

    return (
      <div className="header">
       <div className="logo">
        <h1>The-Meal</h1>
       </div>
       <div className="nav-bar">
        <ul>
        <li><Link to="/" className='l1'>Home</Link></li>
        <li><Link to="/about" className='l2'>About</Link></li>
        <li><Link to="/contact" className='l3'>Contact</Link></li>
        <li className='l4'>Favourite</li>
        </ul>
       </div>
      </div>
    )
}

export default Header;