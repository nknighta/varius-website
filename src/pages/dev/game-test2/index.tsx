import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

export default function Map() {
    const canvasRef = useRef(null)
    const [scene, setScene] = useState(null)
    const [camera, setCamera] = useState(null)
    const [renderer, setRenderer] = useState(null)

    useEffect(() => {
        const canvas = canvasRef.current

        // シーンの作成
        const scene = new THREE.Scene()

        // カメラの作成
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 5

        // レンダラーの作成
        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setSize(window.innerWidth, window.innerHeight)

        // キューブの作成
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        setScene(scene)
        setCamera(camera)
        setRenderer(renderer)
        if (renderer && scene && camera) {
            const animate = () => {
                requestAnimationFrame(animate)

                cube.rotation.x += 0.01
                cube.rotation.y += 0.01

                renderer.render(scene, camera)
            }

            animate()
        }
    }, [renderer, scene, camera])

    return <canvas ref={canvasRef} />}
