import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    //Sumula cargando 
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [pathname]);

  return (
    <>
      {loading && <div className="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>}
    </>
  );
};

export default ScrollToTop;
