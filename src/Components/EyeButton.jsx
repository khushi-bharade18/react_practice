import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function EyeButton({ showPass, setShowPass }) {
  return (
    <div>
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer active:bg-gray-200 rounded-full p-1 transition"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
}
