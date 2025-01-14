import image from "../Assets/news.png";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "325px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title" style={{ height: "50px", width: "320px" }}>
          {title.slice(0, 50)}
        </h5>
        <p className="card-text" style={{ height: "70px", width: "320px" }}>
          {description
            ? description.slice(0, 90)
            : "Description is not available for now. This is a custom description."}
        </p>
        <a href={url} className="btn btn-light">
          Read more
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
