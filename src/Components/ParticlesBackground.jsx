import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#fff" },
        particles: {
          number: { value: 30 },
          size: { value: 16 },
          shape: {
            type: "char",
            character: {
              value: ["💖", "⭐", "✨"],
              font: "Verdana",
              style: "",
              weight: "400",
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            outModes: "out",
          },
          opacity: {
            value: 0.9,
          },
        },
      }}
    />
  );
}
