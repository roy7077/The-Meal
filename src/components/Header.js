import '../style/header.css';


const Header=()=>{

    return (
      <div className="header">
       <div className="logo">
        <h1>The-Meal</h1>
       </div>
       <div className="nav-bar">
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
       </div>
      </div>
    )
}

export default Header;