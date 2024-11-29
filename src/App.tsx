import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./style/App.css";
// import { Stats } from "@react-three/drei";
import { Leva } from "leva";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Leva titleBar={false} collapsed />
      <div className="canvas-container">
        <Canvas>
          {/* <Stats  /> */}
          <Experience />
        </Canvas>
      </div>

      <Navbar />
      <Hero />
    </>
  );
}

export default App;
