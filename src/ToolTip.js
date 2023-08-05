import { useEffect, useRef, useState } from 'react';
import './ToolTip.css';
function ToolTip(props) {
    const [left, setLeft] = useState();
    const [right, setRight] = useState();
    const [bottom, setBottom] = useState();
    const [top, setTop] = useState();
    const toolTip = useRef(null);

    useEffect(()=>{
        console.log(props);
        if(props.position === 'bottom') {
            setTop(props.top + props.height + 10);
        } 
        else if(props.position === 'top') {
            setTop(props.top-toolTip.current.offsetHeight - 10);
        }
        else if(props.position === 'left') {
            setLeft(props.left - toolTip.current.offsetWidth - 10);
        }
        else {
            setLeft(props.left + props.width + 10); 
        }
    },[])
    return (
        <>
            <div style={{
                        position: "absolute",
                        left: `${left}px`,
                        top: `${top}px`,
                        bottom:`${bottom}px`,
                        right:`${right}px`
                    }}
                    className='toolTip' id='toolTip' ref={toolTip}>
                Thanks for Hovering.
                <b>I'm ToolTip</b>
            </div>
        </>
    );
}

export default ToolTip;