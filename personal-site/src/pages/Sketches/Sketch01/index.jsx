import { useRef, useEffect } from 'react';

import { fadeCanvas } from '../utils/canvasUtils';


//this is stolen >:)
//https://github.com/Wattenberger/Wattenberger-2019/blob/master/src/components/Sketches/sketches/Day8.jsx
//just to play wwith some stuff

const Sketch01 = () => {
    const canvasRef = useRef(null);
    let x = 100, y = 100, vx = 2, vy = 3, radius = 20;


    const draw = (context, frameCount) => {
        fadeCanvas({pct: 0.06, context: context, rgb: "0, 0, 0", configParams: {width: 800, height: 400}})
        context.beginPath();
        context.fillStyle = '#FFFFFF';
        context.arc(x, y, radius, 0, 2*Math.PI);

        context.fill();
        if (x + radius + vx > context.canvas.width || x - radius + vx < 0) {
            vx = -vx;
          }
          if (y + radius + vy > context.canvas.height || y - radius + vy < 0) {
            vy = -vy;
          }
      
          x += vx;
          y += vy;
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
            //why use requestAnimationFrame? see:
            //http://creativejs.com/resources/requestanimationframe/
        }
        render();
    }, [])

    return (
        <>
            <canvas width="800" height="400" ref={canvasRef} />
        </>
    )
}

export default Sketch01;