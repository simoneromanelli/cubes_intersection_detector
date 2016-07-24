import { CALCULATE_INTERSECTION } from '../actions/index';
import { Plane } from '../lib/plane';
import { Cube } from '../lib/cube';

const INITIAL_STATE = {
  exist: false,
  volume: 0
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CALCULATE_INTERSECTION:
      let firstCube = new Cube(
        action.cubesAttributes.firstCubeX,
        action.cubesAttributes.firstCubeY,
        action.cubesAttributes.firstCubeZ,
        action.cubesAttributes.firstCubeSize
      )
      let secondCube = new Cube(
        action.cubesAttributes.secondCubeX,
        action.cubesAttributes.secondCubeY,
        action.cubesAttributes.secondCubeZ,
        action.cubesAttributes.secondCubeSize
      )
      const plane = new Plane();
      let volume = plane.calculateCubesIntersection(firstCube, secondCube);
      return Object.assign({}, state, { exist: volume > 0 ? true : false, volume });
    default:
      return state;
  }
}


const createCube = (size, x, y, z) => {
  return {size, x, y, z}
}
