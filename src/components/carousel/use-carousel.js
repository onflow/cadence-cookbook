import { useRef, useCallback, useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function useCarousel(props) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(props?.initialSlide || 0);

  const [nav, setNav] = useState(undefined);

  const rtl = theme.direction === 'rtl';

  const carouselSettings = {
    arrows: false,
    dots: !!props?.customPaging,
    rtl,
    beforeChange: (current, next) => setCurrentIndex(next),
    ...props,
    fade: !!(props?.fade && !rtl),
  };

  const onSetNav = useCallback(() => {
    if (carouselRef.current) {
      setNav(carouselRef.current);
    }
  }, []);

  const onPrev = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  }, []);

  const onNext = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  }, []);

  const onTogo = useCallback((index) => {
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index);
    }
  }, []);

  return {
    nav,
    carouselRef,
    currentIndex,
    carouselSettings,
    //
    onPrev,
    onNext,
    onTogo,
    onSetNav,
    //
    setNav,
    setCurrentIndex,
  };
}
