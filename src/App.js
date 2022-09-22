import React, {useState} from "react";
import "./App.css";
import "./component/style.css"
import $ from 'jquery';

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
$(document).ready(function() {
  setAnimations();
});

function setAnimations() {
  var collection = $(".fadeOut");
  collection.each(function() {
    animateNumber($(this));
  });
}

function animateNumber(x) {
  var newPosition = makeNewPosition();
  var newFontSize = makeNewFontSize();
  x.css({ top: newPosition[0], left: newPosition[1], fontSize: newFontSize });
  x.animate({ fontSize: newFontSize + 20}, 5000, function() {
    animateNumber(x);
  }); 
}

function makeNewPosition() {
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function makeNewFontSize() {
  return Math.floor(Math.random() * 18);
}



export default App;
