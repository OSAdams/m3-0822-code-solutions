import React from 'react';

function Image(props) {
  const { imageSrc, playerName } = props.img;
  return (
    <img src={ imageSrc } alt={ `${playerName} of the Detroit Lions` } />
  );
}

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iterator: 0
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  previousImage() {
    const { iterator } = this.state;
    const imgArrayLength = this.props.imgData.weekTwo.length;
    iterator === 0
      ? this.setState({ iterator: imgArrayLength - 1 })
      : this.setState({ iterator: iterator - 1 });
  }

  nextImage() {
    const { iterator } = this.state;
    const imgArrayLength = this.props.imgData.weekTwo.length;
    iterator === imgArrayLength - 1
      ? this.setState({ iterator: 0 })
      : this.setState({ iterator: iterator + 1 });
  }

  render() {
    const imageData = this.props.imgData.weekTwo;
    const { iterator } = this.state;
    // eslint-disable-next-line no-console
    console.log(imageData);
    return (
      <div className="carousel-container flex">
        <div className="icon-container previous flex" onClick={this.previousImage}>
          <i className="fa-solid fa-chevron-left" />
        </div>
        <Image className="carousel-image" img={ imageData[iterator] } />
        <div className="icon-container next flex" onClick={this.nextImage}>
          <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
    );
  }
}
