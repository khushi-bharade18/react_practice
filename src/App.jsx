import Counter from "./Counter";

export default function App() {
  return (
    <>
      <div className="p-2 border-2 border-yellow-500">
        <h1 className="text-[50px] p-3">This is main component.</h1>
        <Counter />
      </div>
    </>
  );
}
