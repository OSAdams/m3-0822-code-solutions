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
      currentID: null
    };
  }

  handleClick(id) {
    const targetID = id;
    const { currentID } = this.state;
    currentID === targetID
      ? this.setState({ currentID: null })
      : this.setState({ currentID: targetID });
  }

  render() {
    const { currentID } = this.state;
    const { data } = this.props;
    const renderData = data.map(index => (
        <div key={index.id}>
          <div className='ac-title' onClick={() => this.handleClick(index.id) }>
            <h3>{ index.title }</h3>
          </div>
          {
          currentID === index.id
            ? <Content content={index.content} />
            : currentID !== index.id
              ? null
              : null
          }
        </div>
    )
    );
    return (
      <div className='ac-container'>
        { renderData }
      </div>
    );
  }
}
