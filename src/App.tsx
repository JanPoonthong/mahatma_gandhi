import NavBar from "./components/navbar/NavBar";

import TimeLineBar from "./components/timeline/TimeLineBar";
import TimeLineDisplay from "./components/timeline/TimeLineDisplay";

function App() {
  return (
    <>
      <NavBar />
      <div>
        {/* Write your code here*/}
      </div>

      <div className="flex gap-20">
        <TimeLineBar />
        <TimeLineDisplay />
      </div>
    </>
  );
}

export default App;
