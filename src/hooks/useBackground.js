import { useEffect, useState } from 'react';

export default function useBackground() {
  const [background, setBackground] = useState();

  useEffect(() => {
    const fetchBackground = () => {
      try {
        const currentTime = new Date();
        const hour = currentTime.getHours();

        if ((hour >= 19) || (hour <= 5)) {
          setBackground(`${process.env.PUBLIC_URL}/assets/imgs/night-sky.jpg`);
        } 
        else if ((hour >= 6 && hour <= 12)) {
          setBackground(`${process.env.PUBLIC_URL}/assets/imgs/mountains-blue.jpg`);
        }
        else {
          setBackground(`${process.env.PUBLIC_URL}/assets/imgs/mountains-red.jpg`);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };
    fetchBackground();
  }, []);

  return { background };
}