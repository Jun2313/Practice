import NavBar from "./NavBar";
import { Link} from 'react-router-dom'

export default function HaederLayout(){
  return (
    <div className="GuiContainer">
        <NavBar />
        <ul className="Nav_gui">
          <li>
            <Link to="./About" ele>About</Link>
            </li>
          <li>
            <Link to="./Story" ele>Story</Link>
            </li>
        </ul>
      </div>
  )
}