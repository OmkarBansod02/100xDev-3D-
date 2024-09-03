import React from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MainContainer from './MainContainer';


function App() {
  return (
    <div className='w-full h-screen font-["Helvetica_Now_Display"]'>
      <div className=' line navbar flex gap-5 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2' >
        {["Course",
        "Testimonials",
        "FAQs",
        "Full Stack",
        "Web-Development", 
        "Web 3",
        "DevOps",
        "BlockChain",
        "Open-Source"].map((e) => (
            <a href="" className='text-white cursor-pointer font-[400] text-sm capitalize'> {e}</a>
        ))}
      </div>
    <div className='flex flex-col items-center text-white absolute  top-40 left-1/2 -translate-x-1/2 '>
      <h3 className='masked text-6xl tracking-tighter font-[700] '>100xDevs</h3>
      <h5>Start Your Web and Web3 Journey with us !</h5>
      <p className='text-center w-3/4 '>100xdevs is an initiative by Harkirat Singh to personally mentor folks in the field of Programming. We believe that today you are either a 1x engineer or a 100x engineer and nothing in the middleware.</p>
    </div>
 
    <Canvas camera={{ fov : 12, position: [0, -10, 220]}}>
      <OrbitControls />
    
    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr"]} />
    <ScrollControls>
       <MainContainer/>
    </ScrollControls>
 
  </Canvas>
  </div>
  );
}

export default App
