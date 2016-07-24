import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultBoard extends Component {

  render() {

    const { intersection } = this.props;
    if (!intersection.exist){
      return (
        <div className='row'>
        <div className='col-sm-10 col-sm-offset-1'>
          <div className="jumbotron text-center">
            <h1>No intersection detected</h1>
          </div>
        </div>
      </div>
      );
    }

    return(
      <div className='row'>
        <div className='col-sm-10 col-sm-offset-1'>
          <div className="jumbotron text-center">
            <h1>Volume of intersection</h1>
            <h1 className='big'>{intersection.volume} m &sup3;</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { intersection: state.intersection};
}

export default connect(mapStateToProps, null)(ResultBoard);