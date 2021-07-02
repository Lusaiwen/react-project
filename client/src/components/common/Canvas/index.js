import React, { useRef, useEffect } from 'react';
import init from './canvas.js';

export default function index() {
    const canvasRef = useRef();
    useEffect(() => {
        init(canvasRef.current);
        return () => {};
    }, []);
    return <canvas ref={canvasRef}></canvas>;
}
