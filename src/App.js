import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Process from "./components/Process/Process"
import Showcase from "./components/Showcase/Showcase"
import Developers from "./components/Developers/Developers"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Process />
      <Showcase />
      <Developers />
      <Footer />
    </div>
  )
}

export default App
