import { useRef, useEffect } from 'react';

import { times } from 'lodash';

const getNodes = ({numPoints, x, height, margin, init}) => {
    return times(numPoints, (i) => {
        return {
            x: x,
            y: margin + i * (height - margin * 2) / (numPoints-1),
            pct: init ? 0 : Math.random(),
        }
    })
}

const getColorForPercentage = (pct) => {
    const startColor = { r: 255, g: 255, b: 255 }; // White
    const endColor = { r: 235, g: 144, b: 120 }; // #EB9078

    const deltaR = endColor.r - startColor.r;
    const deltaG = endColor.g - startColor.g;
    const deltaB = endColor.b - startColor.b;

    const r = Math.round(startColor.r + pct * deltaR);
    const g = Math.round(startColor.g + pct * deltaG);
    const b = Math.round(startColor.b + pct * deltaB);

    return `rgb(${r},${g},${b})`;
}


const radius = 20;
const Sketch05 = () => {

    const canvasRef = useRef(null);

    let left = getNodes({numPoints: 3, x: 200, height: 400, margin: 100, init: true});
    let middle = getNodes({numPoints: 5, x: 400, height: 400, margin: 50, init: true});
    let right = getNodes({numPoints: 2, x: 600, height: 400, margin: 150, init: true});
    
    const draw = (context, frameCount) => {
        if (frameCount % 100 == 0) {
            left = getNodes({numPoints: 3, x: 200, height: 400, margin: 100, init: false});
            middle = getNodes({numPoints: 5, x: 400, height: 400, margin: 50, init: false});
            right = getNodes({numPoints: 2, x: 600, height: 400, margin: 150, init: false});
        }
        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < middle.length; j++) {
                context.strokeStyle = getColorForPercentage(middle[j].pct);
                context.beginPath();
                context.moveTo(left[i].x, left[i].y);
                context.lineTo(middle[j].x, middle[j].y);
                context.stroke();
            }
        }
        for (let i = 0; i < middle.length; i++) {
            for (let j = 0; j < right.length; j++) {
                context.strokeStyle = getColorForPercentage(right[j].pct);
                context.beginPath();
                context.moveTo(middle[i].x, middle[i].y);
                context.lineTo(right[j].x, right[j].y);
                context.stroke();
            }
        }

        context.fillStyle = '#FFFFFF';

        const allNodes = [...left, ...middle, ...right];
        for (let i = 0; i < allNodes.length; i++) {
            context.fillStyle = getColorForPercentage(allNodes[i].pct);
            context.beginPath();
            context.arc(allNodes[i].x, allNodes[i].y, radius, 0, 2 * Math.PI);
            context.fill();
        }

    };

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

export default Sketch05;



