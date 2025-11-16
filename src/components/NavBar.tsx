import { useNavigate } from "react-router-dom"


const NavBar = () => {

const navigate = useNavigate()

  return (
    <nav className="navBar">
        <div className="logo">
             <p className="logo_text">I'm-Dev</p> 
          {/*   <img src="./dev.webp" alt="" /> */}
        </div>
        <div className="links">
            <div className="link">Home</div>
            <div className="link">About</div>
            <div className="link">Tecs</div>
            <div className="link">Projets</div>
            <div className="link">Contact</div>
        </div>
    </nav>
  )
}

export default NavBar