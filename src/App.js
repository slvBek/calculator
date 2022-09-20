import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const handleResponse = () => {
    try {
      setInput(eval(input));
    }catch (error) {
      setInput("Error");
    }
  };
  const handleC = () => {
    setInput("");
  };
  const handleBack = () => {
    setInput(input.slice(0, input.length-1));
  }
  return (
  
    <div class="calculator">
      <input class="value" type="text" value={input} />
      <button onClick={handleC} class="numclear">C</button>
      <button onClick={handleBack} class="numclear">Back</button>
      <button name="/" onClick={(e) => setInput(input.concat(e.target.name))} class="num">/</button>
      <button name="*" onClick={(e) => setInput(input.concat(e.target.name))} class="num">*</button>
      <button name="-" onClick={(e) => setInput(input.concat(e.target.name))} class="num">-</button>
      <button name="+" onClick={(e) => setInput(input.concat(e.target.name))} class="num plus">+</button>
      <button name="1" onClick={(e) => setInput(input.concat(e.target.name))} class="num">1</button>
      <button name="2" onClick={(e) => setInput(input.concat(e.target.name))} class="num">2</button>
      <button name="3" onClick={(e) => setInput(input.concat(e.target.name))} class="num">3</button>
      <button name="4" onClick={(e) => setInput(input.concat(e.target.name))} class="num">4</button>
      <button name="5" onClick={(e) => setInput(input.concat(e.target.name))} class="num">5</button>
      <button name="6" onClick={(e) => setInput(input.concat(e.target.name))} class="num">6</button>
      <button name="7" onClick={(e) => setInput(input.concat(e.target.name))} class="num">7</button>
      <button name="8" onClick={(e) => setInput(input.concat(e.target.name))} class="num">8</button>
      <button name="9" onClick={(e) => setInput(input.concat(e.target.name))} class="num">9</button>
      <button name="0" onClick={(e) => setInput(input.concat(e.target.name))} class="num">0</button>
      <button name="000" onClick={(e) => setInput(input.concat(e.target.name))} class="num">000</button>
      <button onClick={handleResponse} class="num equal">=</button>
    </div>
    
  );
};
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}
balls.forEach((el, i) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


export default App;
