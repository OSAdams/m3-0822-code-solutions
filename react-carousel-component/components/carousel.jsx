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
      iterator: 0,
      checkID: '001'
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.loopImages = this.loopImages.bind(this);
    this.intervalID = setInterval(this.loopImages, 3000);
    this.circleIconClick = this.circleIconClick.bind(this);
  }

  previousImage() {
    const { iterator } = this.state;
    const imageArray = this.props.imgData.weekTwo;
    this.resetInterval();
    iterator === 0
      ? this.setState({ iterator: imageArray.length - 1, checkID: imageArray[imageArray.length - 1].id })
      : this.setState({ iterator: iterator - 1, checkID: imageArray[iterator - 1].id });
  }

  nextImage() {
    const { iterator } = this.state;
    const imageArray = this.props.imgData.weekTwo;
    this.resetInterval();
    iterator === imageArray - 1
      ? this.setState({ iterator: 0, checkID: imageArray[0].id })
      : this.setState({ iterator: iterator + 1, checkID: imageArray[iterator + 1].id });
  }

  loopImages() {
    const { iterator } = this.state;
    const imageArray = this.props.imgData.weekTwo;
    this.resetInterval();
    iterator < imageArray.length - 1
      ? this.setState({ iterator: iterator + 1, checkID: imageArray[iterator + 1].id })
      : this.setState({ iterator: 0, checkID: imageArray[0].id });
  }

  resetInterval() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.loopImages, 3000);
  }

  circleIconClick(event) {
    this.resetInterval();
    this.setState({ iterator: parseInt(event.target.id) - 1, checkID: event.target.id });
  }

  circleRender(array) {
    const { checkID } = this.state;
    const imageArray = this.props.imgData.weekTwo;
    const circleIcons = imageArray.map(index => {
      return (
        <i onClick={ this.circleIconClick } id={ index.id } key={ index.id } className={
          checkID === index.id
            ? 'fa-solid fa-circle'
            : 'fa-regular fa-circle'
        } />
      );
    });
    return circleIcons;
  }

  render() {
    const { iterator } = this.state;
    const imageData = this.props.imgData.weekTwo;
    return (
      <div className="carousel-container flex">
        <div className="icon-container previous flex" onClick={this.previousImage}>
          <i className="fa-solid fa-chevron-left" />
        </div>
        <Image className="carousel-image" img={ imageData[iterator] } />
        <div className="icon-container next flex" onClick={this.nextImage}>
          <i className="fa-solid fa-chevron-right" />
        </div>
        <div className="circle-icon-container">
          {
            this.circleRender(imageData)
          }
        </div>
      </div>
    );
  }
}
