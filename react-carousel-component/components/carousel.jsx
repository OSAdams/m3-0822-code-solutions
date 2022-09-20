import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iterator: 0,
      checkID: '001'
    };
    this.changeImage = this.changeImage.bind(this);
    this.loopImages = this.loopImages.bind(this);
    this.intervalID = setInterval(this.loopImages, 4000);
    this.circleIconClick = this.circleIconClick.bind(this);
  }

  changeImage(event) {
    const { iterator } = this.state;
    const imageArray = this.props.imgData;
    const { id } = event.target;
    this.resetInterval();
    if (id === 'next') {
      iterator === imageArray.length - 1
        ? this.setState({ iterator: 0, checkID: imageArray[0].id })
        : this.setState({ iterator: iterator + 1, checkID: imageArray[iterator + 1].id });
    } else if (id === 'previous') {
      iterator === 0
        ? this.setState({ iterator: imageArray.length - 1, checkID: imageArray[imageArray.length - 1].id })
        : this.setState({ iterator: iterator - 1, checkID: imageArray[iterator - 1].id });
    }
  }

  loopImages() {
    const { iterator } = this.state;
    const imageArray = this.props.imgData;
    this.resetInterval();
    iterator < imageArray.length - 1
      ? this.setState({ iterator: iterator + 1, checkID: imageArray[iterator + 1].id })
      : this.setState({ iterator: 0, checkID: imageArray[0].id });
  }

  resetInterval() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.loopImages, 4000);
  }

  circleIconClick(event) {
    this.resetInterval();
    this.setState({ iterator: parseInt(event.target.id) - 1, checkID: event.target.id });
  }

  circleRender(array) {
    const { checkID } = this.state;
    const imageArray = array;
    const circleIcons = imageArray.map(index => {
      return (
        <i onClick={ this.circleIconClick } id={ index.id } key={ index.id } className={
          checkID === index.id ? 'fa-solid fa-circle' : 'fa-regular fa-circle'
        } />
      );
    });
    return circleIcons;
  }

  render() {
    const { iterator } = this.state;
    const imageData = this.props.imgData;
    const { playerName, description, imageSrc, id } = imageData[iterator];
    return (
      <div className="carousel-container">
        <h2>{ `${playerName} ${description}` }</h2>
        <div className="image-container flex">
          <div className="icon-container flex" id="previous" onClick={this.changeImage}>
            <i className="fa-solid fa-chevron-left" id="previous" />
          </div>
          <img className="carousel-image" src={ imageSrc } id={ id } />
          <div className="icon-container next flex" id="next" onClick={this.changeImage}>
            <i className="fa-solid fa-chevron-right" id="next" />
          </div>
          <div className="circle-icon-container">
            {
              this.circleRender(imageData)
            }
          </div>
        </div>
      </div>
    );
  }
}
