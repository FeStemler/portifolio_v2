import  { useEffect, useRef } from 'react';

export function Footer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = window.innerWidth;
        const height = 300;
        canvas.width = width;
        canvas.height = height;

        const drawStatic = () => {
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const shade = Math.random() * 255;
                data[i] = shade;     // Red
                data[i + 1] = shade; // Green
                data[i + 2] = shade; // Blue
                data[i + 3] = 255;   // Alpha
            }

            ctx.putImageData(imageData, 0, 0);
            animationRef.current = requestAnimationFrame(drawStatic);
        };

        drawStatic();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <section className="relative w-full h-[140px] overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
        </section>
    );
}

export default Footer;
