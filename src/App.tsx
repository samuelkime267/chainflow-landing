import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import "./style/App.css";
import { Stats } from "@react-three/drei";
import { Leva } from "leva";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Leva titleBar={false} collapsed />
      <div className="fixed top-0 left-0 w-full h-full">
        <Canvas dpr={1} className="w-full h-full">
          <Stats />
          <Experience />
        </Canvas>
      </div>

      {/* <Navbar />
      <Hero /> */}
    </main>
  );
}

export default App;
