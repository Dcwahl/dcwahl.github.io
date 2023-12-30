import { useRef, useEffect } from 'react';

import { fadeCanvas } from '../utils/canvasUtils';

const maxRadius = 20;
const angleSpeed = 0.1;

const getNewCircle = () => {
    let startAngle = Math.random() * 2 * Math.PI
    const angleToEnd = Math.random() * 2 * Math.PI;
    const counterClockwise = Math.random() < 0.5;
    if (counterClockwise && startAngle < angleToEnd) {
        startAngle += 2 * Math.PI;
    } else if (!counterClockwise && startAngle > angleToEnd) {
        startAngle -= 2 * Math.PI;

    }

    return {
        //TODO these initial positions are incorrect 
        x: Math.random() * (800 - maxRadius -1) + maxRadius+1,
        y: Math.random() * (400 - maxRadius -1) + maxRadius+1,
        radius: Math.random() * (maxRadius-5) + 5,
        startAngle: startAngle,
        angleToEnd: angleToEnd,
        currentAngle: startAngle,
        counterClockwise: counterClockwise,
    }
}

const Sketch04 = () => {

    const canvasRef = useRef(null);

    let currentCircle = getNewCircle();

    const draw = (context, frameCount) => {
        fadeCanvas({ pct: 0.06, context: context, rgb: "0, 0, 0", configParams: { width: 800, height: 400 } });

        context.beginPath();
        context.strokeStyle = '#FFFFFF';

        context.arc(
            currentCircle.x, 
            currentCircle.y, 
            currentCircle.radius, 
            currentCircle.startAngle, 
            currentCircle.currentAngle, 
        );
        
        context.stroke();
        if (currentCircle.currentAngle >= currentCircle.angleToEnd) {
            currentCircle = getNewCircle();
        } else {
            currentCircle.currentAngle += currentCircle.counterClockwise ? -angleSpeed : angleSpeed;
        }

    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();
    }, [])

    return (
        <>
            <canvas width="800" height="400" ref={canvasRef} />
        </>
    )
};

export default Sketch04;