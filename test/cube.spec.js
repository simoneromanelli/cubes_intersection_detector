let chai = require('chai');

chai.should();

import { Cube } from '../src/lib/cube';

describe('Cube', () => {
  describe('#constructor', () =>{
    it('has valid constructor', () =>{
      const cube = new Cube(1, 1, 1, 1);
      cube.size.should.equal(1);
    });

    it('create the cube with X, Y, Z as center',() =>{
      const cube = new Cube(1, 1, 1, 1);
      cube.min_x.should.equal(0.5);
    });
  })
});
