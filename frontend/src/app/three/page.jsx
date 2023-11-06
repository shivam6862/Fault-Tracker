"use client";
import { useState, useRef } from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader, Vector3 } from "three";
import classes from "@/styles/three.module.css";
import RawMaterialForm from "@/components/RawMaterialForm";
import ProductFromRawMaterial from "@/components/ProductFromRawMaterial";
import { useMetamask } from "@/utils/useMetamask";
import ProductToRetailer from "@/components/ProductToSell";
import Defect from "@/components/Defect";

const boxSize = [6, 6, 6];

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
  const texture1 = useLoader(TextureLoader, "/Untitled.png");
  // const texture2 = useLoader(TextureLoader, "/path/to/texture2.png");
  // const texture3 = useLoader(TextureLoader, "/path/to/texture3.png");
  // const texture4 = useLoader(TextureLoader, "/path/to/texture4.png");
  // const texture5 = useLoader(TextureLoader, "/path/to/texture5.png");
  // const texture6 = useLoader(TextureLoader, "/path/to/texture6.png");

  // Apply textures to each face of the cube
  const materials = [
    new THREE.MeshBasicMaterial({ color: "red" }),
    new THREE.MeshBasicMaterial({ color: "blue" }),
    new THREE.MeshBasicMaterial({ color: "green" }),
    new THREE.MeshBasicMaterial({ color: "yellow" }),
    new THREE.MeshBasicMaterial({ color: "purple" }),
    new THREE.MeshBasicMaterial({ color: "orange" }),
  ];
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={boxSize} />
      {/* <meshStandardMaterial /> */}
      {materials.map((material, index) => (
        <meshBasicMaterial
          attachArray="material"
          args={[material]}
          key={index}
        />
      ))}
      <Html
        scale={2}
        occlude
        distanceFactor={1.5}
        position={[0, 0, boxSize[2] / 2 + 0.01]}
        transform
      >
        <div style={{ color: "yellow" }} className={classes["html-content"]}>
          <h1>Choose what you are saving?</h1>
          <form className={classes.form}>
            <label>
              <input
                type="radio"
                value="raw-material"
                checked={selectedOption === "raw-material"}
                onChange={handleOptionChange}
              />
              Raw Material
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="product"
                checked={selectedOption === "product"}
                onChange={handleOptionChange}
              />
              Product from Raw Materials
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="sell"
                checked={selectedOption === "sell"}
                onChange={handleOptionChange}
              />
              Product to sell
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="defect"
                checked={selectedOption === "defect"}
                onChange={handleOptionChange}
              />
              Defect in Product
            </label>
          </form>
        </div>
      </Html>
      <Html
        // scale={1}
        occlude
        distanceFactor={1}
        position={[-(boxSize[0] / 2 + 0.01), 0, 0]}
        transform
        rotation={[0, (Math.PI * 3) / 2, 0]}
      >
        <RawMaterialForm state={state} onCancel={resetRotation} />
      </Html>
      <Html
        // scale={[0.8, 1.3, 1]}
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
        scale={1.5}
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
        scale={1}
        occlude
        distanceFactor={1}
        position={[0, -(boxSize[1] / 2 + 0.01), 0]}
        transform
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ProductToRetailer state={state} onCancel={resetRotation} />
      </Html>
      <Html
        scale={[0.5, 0.5, 0.5]}
        occlude
        distanceFactor={1.5}
        position={[0, 0, -(boxSize[2] / 2 + 0.01)]}
        transform
        rotation={[0, Math.PI, 0]}
      >
        <h1>back face</h1>
      </Html>
    </mesh>
  );
}

export default function App() {
  const { state } = useMetamask();
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <Box state={state} />
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
}
