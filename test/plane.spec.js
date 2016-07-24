let chai = require('chai');

chai.should();

import { Plane } from '../src/lib/plane';
import { Cube } from '../src/lib/cube';

describe('Plane', () => {
  describe('#calculateCubesIntersection', () =>{

    let plane, eightCubicMetersCube;

    beforeEach(() => {
      plane = new Plane;
      eightCubicMetersCube = new Cube(3, 3, 3, 2);
    });

    it('return -1 if try to process objects different from cubes', () =>{
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, ['fake', 'cube']);
      result.should.equal(-1);
    });

    it('return the correct intersection volume if the cubes are equal size and same position', () =>{
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, eightCubicMetersCube);
      result.should.equal(8);
    });

    it('return the correct intersection volume if the first cube includes the second one ', () =>{
      let smallerIncludedCube = new Cube(3, 3, 3, 1);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, smallerIncludedCube);
      result.should.equal(1);
    });

    it('return the correct intersection volume if the second cube is included in the first one ', () =>{
      let biggerCube = new Cube(3, 3, 3, 3);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, biggerCube);
      result.should.equal(8);
    });

    it('return the correct intersection volume if the cubes are intersected First example', () =>{
      let secondCube = new Cube(2, 3, 3, 2);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, secondCube);
      result.should.equal(4);
    });

    it('return the correct intersection volume if the cubes are intersected Second example', () =>{
      let secondCube = new Cube(2, 2, 3, 2);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, secondCube);
      result.should.equal(2);
    });

    it('return the correct intersection volume if the cubes are intersected Third example', () =>{
      let secondCube = new Cube(2, 2, 2, 2);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, secondCube);
      result.should.equal(1);
    });

    it('return the correct intersection volume if the cubes are not intersected', () =>{
      let secondCube = new Cube(20, 20, 20, 2);
      let result =
        plane.calculateCubesIntersection(eightCubicMetersCube, secondCube);
      result.should.equal(0);
    });

  })
});
