import { About } from "./Components/About"
import { Clients } from "./Components/Clients"
import Contact from "./Components/Contact"
import { Footer } from "./Components/Footer"
import Home from "./Components/Home"
import { Philosophy } from "./Components/Philisophy"
import { Production } from "./Components/Production"
import { Products } from "./Components/Products"
import { Projects } from "./Components/Projects"
import { SetUsApart } from "./Components/SetUsApart"

function App() {

  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="production"><Production /></div>
      <div id="setUsApart"><SetUsApart /></div>
      <div id="philosophy"><Philosophy /></div>
      <div id="projects"><Projects /></div>
      <div id="clients"><Clients /></div>
      <div id="products"><Products /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  )
}

export default App
