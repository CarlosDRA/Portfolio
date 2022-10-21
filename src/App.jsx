import Menu from "./components/menu/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Work from "./components/work/index";

import { useState, useEffect } from "react";

import './App.scss'


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [group, setGroup] = useState();
  
  useEffect(() => {
    setGroup(document.querySelectorAll(".card"));
  }, [currentIndex])
  
  const handleRightClick = () => {
    const nextIndex = currentIndex + 1 <= group.length -1 ? currentIndex + 1: 0;
    const prevIndex = currentIndex - 1 < 0 ? group.length - 1 : currentIndex - 1;
    
    const currentCard = document.querySelector(`[data-index="${currentIndex}"]`);
    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
    const prevCard = document.querySelector(`[data-index="${prevIndex}"]`)

    prevCard.dataset.status="right";
    currentCard.dataset.status = "left";
    nextCard.dataset.status = "active";

    setCurrentIndex(nextIndex);
  }

  const handleLeftClick = () => {
    const nextIndex = currentIndex - 1 < 0 ? group.length - 1 : currentIndex - 1;
    const prevIndex = currentIndex + 1 <= group.length -1 ? currentIndex + 1: 0;
    
    const currentCard = document.querySelector(`[data-index="${currentIndex}"]`);
    const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
    const prevCard = document.querySelector(`[data-index="${prevIndex}"]`);

    prevCard.dataset.status="left";
    currentCard.dataset.status = "right";
    nextCard.dataset.status = "active";

    console.log("Current index", currentIndex);
    console.log("next index", nextIndex)
    console.log("prevIndex", prevIndex);

    setCurrentIndex(nextIndex);
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
