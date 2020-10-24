import React, { useState } from "react";
import "./App.css";
import Input from "../components/Input/Input";
import Output from "../components/Output/Output";
import Main from "./pages/MainPage";

function App() {
  const [val, setVal] = useState({ thought: "" });
  const [data, setData] = useState([
    {
      id: null,
      name: "Timmy",
      age: 40,
    },
    {
      id: null,
      name: "Melody",
      age: 41,
    },
    {
      id: null,
      name: "Sebastian",
      age: 16,
    },
  ]);

  const thoughtChangedHandler = (event) => {
    setVal({ thought: event.target.value });
  };

  const deleteDataHandler = (dataIndex) => {
    const myData = [...data];
    myData.splice(dataIndex, 1);
    setData(myData);
  };

  const dataValues = data.map((val, index) => {
    return (
      <div key={index}>
        <Output click={deleteDataHandler} name={val.name} age={val.age} />
      </div>
    );
  });

  return (
    <Main/>
    // <div className="App">
    //   <h1>SSE Practice Application</h1>
    //   <Input change={thoughtChangedHandler} />
    //   <p style={{ color: "red" }}>{val.thought}</p>
    //   {dataValues}
    // </div>
  );
}

export default App;
