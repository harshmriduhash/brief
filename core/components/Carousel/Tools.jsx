import React from "react";
export const CustomDot = ({
  carouselItems,
  onClick,
  dotInactiveColor = "bg-white",
  className,
  ...rest
}) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={`w-2 h-2 rounded-circle mr-2 text-xs  ${
        active ? "text-primary bg-primary" : `text-white ${dotInactiveColor}`
      } ${className}`}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

export const CustomRightArrow = ({ onClick, className, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className={` p-absolute custom-arrow custom-right-arrow ${className} `}
      onClick={() => onClick()}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 16 16"
        height="1.4em"
        width="1.4em"
      >
        <path d="M5.56 14L5 13.587V2.393L5.54 2 11 7.627v.827L5.56 14z" />
      </svg>
    </button>
  );
};

export const CustomLeftArrow = ({ onClick, className, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className={`p-absolute custom-arrow  ${className} `}
      onClick={() => onClick()}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 16 16"
        height="1.4em"
        width="1.4em"
      >
        <path d="M10.44 2l.56.413v11.194l-.54.393L5 8.373v-.827L10.44 2z" />
      </svg>
    </button>
  );
};

export const responsive = (
  desktop = { items: 3 },
  superLargeDesktop = { items: 3 }
) => {
  const config = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: superLargeDesktop.items,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop.items,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return config;
};
