import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./style/App.css";
import { Stats } from "@react-three/drei";

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Stats />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
