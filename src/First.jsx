import { useEffect } from "react";
import Second from "./Second";

export default function First(props) {
  // Unmounting
  useEffect(() => {
    return () => {
      alert("Unmounting ho gyii...");
    };
  }, []);

  return (
    <div className="p-2 border-2 border-blue-500">
      <h1>
        Hello, I am first component and the value of count is : {props.count}
      </h1>
      <Second count={props.count} />
    </div>
  );
}
