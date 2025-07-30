import { useState } from "react";
import Star from "./Star";

function App() {
  const [activeTillIndex, setActiveTillIndex] = useState(-1);
  const [hoverTillIndex, setHoverTillIndex] = useState(-1);
  const STARS_NUMBER = 5;
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <div className="flex">
        {new Array(STARS_NUMBER).fill(0).map((_, i) => {
          return (
            <Star
              key={i}
              index={i}
              activeTillIndex={activeTillIndex}
              setActiveTillIndex={setActiveTillIndex}
              hoverTillIndex={hoverTillIndex}
              setHoverTillIndex={setHoverTillIndex}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
