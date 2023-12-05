import classNames from "classnames";
import classes from "./App.module.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import { OrbitControls } from "@react-three/drei";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <main className={classes.main_block}>
      <Canvas
        className={classes.three_canvas}
        camera={{ fov: 80, position: [0, 0, 160] }}
      >
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        ></OrbitControls>
        {/* <ambientLight intensity={1000} color="white" /> */}
        <Sphere />
      </Canvas>

      <div className={classes.content}>
        <div className={classNames("text-xl", classes.header)}>
          <a type="text/plain" target="_blank" rel="author" href="/humans.txt">
            <h1>liveonlyontheweb</h1>
          </a>
        </div>
        <p className="text-center text-xs font-medium">
          it will be an unforgettable virtual tour
        </p>
        <SocialLinks />
      </div>
    </main>
  );
};

export default App;