import { useRef, useEffect } from 'react';

import { fadeCanvas } from '../utils/canvasUtils';

import { times } from 'lodash';

const numBalls = 100;
const radius = 10;

//let's do many balls, that also bounce off each other
const Sketch02 = () => {
    const canvasRef = useRef(null);

    let balls = times(numBalls, () => {
        return {
            //make x random on range (40, 760)
            x: Math.random() * (800 - radius -1) + radius+1,
            y: Math.random() * (400 - radius -1) + radius+1,
            vx: Math.random() * 5 - 2,
            vy: Math.random() * 5 - 2,
            radius: radius,//Math.random() * 20 + 20,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        };
    });

    const draw = (context, frameCount) => {
        fadeCanvas({pct: 0.12, context: context, rgb: "0, 0, 0", configParams: {width: 800, height: 400}})
        context.beginPath();
        context.fillStyle = '#FFFFFF';
        balls.forEach(ball => {
            context.beginPath();
            context.fillStyle = ball.color;
            context.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);
            context.fill();
        });
        balls.forEach((ball,i) => {
            if (ball.x + ball.radius + ball.vx > context.canvas.width || ball.x - ball.radius + ball.vx < 0) {
                ball.vx = -ball.vx;
              }
              if (ball.y + ball.radius + ball.vy > context.canvas.height || ball.y - ball.radius + ball.vy < 0) {
                ball.vy = -ball.vy;
              }
          
              ball.x += ball.vx;
              ball.y += ball.vy;

              
              //following was a copilot suggestion, honestly doesn't work that well
              //they get stuck together sometimes for reasons that are a bit unclear to me
              for (let j = i + 1; j < balls.length; j++) {
                const otherBall = balls[j];
                const dx = otherBall.x - ball.x;
                const dy = otherBall.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if (distance < ball.radius + otherBall.radius) {
                    // The balls are colliding
                    // Swap velocities
                    const tempVx = ball.vx;
                    const tempVy = ball.vy;
                    ball.vx = otherBall.vx;
                    ball.vy = otherBall.vy;
                    otherBall.vx = tempVx;
                    otherBall.vy = tempVy;
                }
            }
        });
        //let's check if the balls are colliding
        //let's assume the balls are of equal mass


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
};

export default Sketch02;