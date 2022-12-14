/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Pedro Perim (https://sketchfab.com/PedroPerim)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/toy-hammer-a190e92f53814532bf2ef03ec56bd16a
title: Toy Hammer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('model/toy_hammer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.head_low_toyhammer_0.geometry} material={materials.toyhammer} />
          <mesh geometry={nodes.handle_low_toyhammer_0.geometry} material={materials.toyhammer} />
          <mesh geometry={nodes.top_low_toyhammer_0.geometry} material={materials.toyhammer} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('model/toy_hammer.glb')
