import React from 'react';
import { canvasStyle } from './_canvasStyles.js'

// function Canvas({ cvsref }) {

//     const [context, setContext] = React.useState();
//     const cvsRef = React.createRef();

//     React.useEffect(() => {
//         setContext(cvsRef.getContext('2d'))
//     }, [])

//     return (
//         <>
//             <canvas 
//                 id='cvs'
//                 ref={cvsRef}
//                 style={canvasStyle}
//             ></canvas>

//         </>
//     )
// }

class Canvas extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" style={canvasStyle} />
        );
    }
}

export default Canvas