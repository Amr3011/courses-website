import "./App.css";
import { toast } from "sonner";
import { useStore } from "./stores";

function App() {
  const { count, increment, decrement } = useStore();

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center h-screen bg-black">
        <h1 className="text-4xl text-white font-bold">Hello World</h1>
        <p className="text-white font-bold">Count: {count}</p>

        <div className="flex gap-7">
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-md"
            onClick={increment}
          >
            Increment
          </button>
          <button
            type="button"
            className="bg-white text-black px-4 py-2 rounded-md"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
        <button
          type="button"
          className="bg-white text-black px-4 py-2 rounded-md"
          onClick={() => toast.success(" Count is " + count)}
        >
          Show Count
        </button>
      </div>
    </>
  );
}

export default App;
