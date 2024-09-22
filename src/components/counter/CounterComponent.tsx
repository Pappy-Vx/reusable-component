import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { CounterProps } from './Counter';

const CounterComponent: React.FC<CounterProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  // useInView hook for detecting when the element is in view
  const isInView = useInView(ref, { once: true, margin: '0px' });


  useEffect(() => {
    console.log("Is in view:", isInView);
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);
  

  useEffect(() => {
    console.log('motionValue:', motionValue.get(), 'ref.current:', ref.current);
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Number(latest.toFixed(0))
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

export default CounterComponent;
