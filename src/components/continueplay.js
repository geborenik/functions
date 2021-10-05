import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Continueplay = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.twitch.tv/videos/1117904191?t=0h28m53s"
        playing="true"
        volume="0"
        mute="false"
        controls
      />
    </div>
  );
};

const MATCHES = [
  {
    id: 1,
    vid: 1117904191,
    startTime: 1733,
  },
  {
    id: 2,
    vid: 1117904191,
    startTime: 5150,
  },
  {
    id: 3,
    vid: 1111838619,
    startTime: 1729,
  },
];
