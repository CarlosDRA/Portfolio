import Menu from "./components/menu/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Work from "./components/work/index";

import './App.scss'


function App() {

  return (
    <div className='app'>
      <Menu />
      <Home />
      <About />
      <Work />
    </div>
  )
}

export default App
