"use client";
import { useState, useRef } from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  useTexture,
  Backdrop,
  Clouds,
  Cloud,
  Sky as SkyImpl,
  StatsGl,
  useGLTF,
} from "@react-three/drei";
import { Flex, Box as FlexBox } from "@react-three/flex";
import * as THREE from "three";
import { TextureLoader, Vector3, CubeTextureLoader } from "three";
import classes from "@/styles/three.module.css";
import RawMaterialForm from "@/components/RawMaterialForm";
import ProductFromRawMaterial from "@/components/ProductFromRawMaterial";
import { useMetamask } from "@/utils/useMetamask";
import ProductToRetailer from "@/components/ProductToSell";
import Defect from "@/components/Defect";
import { useEffect } from "react";
import { useControls } from "leva";

const boxSize = [13, 13, 13];

function Scene() {
  const { scene } = useThree();
  const texture = useTexture("pz.jpg"); // replace with your image path

  useEffect(() => {
    scene.background = texture;
  }, [scene, texture]);

  // Your scene objects here
}

function Box({ state }) {
  const meshRef = useRef();
  const [size, set] = useState(0.5);
  const [selectedOption, setSelectedOption] = useState("");
  const controls = useThree((state) => state.controls);
  const targetRotation = useRef(new Vector3());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const resetRotation = () => {
    setSelectedOption("front");
  };
  // const onCancelProductFromRawMaterial = () => {
  //   setSelectedOption("front");
  // };
  // const cancelProductToRetailer = () => {
  //   setSelectedOption("front");
  // };

  // useFrame(() => {
  //   if (meshRef.current) {
  //     switch (selectedOption) {
  //       case "raw-material":
  //         meshRef.current.rotation.y = Math.PI / 2; // Rotate 90 degrees around the y-axis
  //         break;
  //       case "product":
  //         meshRef.current.rotation.y = Math.PI; // Rotate 180 degrees around the y-axis
  //         break;
  //       case "sell":
  //         meshRef.current.rotation.y = (3 * Math.PI) / 2; // Rotate 270 degrees around the y-axis
  //         break;
  //       case "defect":
  //         meshRef.current.rotation.x = Math.PI / 2; // Rotate 90 degrees around the x-axis
  //         break;
  //       default:
  //         meshRef.current.rotation.set(0, 0, 0); // Reset rotation
  //         break;
  //     }
  //   }
  // });
  useFrame(() => {
    if (meshRef.current) {
      switch (selectedOption) {
        case "raw-material":
          targetRotation.current.set(0, Math.PI / 2, 0); // Rotate to left face
          break;
        case "product":
          targetRotation.current.set(0, -Math.PI / 2, 0); // Rotate to right face
          break;
        case "sell":
          targetRotation.current.set(-Math.PI / 2, 0, 0); // Rotate to bottom face
          break;
        case "defect":
          targetRotation.current.set(Math.PI / 2, 0, 0); // Rotate to top face
          break;
        case "front":
          targetRotation.current.set(0, 0, 0); // Reset rotation
          break;
        // case "rightToFront":
        //   targetRotation.current.set(0, 0, 0); // Reset rotation
        //   break;
        // case "rightToFront":
        //   targetRotation.current.set(0, 0, 0); // Reset rotation
        //   break;
        default:
          targetRotation.current.set(0, 0, 0); // Reset rotation
          break;
      }

      // Gradually adjust the current rotation towards the target rotation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.current.x,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current.y,
        0.1
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        targetRotation.current.z,
        0.1
      );
    }
  });

  // useFrame(() => {
  //   if (meshRef.current) {
  //     switch (selectedOption) {
  //       case "raw-material":
  //         // targetRotation.current.set(0, Math.PI / 2, 0);
  //         camera.position.set(-5, 0, 0); // Adjust camera position
  //         break;
  //       case "product":
  //         targetRotation.current.set(0, -Math.PI / 2, 0);
  //         camera.position.set(5, 0, 0); // Adjust camera position
  //         break;
  //       case "sell":
  //         targetRotation.current.set(-Math.PI / 2, 0, 0);
  //         camera.position.set(0, 5, 0); // Adjust camera position
  //         break;
  //       case "defect":
  //         targetRotation.current.set(Math.PI / 2, 0, 0);
  //         camera.position.set(0, -5, 0); // Adjust camera position
  //         break;
  //       default:
  //         targetRotation.current.set(0, 0, 0);
  //         camera.position.set(0, 0, 5); // Reset camera position
  //         break;
  //     }

  //     // Gradually adjust the current rotation towards the target rotation
  //     meshRef.current.rotation.x = THREE.MathUtils.lerp(
  //       meshRef.current.rotation.x,
  //       targetRotation.current.x,
  //       0.1
  //     );
  //     meshRef.current.rotation.y = THREE.MathUtils.lerp(
  //       meshRef.current.rotation.y,
  //       targetRotation.current.y,
  //       0.1
  //     );
  //     meshRef.current.rotation.z = THREE.MathUtils.lerp(
  //       meshRef.current.rotation.z,
  //       targetRotation.current.z,
  //       0.1
  //     );
  //   }
  // });
  // Load textures
  const [colorMap] = useTexture([
    "/dark-s_nx.jpg",
    "/dark-s_ny.jpg",
    "/dark-s_nz.jpg",
    "/nx.jpg",
    "/dark-s_py.jpg",
    "/dark-s_pz.jpg",
  ]);
  // const texture2 = useLoader(TextureLoader, "/dark-s_ny.jpg");
  // const texture3 = useLoader(TextureLoader, "/dark-s_nz.jpg");
  // const texture4 = useLoader(TextureLoader, "/nx.jpg");
  // const texture5 = useLoader(TextureLoader, "/dark-s_py.jpg");
  // const texture6 = useLoader(TextureLoader, "/dark-s_pz.jpg");

  // Apply textures to each face of the cube
  // const materials = [
  //   new THREE.MeshBasicMaterial({ map: texture1 }),
  //   new THREE.MeshBasicMaterial({ map: texture2 }),
  //   new THREE.MeshBasicMaterial({ map: texture3 }),
  //   new THREE.MeshBasicMaterial({ map: texture4 }),
  //   new THREE.MeshBasicMaterial({ map: texture5 }),
  //   new THREE.MeshBasicMaterial({ map: texture6 }),
  // ];
  return (
    <mesh ref={meshRef} castShadow receiveShadow scale={1}>
      <boxGeometry args={boxSize} />
      {/* <meshStandardMaterial /> */}
      <meshBasicMaterial map={colorMap} />

      <Flex dir="column">
        <Html
          scale={2.5}
          occlude
          distanceFactor={1.5}
          position={[0, 0, boxSize[2] / 2 + 0.01]}
          transform
          color="#000"
        >
          <div style={{ color: "#e8b059" }} className={classes["html-content"]}>
            <h1>Choose what you are saving?</h1>
            <form className={classes.form} style={{ color: "#f0f0f0" }}>
              <label style={{ color: "#f0f0f0" }}>
                <input
                  type="radio"
                  value="raw-material"
                  checked={selectedOption === "raw-material"}
                  onChange={handleOptionChange}
                />
                Raw Material
              </label>
              <br />
              <label style={{ color: "#f0f0f0" }}>
                <input
                  type="radio"
                  value="product"
                  checked={selectedOption === "product"}
                  onChange={handleOptionChange}
                />
                Product from Raw Materials
              </label>

              <br />
              <label style={{ color: "#f0f0f0" }}>
                <input
                  type="radio"
                  value="defect"
                  checked={selectedOption === "defect"}
                  onChange={handleOptionChange}
                />
                Defect in Product
              </label>
              <br />
              <label style={{ color: "#f0f0f0" }}>
                <input
                  type="radio"
                  value="sell"
                  checked={selectedOption === "sell"}
                  onChange={handleOptionChange}
                />
                Product to sell
              </label>
            </form>
          </div>
        </Html>

        <Html
          scale={[2, 2, 1]}
          occlude
          distanceFactor={1}
          position={[-(boxSize[0] / 2 + 0.01), 0, 0]}
          transform
          rotation={[0, (Math.PI * 3) / 2, 0]}
          style={{
            // maxHeight: "1200px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            overflow: "scroll",
          }}
        >
          <RawMaterialForm state={state} onCancel={resetRotation} />
        </Html>
        <Html
          scale={[1.8, 1.6, 1]}
          occlude
          distanceFactor={1}
          position={[boxSize[2] / 2 + 0.01, 0, 0]}
          transform
          rotation={[0, Math.PI / 2, 0]}
          style={{
            // maxHeight: "1200px",
            width: "100%",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            overflow: "scroll",
          }}
        >
          <ProductFromRawMaterial state={state} onCancel={resetRotation} />
        </Html>

        <Html
          scale={[1.9, 1.9, 1]}
          occlude
          distanceFactor={1}
          position={[0, boxSize[1] / 2 + 0.01, 0]}
          transform
          rotation={[(Math.PI * 3) / 2, 0, 0]}
        >
          {/* <ProductToRetailer state={state} onCancel={resetRotation} /> */}
          <Defect state={state} onCancel={resetRotation} />
        </Html>
        <Html
          scale={[1.9, 1.9, 1]}
          occlude
          distanceFactor={1}
          position={[0, -(boxSize[1] / 2 + 0.01), 0]}
          transform
          rotation={[Math.PI / 2, 0, 0]}
        >
          <ProductToRetailer state={state} onCancel={resetRotation} />
        </Html>
        <Html
          scale={[1.3, 1.3, 1.3]}
          occlude
          distanceFactor={1.5}
          position={[0, 0, -(boxSize[2] / 2 + 0.01)]}
          transform
          rotation={[0, Math.PI, 0]}
        >
          <h1>back face</h1>
        </Html>
      </Flex>
    </mesh>
  );
}

export default function App() {
  const { state } = useMetamask();
  return (
    <Canvas
      camera={{ position: [0, 0, 13], fov: 75 }}
      style={{ width: "100%", height: "100%" }}
      // gl={{
      //   powerPreference: "high-performance",
      //   alpha: false,
      //   antialias: false,
      //   stencil: false,
      //   depth: false,
      // }}
    >
      {/* <Backdrop
        castShadow
        floor={0}
        position={[0, -5, -70]}
        scale={[500, 100, 40]}
      >
        <meshStandardMaterial color="#eed0d0" envMapIntensity={0.1} />
      </Backdrop> */}
      <Sky />
      <Scene />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <Box state={state} />
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
}

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();
  // const { color, x, y, z, range, ...config } = useControls({
  //   seed: { value: 1, min: 1, max: 100, step: 1 },
  //   segments: { value: 20, min: 1, max: 80, step: 1 },
  //   volume: { value: 6, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 10, min: 0, max: 400, step: 1 },
  //   growth: { value: 4, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   x: { value: 6, min: 0, max: 100, step: 1 },
  //   y: { value: 1, min: 0, max: 100, step: 1 },
  //   z: { value: 1, min: 0, max: 100, step: 1 },
  //   color: "white",
  // });
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    cloud0.current.rotation.y -= delta;
  });
  return (
    <>
      <SkyImpl sunPosition={[0, 10, -30]} />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud args={[0.4, 0.4, 0.4]} ref={cloud0} position={[10, 10, -70]} />
          <Cloud
            color="#eed0d0"
            seed={2}
            args={[0.4, 0.4, 0.4]}
            position={[15, -10, -60]}
          />
          <Cloud
            color="#d0e0d0"
            seed={3}
            args={[0.4, 0.4, 0.4]}
            position={[-15, 10, -8]}
          />
          <Cloud
            args={[0.4, 0.4, 0.4]}
            color="#a0b0d0"
            seed={4}
            position={[10, 10, -12]}
          />
          <Cloud
            args={[0.4, 0.4, 0.4]}
            color="#c0c0dd"
            seed={5}
            position={[10, 10, -10]}
          />
          <Cloud
            args={[0.4, 0.4, 0.4]}
            color="#ffccdd"
            seed={0.3}
            position={[0, 0, -15]}
            volume={20}
          />
        </Clouds>
      </group>
    </>
  );
}
