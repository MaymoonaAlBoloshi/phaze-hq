import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to the App
      </h1>
      
      <button className="btn">Hello daisyUI</button>
    </div>
	);
}

export default App;
