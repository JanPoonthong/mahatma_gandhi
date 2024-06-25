import { useState } from "react";
import NavBar from "./components/navbar/NavBar";

import TimeLineBar from "./components/timeline/TimeLineBar";
import TimeLineDisplay from "./components/timeline/TimeLineDisplay";
import TimeLineBarMobile from "./components/timeline/TimeLineBarMobile";

function App() {
  const [indexDisplayText, setIndexDisplayText] = useState(0);
  const [animation, setAnimation] = useState(true);

  function displayTextByIndex(index: number) {
    setIndexDisplayText(index);
    setAnimation(true);
    setTimeout(() => setAnimation(false), 1000);
  }

  return (
    <>
      <NavBar />
      <div>{/* Write your code here*/}</div>

      <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-10 gap-20">
        <TimeLineBar onIndexChange={displayTextByIndex} />
        <TimeLineBarMobile
          index={indexDisplayText}
          onIndexChange={displayTextByIndex}
        />
        <TimeLineDisplay index={indexDisplayText} animation={animation} />
      </div>

      <div>{/* Write your code here*/}</div>
    </>
  );
}

export default App;
