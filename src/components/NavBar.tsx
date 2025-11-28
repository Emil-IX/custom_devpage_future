

const NavBar = () => {


  return (
    <nav className="navBar">
        <div className="logo">
             <p className="logo_text">I'm-Dev</p> 
          {/*   <img src="./dev.webp" alt="" /> */}
        </div>
        <div className="links">
            <a href="" className="link">Home</a>
            <a href="#tech" className="link">Tech</a>
            <a href="#about" className="link">About</a>
            <a href="#proyects" className="link">Projets</a>
            <a href="#footer" className="link">Contact</a>
        </div>
    </nav>
  )
}

export default NavBar