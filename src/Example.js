import React, {
  Suspense,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";

import Hammer2 from "./components/Cartoon_hammer";
import Hole from "./components/Hole";
import Diglett from "./components/Diglett 0";
import Diglett2 from "./components/Diglett 1";
import Diglett3 from "./components/Diglett 2";
import Diglett4 from "./components/Diglett 3";
import Diglett5 from "./components/Diglett 4";
import Diglett6 from "./components/Diglett 5";
import Diglett7 from "./components/Diglett 6";
import Diglett8 from "./components/Diglett 7";
import Diglett9 from "./components/Diglett 8";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Grass from "./components/Grass";
import { Vector3 } from "three";

export default function Example() {
  return (
    <div>
      <Canvas id="canvas" shadowMap colorManagement>
        {/* <OrbitControls /> */}
        <OrbitControls />
        <PerspectiveCamera
          makeDefault
          fov={90}
          position={[0, 10, 15]}
          rotation={[(-40 / 180) * Math.PI, 0, 0]}
        />
        <ambientLight intensity={0.5} color={0x909090} />
        <spotLight position={[10, 60, 30]} angle={0.2} />
        <Suspense fallback={null}>
          <Diglett />
          <Hole
            position={[0, -0.125, 0]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
