import React from 'react';
import { canvasStyle } from './_canvasStyles.js'

import Row from './grid/Row.js'

function Canvas({ grid }) {

    return (
        <>
            {
                grid.map((r, i) => (
                    <Row row={r} />
                ))
            }

        </>
    )
}

// class Canvas extends React.Component {
//     componentDidMount() {
//         this.updateCanvas();
//     }
//     updateCanvas() {
//         const ctx = this.refs.canvas.getContext('2d');
//         ctx.fillRect(0,0, 100, 100);
//     }
//     render() {
//         return (
//             <canvas ref="canvas" style={canvasStyle} />
//         );
//     }
// }

export default Canvas