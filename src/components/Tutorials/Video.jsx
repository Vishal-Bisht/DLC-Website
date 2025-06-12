import ReactPlayer from 'react-player';

const Video = ({ url, thumbnail }) => {
  return (
    <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        light={thumbnail}
        playing={false}
      />
    </div>
  );
};

export default Video;