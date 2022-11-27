function PlatformCard({ platformInfo }) {
  return (
    <div className="Card">
      <h1>{platformInfo.title}</h1>
      <img
        className="image"
        src={platformInfo.image_url}
        alt={platformInfo.title}
      />
    </div>
  );
}

export default PlatformCard;
