import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
