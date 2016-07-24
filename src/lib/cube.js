
export class Cube {
  constructor(x, y, z, size){
    size = parseInt(size);
    this.size = size;
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.z = parseInt(z);
    this.min_x = this.x - (size/2);
    this.max_x = this.x + (size/2);
    this.min_y = this.y - (size/2);
    this.max_y = this.y + (size/2);
    this.min_z = this.z - (size/2);
    this.max_z = this.z + (size/2);

  }
}