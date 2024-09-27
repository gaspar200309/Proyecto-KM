import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Scrooll.css'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
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
