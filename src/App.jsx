import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HotelNames } from "./Components/HotelNames";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HotelNames />
    </>
  );
}

export default App;
