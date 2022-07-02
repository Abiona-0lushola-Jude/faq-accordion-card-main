import Image from "./components/Image";
import File from "./components/File";
import data from "./components/data";
import React from "react";

function App() {
  const [dataInfo,setDataInfo] = React.useState(data)
  const dataElement = dataInfo.map(element=>{
    return (
      <File
      key={element.id}
      {...element}
      />
    )
  })

  return (
    <div className="App">
      <Image />
      <div className="right--container">
        <h1>FAQ</h1>
        {dataElement}
      </div>
    </div>
  );
}

export default App;
