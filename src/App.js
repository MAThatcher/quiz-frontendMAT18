import React, {useState, useContext} from 'react';
import EndScreen from './components/EndScreen';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import {QuizContext} from './Helpers/Contexts'


function App() {
  const [gameState,setGameState] = useState("menu")
  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <QuizContext.Provider value={{gameState,setGameState}}>
      {gameState === "menu" && <Menu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;