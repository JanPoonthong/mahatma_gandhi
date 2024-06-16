import { useState } from "react";
import NavBar from "./components/navbar/NavBar";

import TimeLineBar from "./components/timeline/TimeLineBar";
import TimeLineDisplay from "./components/timeline/TimeLineDisplay";

function App() {
  const [indexDisplayText, setIndexDisplayText] = useState(0);
  const [animation, setAnimation] = useState(true);

  function displayTextByIndex(index: number) {
    setIndexDisplayText(index);
    setAnimation(true)
    setTimeout(() => setAnimation(false), 1000);
  }

  return (
    <>
      <NavBar />
      <div>{/* Write your code here*/}</div>

      <div className="flex gap-20">
        <TimeLineBar onIndexChange={displayTextByIndex} />
        <TimeLineDisplay index={indexDisplayText} animation={animation} />
      </div>
    </>
  );
}

export default App;
