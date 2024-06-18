export default function TimeLineBarMobile() {
  function onLeftClick() {
    console.log("Left click");
  }

  function onRightClick() {
    console.log("Right click");
  }

  return (
    <div className="flex justify-evenly items-center bg-black w-3/4 h-14 text-white text-3xl">
      <button onClick={() => onLeftClick()}>&larr;</button>
      <p>1930</p>
      <button onClick={() => onRightClick()}>&rarr;</button>
    </div>
  );
}
