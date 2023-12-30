
//shamelessly stolen from wattenberger
//https://github.com/Wattenberger/Wattenberger-2019/blob/master/src/components/Sketches/sketches/utils/canvasUtils.js
export const fadeCanvas = ({configParams, pct = 1, context = {}, rgb = "255, 255, 255"}) => {
    const config = {
        width: window.innerWidth,
        height: 400,
        ...configParams
    }

    context.fillStyle = `rgba(${rgb}, ${pct})`
    context.fillRect(0, 0, config.width, config.height)
};
