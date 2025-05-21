import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = (
  ref: RefObject<Element>,
  rootMargin = '0px'
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};