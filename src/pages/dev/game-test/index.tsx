import ReactDOM from 'react-dom'
import React, {useEffect, useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    let world = 100;
    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[world, 0.1, world]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Box2(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (mesh.current.rotation.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    let world = 10;
    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[world, world, world]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}


export default function Index () {
    return (<>
        <Canvas style={{backgroundColor: '#000', height: 1000}}>
        <ambientLight/>
        <pointLight position={[10, 100, 10]}/>
        <Box position={[0, 0, 0]}/>
        <Box2 position={[0, 5, 0]}/>
        <ambientLight />
        <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
        />
             </Canvas>
        </>
    )
}
