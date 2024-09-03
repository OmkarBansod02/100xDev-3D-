
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from "three";
function MainContainer() {
 let model = useGLTF ("./mac.glb");
 let tex = useTexture("./harkirat.jpg");
 let meshes = {};
 model.scene.traverse( e => {
 
    meshes[e.name] = e;
   });
meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
meshes.matte.material.map = tex ;
meshes.matte.material.emissiveIntensity = 0;
meshes.matte.material.metalness = 1.03;
meshes.matte.material.roughness = 1;
let data = useScroll();

useFrame((state , delta) =>{
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset *90);

  })


return (
 <group position={[0, -17.5 , 48]} >
 <primitive object={model.scene}/>
 </group>
 )
}

export default MainContainer
