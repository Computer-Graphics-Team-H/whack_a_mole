/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Krzysztof Lewicki (https://sketchfab.com/slavgamedev)
license: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
source: https://sketchfab.com/3d-models/grass-1-0ee6380fa4384b7fa7655a53865a9079
title: Grass 1
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Grass(props) {
  const { nodes, materials } = useGLTF("model/grass.glb");
  return (
    <group {...props} dispose={null} receiveShadow>
      <group rotation={[0.11, 0, 0]}>
        <group position={[-6.49, -1.3, -8.14]}>
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.material_0}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.material_0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("model/grass.glb");
