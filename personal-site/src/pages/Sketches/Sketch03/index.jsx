import { useRef, useEffect } from 'react';

import { fadeCanvas } from '../utils/canvasUtils';

//okay here's an idea, let's like draw half circles
//or like parts of a circle
//let's generate a random circle and then over some period of time
//draw the outline in some capacity

const Sketch03 = () => {
    const canvasRef = useRef(null);

    let currentCircle = {
        x: 100,
        y: 100,
        radius: 20,
        startAngle: 0,
        //let's have this angleToDraw represent when we should 
        angleToEnd: 2*Math.PI - 1,//TODO
        counterClockwise: false,
    }

    const draw = (context, frameCount) => {
        fadeCanvas({ pct: 0.06, context: context, rgb: "0, 0, 0", configParams: { width: 800, height: 400 } });

        // context.fillStyle = '#000000';
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        context.beginPath();
        context.strokeStyle = '#FFFFFF';
        // context.arc(100, 100, 20, 2, 2*Math.PI);
        const endAngle = (frameCount % 360) * Math.PI / 15;

        //context.arc(100, 100, 20, 0, endAngle);
        context.arc(
            currentCircle.x, 
            currentCircle.y, 
            currentCircle.radius, 
            currentCircle.startAngle, 
            endAngle, 
            currentCircle.counterClockwise
        );

        context.stroke();
        if (endAngle >= currentCircle.angleToEnd) {
            currentCircle.x = Math.random() * (800 - currentCircle.radius - 1) + currentCircle.radius + 1;
            currentCircle.y = Math.random() * (400 - currentCircle.radius - 1) + currentCircle.radius + 1;
            currentCircle.radius = Math.random() * 20 + 20;
            currentCircle.startAngle = Math.random() * 2 * Math.PI;
            currentCircle.angleToEnd = Math.random() * 2 * Math.PI;
            currentCircle.counterClockwise = Math.random() < 0.5;
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
}

export default Sketch03;