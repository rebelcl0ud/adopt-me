import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handlePicIndexClick = (e) => {
    console.log(this);
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // TODO: accessibility
            // eslint-disable-next-line
            <img
              key={image}
              src={image}
              alt="animal thumbnail"
              className={`${index === active ? "active" : ""} carousel-btn `}
              onClick={this.handlePicIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
