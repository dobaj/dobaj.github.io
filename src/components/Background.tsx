import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import "./Background.css";

export const Background = ({ children }: { children: ReactNode }) => {
  const noiseRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const mouseRef = useRef<{
    x: number;
    y: number;
  }>({ x: -1, y: -1 });

  const scrollRef = useRef<{
    x: number;
    y: number;
  }>({ x: -1, y: -1 });

  const noisePosRef = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const bgPosRef = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const clampDelta = (newVal: number, oldVal: number, maxDelta = 1) => {
    // Make it so that a value can only change by one pixel max per fram
    const delta = newVal - oldVal;
    if (Math.abs(delta) > maxDelta) {
      return oldVal + Math.sign(delta) * maxDelta;
    }
    return newVal;
  };

  const moveRef = (
    objectRef: RefObject<HTMLDivElement | null>,
    ref: RefObject<{ x: number; y: number }>,
    x: number,
    y: number
  ) => {
    if (objectRef && objectRef.current) {
      const beforeStyle = getComputedStyle(objectRef.current, "::before");
      const zIndex = beforeStyle.getPropertyValue("z-index");
      const multiplier = 100 + parseFloat(zIndex); // arbitrary 100 baseline

      let bgX = parseFloat(objectRef.current.style.getPropertyValue("--bg-x"));
      let bgY = parseFloat(objectRef.current.style.getPropertyValue("--bg-y"));

      if (isNaN(bgX)) bgX = 0;
      if (isNaN(bgY)) bgY = 0;

      x = bgX + x * multiplier;
      y = bgY + y * multiplier;

      x = clampDelta(x, ref.current.x);
      y = clampDelta(y, ref.current.y);

      ref.current.x = x;
      ref.current.y = y;

      objectRef.current.style.setProperty("--bg-x", `${x}px`);
      objectRef.current.style.setProperty("--bg-y", `${y}px`);
    }
  };

  const moveBgs = (moveX: number, moveY: number) => {
    moveRef(noiseRef, noisePosRef, moveX, moveY);
    moveRef(backgroundRef, bgPosRef, moveX, moveY);
  };

  const calcMove = (mousePos: number, scrollPos: number) => {
    return mousePos / 2000 - scrollPos / 750;
  };

  useEffect(() => {
    const handleMouseMove = (e: { clientY: number; clientX: number }) => {
      if (mouseRef.current.x == -1 && mouseRef.current.y == -1) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        return;
      }

      // Calculate how much to move backgrounds (before multiplying)
      const moveX = calcMove(e.clientX - mouseRef.current.x, 0);
      const moveY = calcMove(e.clientY - mouseRef.current.y, 0);

      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      moveBgs(moveX, moveY);
    };

    const handleScroll = () => {
      if (scrollRef.current.x == -1 && scrollRef.current.y == -1) {
        scrollRef.current.x = window.scrollX;
        scrollRef.current.y = window.scrollY;
        return;
      }

      // Calculate how much to move backgrounds (before multiplying)
      const moveX = calcMove(0, window.scrollX - scrollRef.current.x);
      const moveY = calcMove(0, window.scrollY - scrollRef.current.y);

      scrollRef.current.x = window.scrollX;
      scrollRef.current.y = window.scrollY;

      moveBgs(moveX, moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

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
