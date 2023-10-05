import PropTypes from 'prop-types';
// @mui
import Card from '@mui/material/Card';
// components
import Image from 'src/components/image';
import Carousel, { CarouselArrowIndex, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CarouselBasic1({ data }) {
  const carousel = useCarousel({
    autoplay: true,
  });

  return (
    <Card>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item) => (
          <Image key={item.id} alt={item.title} src={item.coverUrl} ratio="1/1" />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}

CarouselBasic1.propTypes = {
  data: PropTypes.array,
};
