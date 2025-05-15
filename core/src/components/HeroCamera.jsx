import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { damp3, dampE } from 'maath/easing';

export const HeroCamera = ({ children, isMobile = false }) => {
  const group = useRef();

  useFrame((state, delta) => {
    // 1. Smoothly position the camera
    damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // 2. Smoothly rotate the group based on pointer/mouse position (X and Y)
    if (!isMobile && group.current) {
      dampE(
        group.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0], // Target rotation [x, y, z]
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>
    {children}
  </group>;
};