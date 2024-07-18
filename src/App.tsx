import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/home";
import Takeaway from "./components/Takeaway/Takeaway";
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
    <div className="flex items-center justify-center">
      <div className="max-w-[1260px]">
        <NavBar />
        <Home />
        <div
          id="timeline"
          className="flex max-sm:flex-col max-sm:items-center max-sm:gap-10 gap-20"
        >
          <TimeLineBar onIndexChange={displayTextByIndex} />
          <TimeLineBarMobile
            index={indexDisplayText}
            onIndexChange={displayTextByIndex}
          />
          <TimeLineDisplay index={indexDisplayText} animation={animation} />
        </div>
        <div id="takeaway">
          <Takeaway />
        </div>
      </div>
    </div>
  );
}

export default App;
