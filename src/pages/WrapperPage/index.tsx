import {
  FC,
  JSX, useCallback, useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
  router,
  routerFlow,
} from '../../conststants.tsx';

export interface WrapperPageProps {
  children: JSX.Element;
}

const WrapperPage: FC<WrapperPageProps> = ({
  children,
}: WrapperPageProps): JSX.Element => {
  const location = useLocation();
  const isFirstPage = routerFlow[0] === location.pathname;
  const isLastPage = routerFlow[routerFlow.length - 1] === location.pathname;

  const handlePrev = useCallback(() => {
    const currentIndex = routerFlow.indexOf(location.pathname);
    if (currentIndex > 0) {
      router.navigate(routerFlow[currentIndex - 1]);
    }
  }, [location.pathname]);

  const handleNext = useCallback(() => {
    const currentIndex = routerFlow.indexOf(location.pathname);
    if (currentIndex < routerFlow.length - 1) {
      router.navigate(routerFlow[currentIndex + 1]);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  return (
    <>
      <div className="applicationContent">
        {children}
      </div>
      <div className="applicationActions">
        <button className="button" disabled={isFirstPage} onClick={handlePrev}>Prev</button>
        <button className="button" disabled={isLastPage} onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default WrapperPage;
