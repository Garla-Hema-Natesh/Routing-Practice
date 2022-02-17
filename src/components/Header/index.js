import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image"
        />
        <h1>Wave</h1>
      </div>

      <ul className="list-container">
        <li className="eachListStyle">
          <Link to="/">Home </Link>
        </li>
        <li className="eachListStyle">
          <Link to="about">About </Link>
        </li>
        <li className="eachListStyle">
          <Link to="contact">Contact </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
