import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function InfinitySlide(props) {
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <InfinitySlideContainer>
      {/* <SlideImages></SlideImages> */}
      {ASIDEDATA.slice(ASIDEDATA.length - 1, ASIDEDATA.length).map(el => {
        return <img src={el.url} />;
      })}
      {ASIDEDATA.map(el => {
        return <img src={el.url} />;
      })}
      {ASIDEDATA.slice(0, 1).map(el => {
        return <img src={el.url} />;
      })}
      <SlideButtonContainer>
        <button>
          <span className="goToPrevAsideSlide">{'<'}</span>
        </button>
        <span className="currentAsideSlideNumber"></span>
        <button>
          <span className="goToNextAsideSlide">{'>'}</span>
        </button>
      </SlideButtonContainer>
    </InfinitySlideContainer>
  );
}

const InfinitySlideContainer = styled.div`
  width: 280px;
  background-color: blue;
  overflow: hidden;
  display: flex;
  position: relative;
  img {
    transform: translateX(-200%);
  }
`;

const SlideButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  button {
    all: unset;
    color: red;
  }
`;

// const SlideImages = styled.img`
//   alt: "main page aside product";

//                     /* key={asideProductdata.id}
//                     className={`${slidestatus} asideProduct`}
//                     style={this.isMovedAsideSlide()}
//                     src={asideProductdata.url} */
// `;

const ASIDEDATA = [
  {
    id: 1,
    url: 'https://lush.co.kr/data/skin/front/howling/img/banner/989b90f38282fa8054dd6dfcd851b5b0_17526.jpg',
  },
  {
    id: 2,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/e75c8b20d4a0bbbfeef78f35b7e134e3_61468.jpg',
  },
  {
    id: 3,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/030f2710b1fd96a3713d8349a9a78252_40109.jpg',
  },
  {
    id: 4,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/014ae76f2e992929d226a129f6043ae2_41669.jpg',
  },
  {
    id: 5,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/08d55278e11fe3eb9d784d5033e5a565_79753.jpg',
  },
  {
    id: 6,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/6b33f611b18d5894d0aea7fc9894697a_90897.jpg',
  },
  {
    id: 7,
    url: 'http://lush.co.kr/data/skin/front/howling/img/banner/4d0a0df7ebaf6253e290f2a472c89954_68648.jpg',
  },
];
