import { useEffect, useRef, useState } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BREAKPOINTS: Record<Size, number> = {
  xs: 384,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useBreakpoint = () => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const onResize = () => {
    clearTimeout(timeoutIdRef.current!);
    timeoutIdRef.current = setTimeout(() => {
      setScreenSize(window.innerWidth);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.addEventListener('resize', onResize);
      clearTimeout(timeoutIdRef.current!);
    };
  }, []);

  return {
    xs: () => screenSize <= BREAKPOINTS['xs'],
    sm: () => screenSize <= BREAKPOINTS['sm'],
    md: () => screenSize <= BREAKPOINTS['md'],
    lg: () => screenSize <= BREAKPOINTS['lg'],
    xl: () => screenSize <= BREAKPOINTS['xl'],
    '2xl': () => screenSize <= BREAKPOINTS['2xl'],
  };
};
