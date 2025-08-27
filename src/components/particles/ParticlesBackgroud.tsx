import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   className="absolute inset-0 -z-10" // behind everything
    //   options={{
    //     background: {
    //       color: {
    //         value: "#0d47a1",
    //       },
    //     },
    //     fpsLimit: 120,
    //     interactivity: {
    //       events: {
    //         onClick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //         onHover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quantity: 4,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: "#ffffff",
    //       },
    //       links: {
    //         color: "#ffffff",
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       move: {
    //         direction: "none",
    //         enable: true,
    //         outModes: {
    //           default: "bounce",
    //         },
    //         random: false,
    //         speed: 6,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 800,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         value: { min: 1, max: 5 },
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // />
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-10" // behind everything
      options={{
        background: {
          color: {
            value: "#ffffff", // page background (white)
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: {
            value: ["#3DB2FF", "#FF6FB5"],
            // replace with your Tailwind `babe-blue` and `babe-pink` hex codes
          },
          links: {
            color: "#3DB2FF", // use babe-blue for links
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "out" },
          },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
