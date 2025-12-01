import { 
  Welcome, 
  NavBar, 
  ImageSection, 
  Techs, 
  Home, 
  About, 
  Footer, 
  Proyects
} from "./components"



function App() {


  return (
    <>
    <div className="scroll-watcher"></div>
      <Home />
      <NavBar />
      <Welcome />
      <ImageSection/>
      <Techs/>
      <About/>
      < Proyects/>
      <Footer/>
    </>
  )
}

export default App
