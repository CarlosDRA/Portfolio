import Menu from "./components/menu/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Work from "./components/work/index";

import { useState } from "react";

import './App.scss'


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const group = document.querySelectorAll(".card");


  const handleRightClick = () => {
      console.log(group);
      const nextIndex = currentIndex + 1 <= group.length - 1 ? currentIndex + 1: 0;

      const currentCard = document.querySelector(`[data-index="${currentIndex}"]`);
      const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
      console.log(currentCard);
      console.log(nextIndex)

      currentCard.dataset.status = "after";

      nextCard.dataset.status = "active";

      setCurrentIndex(nextIndex);
      //setCurrentIndex(index => index + 1);
  }

  const handleLeftClick = () => {
      setCurrentIndex(index => index - 1);
  }

  return (
    <div className='app'>
      <Menu />
      <Home />
      <About />
      <Work
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
  )
}

export default App
