import React, { useRef, useEffect, useState } from 'react';

export default function DrawingBoard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    // Initialize the canvas
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.lineCap = 'round';

    function startDrawing(e) {
      setIsDrawing(true);
      const x = e.clientX - canvas.getBoundingClientRect().left;
      const y = e.clientY - canvas.getBoundingClientRect().top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    }

    function draw(e) {
      if (!isDrawing) return;
      const x = e.clientX - canvas.getBoundingClientRect().left;
      const y = e.clientY - canvas.getBoundingClientRect().top;
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    function endDrawing() {
      if (isDrawing) {
        ctx.closePath();
      }
      setIsDrawing(false);
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mouseout', endDrawing);

    // Resize canvas when the window is resized
    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', endDrawing);
      canvas.removeEventListener('mouseout', endDrawing);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDrawing]);

  const isFullScreen = window.innerWidth >= 900;

  return (
      <div className="container">
        <canvas ref={canvasRef} id="drawingCanvas"></canvas>
        <button
          id="clearButton"
          onClick={() => {
            if (context) {
              context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
          }}
        >
          Clear
        </button>
      </div>
    )
}
