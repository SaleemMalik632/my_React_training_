function Video() {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>this is description </p> 
        </a>
        <LikeButton video={video} /> 
      </div>
    );
  }

  

export default Video