import { useEffect, useState } from "react";
import First from "./First";

export default function Counter() {
  const [count, setCount] = useState(10);

  function Decrease() {
    setCount((prev) => prev - 0.5);
  }

  function Increase() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // Mounting
  useEffect(() => {
    console.log("Heyy, I am useEffect!");
  }, []);

  // Updating
  useEffect(() => {
    console.log("Update");
  }, [count]);

  return (
    <>
      {count && (
        <div className="p-2 border-2 border-green-500">
          <h1 className="text-red-500 text-[40px]">Welcome Here.....</h1>
          <div className="m-3 w-[150px] flex flex-col text-center gap-3">
            <button
              className="border-2 py-1 px-3 text-green-500 cursor-pointer"
              onClick={Increase}
            >
              Increase
            </button>
            <p className="text-[20px]">{count}</p>
            <button
              className="border-2 py-1 px-3 text-red-500 cursor-pointer"
              onClick={Decrease}
            >
              Decrease 
            </button>
          </div>
          <First count={count} />
        </div>
      )}
    </>
  );
}
