import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import { ErrorContext } from "../App";
import { getMovieVideos } from "../apiCalls";
import "./MovieVideos.css";

export default function MovieVideos({ movieId }) {
  const [videos, setVideos] = useState([]);
  const { addError } = useContext(ErrorContext);

  useEffect(() => {
    if (!movieId) return;

    getMovieVideos(movieId)
      .then((videos) => {
        // if there is no videos, set to a fake trailer
        if (!videos.length) {
          setVideos([
            {
              id: 1,
              movie_id: movieId,
              key: "5BZLz21ZS_Y",
              site: "YouTube",
              type: "Error",
            },
          ]);
        } else setVideos(videos);
      })
      .catch(() => addError("Failed to get video list"));
  }, [movieId]);

  const videoElements = videos.map((video) => {
    return (
      <div className="react-player-container" key={video.id}>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/watch?v=${video.key}`}
        />
      </div>
    );
  });

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows={true}
      emulateTouch={true}
      className="movie-videos--carousel"
    >
      {videoElements}
    </Carousel>
  );
}

MovieVideos.propTypes = {
  movieId: PropTypes.number,
};
