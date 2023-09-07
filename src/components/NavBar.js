import { Link } from "react-router-dom";

function NavBar() {

    return (
      <div className="NavBar">
        <Link to="/" className='Link'>Movie</Link>
		    <Link to="/Actor" className='Link'>Actor</Link>
      </div>
    );
  }
  
  export default NavBar;