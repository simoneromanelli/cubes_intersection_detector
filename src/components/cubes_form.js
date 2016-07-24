import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import InputField from './input_field';
import { calculateIntersection } from '../actions/index';

class CubesForm extends Component {

  onSubmit(propsFormTheForm) {
    this.props.calculateIntersection(propsFormTheForm);
  };

  render(){
    const {
      fields: {
        firstCubeSize, firstCubeX, firstCubeY, firstCubeZ,
        secondCubeSize, secondCubeX, secondCubeY, secondCubeZ
      }, handleSubmit
    } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className='row'>
          <div className='col-sm-5 col-sm-offset-1'>
            <div className='panel panel-info'>
              <div className="panel-heading">
                <h3 className="panel-title">First Cube</h3>
              </div>
              <div className="panel-body">
                <div className='row'>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Dimension', name: firstCubeSize}}/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'X', name: firstCubeX}}/>
                  </div>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Y', name: firstCubeY}}/>
                  </div>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Z', name: firstCubeZ}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-sm-5 '>
            <div className='panel panel-info'>
              <div className="panel-heading">
                <h3 className="panel-title">Second Cube</h3>
              </div>
              <div className="panel-body">
                <div className='row'>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Dimension', name: secondCubeSize}}/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'X', name: secondCubeX}}/>
                  </div>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Y', name: secondCubeY}}/>
                  </div>
                  <div className='col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3'>
                    <InputField params={{label: 'Z', name: secondCubeZ}}/>
                  </div>
                </div>
                <div className='row'>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4 col-sm-offset-4'>
            <button type="submit" className=" btn btn-primary btn-block">Calculate Intersection</button>
          </div>
        </div>
      </form>
    );
  }
}

const isNumeric = (value) => {
    return /^\d+$/.test(value);
}

const validate = (values) => {
  const errors = {};

  if (!isNumeric(values.firstCubeSize)){
    errors.firstCubeSize = 'Enter a positive integer'
  }
  if (!isNumeric(values.firstCubeX)){
    errors.firstCubeX = 'Enter a positive integer'
  }
  if (isNumeric(values.firstCubeX) && values.firstCubeX < (values.firstCubeSize/2)){
    errors.firstCubeX = `Must be greater than ${values.firstCubeSize/2}`
  }
  if (!isNumeric(values.firstCubeY)){
    errors.firstCubeY = 'Enter a positive integer'
  }
  if (isNumeric(values.firstCubeY) && values.firstCubeY < (values.firstCubeSize/2)){
    errors.firstCubeY = `Must be greater than ${values.firstCubeSize/2}`
  }
  if (!isNumeric(values.firstCubeZ)){
    errors.firstCubeZ = 'Enter a positive integer'
  }
  if (isNumeric(values.firstCubeZ) && values.firstCubeZ < (values.firstCubeSize/2)){
    errors.firstCubeZ = `Must be greater than ${values.firstCubeSize/2}`
  }
  if (!isNumeric(values.secondCubeSize)){
    errors.secondCubeSize = 'Enter a positive integer'
  }
  if (!isNumeric(values.secondCubeX)){
    errors.secondCubeX = 'Enter a positive integer'
  }
  if (isNumeric(values.secondCubeX) && values.secondCubeX < (values.secondCubeSize/2)){
    errors.secondCubeX = `Must be greater than ${values.secondCubeSize/2}`
  }
  if (!isNumeric(values.secondCubeY)){
    errors.secondCubeY = 'Enter a positive integer'
  }
  if (isNumeric(values.secondCubeY) && values.secondCubeY < (values.secondCubeSize/2)){
    errors.secondCubeY = `Must be greater than ${values.secondCubeSize/2}`
  }
  if (!isNumeric(values.secondCubeZ)){
    errors.secondCubeZ = 'Enter a positive integer'
  }
  if (isNumeric(values.secondCubeZ) && values.secondCubeZ < (values.secondCubeSize/2)){
    errors.secondCubeZ = `Must be greater than ${values.secondCubeSize/2}`
  }
  return errors;
}

const isOutOfPlane = (firstCubeSize, firstCubeX, firstCubeY, firstCubeZ) => {
  return (
    firstCubeSize <= firstCubeX &&
    firstCubeSize <= firstCubeY &&
    firstCubeSize <= firstCubeZ
  );
}

export default CubesForm = reduxForm({
  form: 'cubes',
  fields: [
    'firstCubeSize', 'firstCubeX', 'firstCubeY', 'firstCubeZ',
    'secondCubeSize', 'secondCubeX', 'secondCubeY', 'secondCubeZ',
    'firstCubeOutOfPlane', 'secondCubeOutOfPlane'
  ],
  validate
},null,{ calculateIntersection })(CubesForm);
