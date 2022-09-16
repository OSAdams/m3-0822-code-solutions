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
      data: this.props.data,
      display: ''
    };
  }

  render() {
    const { data } = this.state;
    const renderData = data.map(index => {
      return (
        <>
          <div className='ac-title' key={ index.number }>
            <h3>{ index.title }</h3>
          </div>
          <Content content={ index.content } />
        </>
      );
    }
    );
    return (
      <div className='ac-container'>
        { renderData }
      </div>
    );
  }
}
