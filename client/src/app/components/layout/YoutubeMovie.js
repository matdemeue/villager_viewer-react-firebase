import React, { } from 'react';

const YoutubeMovie = ({url, width, height}) => {
  return (
    <div className="youtube-movie">
      <iframe width={width} height={height} src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default YoutubeMovie;