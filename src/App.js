import React, { useState } from "react";
import Block from "./components/Block";


function App() {
  const ratings = ["fantastic", "good", "bad", "very good", "wonderful"]
  const [clicked, setClicked] = useState(null)
  const changeColorHanlder = (i)=>{
    setClicked(i)
  }
  return (
    <div className="container">
      {ratings.map((_, i) => <Block key={i} index={i} clicked={clicked} colorHanlder={changeColorHanlder.bind(null, i)}/>)}
    </div>
  );
}

export default App;
