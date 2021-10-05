import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function InfinitySlide(props) {
  const [slideNumber, setSlideNumber] = useState(1);
  console.log(slideNumber);
  console.log(slideNumber === SLIDEDATA.length - 1);

  const check = () => {
    console.log(slideNumber);
  };

  const nextSlide = () => {
    if (slideNumber === SLIDEDATA.length - 2) {
      const test = () => {
        return new Promise((res, rej) => {});
      };
      setTimeout(() => setSlideNumber(0), 1000);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <InfinitySlideContainer currentSlide={slideNumber} onClick={check}>
      {SLIDEDATA.map((el, index) => {
        return <img key={index} src={el.url} />;
      })}
      <SlideButtonContainer>
        <button>
          <span>{'<'}</span>
        </button>
        <span></span>
        <button onClick={nextSlide}>
          <span>{'>'}</span>
        </button>
      </SlideButtonContainer>
    </InfinitySlideContainer>
  );
}

const InfinitySlideContainer = styled.div`
  width: 434px;
  overflow: hidden;
  display: flex;
  position: relative;
  img {
    ${props => `transform: translateX(-${props.currentSlide}00%);`}
    ${props => {
      if (props.currentSlide === 8) {
        return `transition: all 0.5s ease-in-out;`;
        setTimeout(() => {
          return `transition: none;`;
        }, 5501);
      } else {
        return `transition: all 0.5s ease-in-out;`;
      }
    }}
  }
`;

const SlideButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  button {
    all: unset;
    color: blue;
  }
`;

// const SlideImages = styled.img`
//   alt: "main page aside product";

//                     /* key={asideProductdata.id}
//                     className={`${slidestatus} asideProduct`}
//                     style={this.isMovedAsideSlide()}
//                     src={asideProductdata.url} */
// `;

const RAWDATA = [
  {
    id: 1,
    url: 'http://image.nongshim.com/non/pro/product_Bhot.jpg',
  },
  {
    id: 2,
    url: 'http://image.nongshim.com/non/pro/1541051410389.jpg',
  },
  {
    id: 3,
    url: 'http://image.nongshim.com/non/pro/1541051441443.jpg',
  },
  {
    id: 4,
    url: 'http://image.nongshim.com/non/pro/1594078420956.jpg',
  },
  {
    id: 5,
    url: 'http://image.nongshim.com/non/pro/1586742369584.jpg',
  },
  {
    id: 6,
    url: 'http://image.nongshim.com/non/pro/product_yukgae.jpg',
  },
  {
    id: 7,
    url: 'http://image.nongshim.com/non/pro/1552865368760.jpg',
  },
];

const makeSlideData = () => {
  const slideData = [];
  const lastData = RAWDATA.slice(RAWDATA.length - 1, RAWDATA.length);
  const firstData = RAWDATA.slice(0, 1);
  RAWDATA.map(el => slideData.push(el));
  return lastData.concat(slideData).concat(firstData);
};

const SLIDEDATA = makeSlideData();
