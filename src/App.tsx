import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./style/App.css";
import { Stats } from "@react-three/drei";
import { Leva } from "leva";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const width = 2;
  const height = 1;

  return (
    <main>
      <Leva titleBar={false} collapsed />
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="relative w-full h-full">
          <Canvas
            dpr={1}
            orthographic
            camera={{
              position: [0, 0, 1],
              top: height / 2,
              bottom: -height / 2,
              left: -width / 2,
              right: width / 2,
              near: 0.1,
              far: 1,
            }}
          >
            <Stats />
            <Experience width={width} height={height} />
          </Canvas>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
