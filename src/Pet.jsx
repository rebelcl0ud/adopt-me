import { Link } from "react-router-dom";

const Pet = (props) => {
  const { id, name, animal, breed, images, location } = props;

  let heroImg = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    heroImg = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={heroImg} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
