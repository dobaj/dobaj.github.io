import {
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import "./Background.css";

export const Background = ({ children }: { children: ReactNode }) => {
  const noiseRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  // const initialMouseRef = useRef<{
  //   x: number;
  //   y: number;
  // }>({ x: -1, y: -1 });

  
  const mouseRef = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const noisePosRef = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const bgPosRef = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const clampDelta = (newVal: number, oldVal: number, maxDelta = 0.5) => {
    const delta = newVal - oldVal;
    if (Math.abs(delta) > maxDelta) {
      return oldVal + Math.sign(delta) * maxDelta;
    }
    return newVal;
  };

  const setBgOffset = (
    objectRef: RefObject<HTMLDivElement | null>,
    ref: RefObject<{ x: number; y: number }>,
    x: number,
    y: number
  ) => {
    if (objectRef && objectRef.current) {
      const beforeStyles = getComputedStyle(objectRef.current, "::before");
      const zIndex = beforeStyles.getPropertyValue("z-index");

      const multiplier = 100 + parseFloat(zIndex); // arbitrary 100
      x = x * multiplier;
      y = y * multiplier;

      x = clampDelta(x, ref.current.x);
      y = clampDelta(y, ref.current.y);

      ref.current.x = x;
      ref.current.y = y;

      objectRef.current.style.setProperty("--bg-x", `${x}px`);
      objectRef.current.style.setProperty("--bg-y", `${y}px`);
    }
  };

  const calcMove = (mousePos: number, scrollPos: number) => {
    return (mousePos - scrollPos * 2) / window.innerWidth - 0.5;
  };
  
  useEffect(() => {
    const handleMouseMove = (e: {
      clientY: number;
      clientX: number;
      pageX: number;
      pageY: number;
    }) => {
      // if (initialMouseRef.current.x == -1 && initialMouseRef.current.y == -1) {
      //   console.log("here")
      //   initialMouseRef.current.x = e.clientX
      //   initialMouseRef.current.y = e.clientY
      // }
      const moveX = calcMove(e.clientX, window.scrollX);
      const moveY = calcMove(e.clientY, window.scrollY);

      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      setBgOffset(noiseRef, noisePosRef, moveX, moveY);
      setBgOffset(backgroundRef, bgPosRef, moveX, moveY);
    };

    const handleScroll = () => {
      const moveX = calcMove(mouseRef.current.x, window.scrollX);
      const moveY = calcMove(mouseRef.current.y, window.scrollY);

      setBgOffset(noiseRef, noisePosRef, moveX, moveY);
      setBgOffset(backgroundRef, bgPosRef, moveX, moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={backgroundRef} className="tiled background" />
      <div ref={noiseRef} className="tiled noise" />
      {children}
    </>
  );
};
