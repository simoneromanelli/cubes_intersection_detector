import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore  } from 'redux';
import CubesForm from './components/cubes_form';
import ResultBoard from './components/result_board';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <div>
      <div className='row'>
        <div className='col-md-10 col-md-offset-1'>
          <h1>Cubes intersection calculator</h1>
        </div>
      </div>
      <CubesForm/>
      <ResultBoard/>
    </div>
  </Provider>
  , document.querySelector('.container')
);
