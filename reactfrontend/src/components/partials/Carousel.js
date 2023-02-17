import React, { Children, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

import "../../styles/Carousel.css";

export const CarouselItem = ({ children, width, path }) => {
  return (
    <div className="carousel-item2 d-inline-block"  style={{  width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <CarouselControlSection className="indicators d-flex justify-content-center justify-content-sm-start align-items-center minDiv-text w-100">
        
        {React.Children.map(children, (child, index) => {
          return (
            index === activeIndex ?
                (<CarouselControlButtonActive />)
                :
                (<CarouselControlButtonNormal
                  onClick={() => {
                      updateIndex(index);
                  }}
                />)

          );
        })}

      </CarouselControlSection>
    </div>
  );
};

const CarouselControlSection = styled.div`
  margin-top: -125px;
  position: absolute;

  @media (min-width: 768px) and (max-height: 1024px)
  {
    margin-top: -100px;
  }

  @media (min-width: 768px) and (min-height: 1025px)
  {
    margin-top: -170px;
  }
`;

const CarouselControlButton = styled.button`
  border: 0;
`;

const CarouselControlButtonActive = styled(CarouselControlButton)`
  border-radius: 8px;
  width: 16px;
  height: 16px;
  background-color: rgba(194, 194, 194, 1);

  @media (min-width: 768px)
  {
    border-radius: 12px;
    width: 24px;
    height: 24px;
  }
`;

const CarouselControlButtonNormal = styled(CarouselControlButton)`
  border-radius: 6px;
  width: 8px;
  height: 12px;
  background-color: rgba(217, 217, 217, 0.5);

  @media (min-width: 768px)
  {
    border-radius: 8px;
    width: 16px;
    height: 16px;
  }
`;

export default Carousel;
