import React from 'react'

function Block({index, clicked, colorHanlder}) {

  const clickedClassName = (index === clicked || index === clicked - 1)? "clicked" : "";

  return (
    <div className={`block ${clickedClassName}`} onClick={colorHanlder} onMouseEnter={colorHanlder}></div>
  )
}

export default Block