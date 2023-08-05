
import { useEffect, useRef, useState } from 'react';
import ToolTip from './ToolTip';
import './App.css';

function App() {
  const [mouseOver, setMouseOver] = useState(false);
  const [left, setLeft] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);

  const hoverElement = useRef(null);

  const hoverText = (()=>{
    hoverElement.current.addEventListener('mouseover',()=>{
      console.log(hoverElement);
      setLeft(hoverElement.current.offsetLeft);
      setTop(hoverElement.current.offsetTop);
      setHeight(hoverElement.current.offsetHeight);
      setWidth(hoverElement.current.offsetWidth);
      setMouseOver(true);
    });
    hoverElement.current.addEventListener('mouseleave', ()=>{
      setMouseOver(false);
    });
  });

  useEffect(()=>{
    hoverText();
  },[]);

  return (
    <div className="App">
      <h1 id='txt' ref={hoverElement}>Hover over me for Details</h1>
      {
        // left, top, bottom, right, etc
        mouseOver && <ToolTip position='right' top={top} width={width} left={left} height={height}/>
      }
    </div>
  );
}

export default App;
