"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function ParticlesBackground() {
    const particlesInit: (engine: Engine) => Promise<void> = useCallback(async (engine: Engine): Promise<void> => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: "#000000" },
                particles: {
                    number: { value: 80 },
                    color: { value: "#00CED1" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3 },
                    size: { value: 2 },
                    move: {
                        enable: true,
                        speed: 0.6,
                        direction: "none",
                        outModes: { default: "bounce" }
                    },
                    links: {
                        enable: true,
                        color: "#006d6d",
                        distance: 100,
                        opacity: 0.2,
                        width: 1
                    }
                }
            }}
            className="absolute inset-0 z-0"
        />
    )
}