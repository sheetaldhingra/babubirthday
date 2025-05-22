import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadSVGPath } from "tsparticles-path-svg";

export default function StarryNight() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadSVGPath(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0d1b2a",
          },
          fpsLimit: 60,
          fullScreen: false,
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                area: 800,
              },
            },
            shape: {
              type: ["circle", "star"],
            },
            color: {
              value: "#ffffff",
            },
            size: {
              value: { min: 0.5, max: 1.5 },
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
          emitters: {
            position: {
              x: 50,
              y: 50,
            },
            rate: {
              quantity: 1,
              delay: 0.2,
            },
            size: {
              width: 0,
              height: 0,
            },
          },
          polygon: {
            enable: true,
            type: "inline",
            scale: 0.5,
            move: {
              radius: 10,
            },
            url: "/her-name.svg", // SVG path that spells her name
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255,255,255,0.2)",
              },
            },
          },
        }}
      />
    </div>
  );
}
