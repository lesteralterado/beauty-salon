import { useEffect, useState } from 'react';

let cached = null;

export default function useFramerMotion() {
  const [fm, setFm] = useState(cached);

  useEffect(() => {
    let mounted = true;
    if (cached) {
      setFm(cached);
      return () => { mounted = false; };
    }

    import('framer-motion')
      .then((mod) => {
        cached = mod;
        if (mounted) setFm(mod);
      })
      .catch(() => {});

    return () => { mounted = false; };
  }, []);

  return fm;
}
