import React from "react";
//import Greet from "./components/Greet";
//import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
//import Form from "./components/Form";
//import ClassClicked from "./components/ClassClick";
//import LifecycleA from "./components/LifecycleA";
//import ClassCounter from "./components/ClassCounter";
//import HookCounter from "./components/HookCounter";
//import ObjuseState from "./components/ObjuseState";
//import ArrayuseState from "./components/ArrayuseState";
//import { CounteruseEffect } from "./components/CounteruseEffect";
//import DataFetching from "./components/DataFetching";

import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const NewContext = React.createContext();

function App() {
  return (
    <div>
      <nav>
        <h1>This is React Tutorial</h1>
      </nav>

      {/* <Greet name="manoj" />
      <Greet name="jo" />
      <Greet>This is children props</Greet> */}
      {/* <Welcome name="manoj" work="devloper" />
      <Welcome name="jo" work="devoops" />
      <Welcome name="akhil" work="master" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClicked></ClassClicked> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <ObjuseState /> */}
      {/* <ArrayuseState /> */}
      {/* <CounteruseEffect /> */}
      {/* <DataFetching /> */}
      <UserContext.Provider value={"manoj"}>
        <NewContext.Provider value={"kumar"}>
          <ComponentC />
        </NewContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
