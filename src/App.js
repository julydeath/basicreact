//import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      {/* <Greet name="manoj" />
      <Greet name="jo" />
      <Greet>This is children props</Greet> */}
      <Welcome name="manoj" work="devloper" />
      <Welcome name="jo" work="devoops" />
      <Welcome name="akhil" work="master" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
