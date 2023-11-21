import { useState } from "react";
import { Button } from "antd";

function App() {
	const [count, setCount] = useState(0);

	return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to the App
      </h1>
      <Button type="primary">Ant Design Button</Button>
    </div>
	);
}

export default App;
