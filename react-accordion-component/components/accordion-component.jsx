import React from 'react';

function Content(props) {
  return (
      <div className="ac-content">
        <p>{ props.content }</p>
      </div>
  );
}

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickContent: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const textContent = event.target.textContent;
    const { clickContent } = this.state;
    if (clickContent !== textContent) { this.setState({ clickContent: textContent }); }
    if (clickContent === textContent) { this.setState({ clickContent: '' }); }
  }

  render() {
    const { clickContent } = this.state;
    const { data } = this.props;
    const renderData = data.map(index => {
      return (
        <>
          <div className='ac-title' key={ index.number }>
            <h3>{ index.title }</h3>
          </div>
          {
          clickContent === index.title
            ? <Content content={index.content} />
            : clickContent !== index.title
              ? ''
              : ''
          }
        </>
      );
    }
    );
    return (
      <div className='ac-container' onClick={ this.handleClick }>
        { renderData }
      </div>
    );
  }
}
