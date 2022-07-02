import React from "react"
import button from "./images/icon-arrow-down.svg"


const File = (props) => {
    const [shown,setShown]= React.useState(props.show)

    function handleClick(){
        setShown(prevShown => !prevShown)
    }
   
  return (
    <div>
      <div className="text--container">
        <p className="quest">{props.question}</p>
        <div className={shown ? "btn--flipped":"btn"}>
              <img src={button} alt="toggle button" onClick={handleClick}/>
        </div>
      </div>
      {shown && <p className="answer--text">{props.answer}</p>}
      <hr></hr>
    </div>
  )
}

export default File
