import { Cube } from './cube';

export class Plane{
  calculateCubesIntersection(firstCube, secondCube){
    if ( !(firstCube instanceof Cube && secondCube instanceof Cube) ){
      return -1;
    }else{

      let intersectionWidthLenght = this.calculateEdgeIntersection(firstCube.min_x, firstCube.max_x, secondCube.min_x, secondCube.max_x);
      let intersectionHeightLenght = this.calculateEdgeIntersection(firstCube.min_y, firstCube.max_y, secondCube.min_y, secondCube.max_y);
      let intersectionDepthLenght = this.calculateEdgeIntersection(firstCube.min_z, firstCube.max_z, secondCube.min_z, secondCube.max_z);

      return intersectionWidthLenght * intersectionHeightLenght * intersectionDepthLenght
    }
  }

  calculateEdgeIntersection(firstCubeMinVertex, firstCubeMaxVertex, secondCubeMinVertex, secondCubeMaxVertex){
    let firstCubeEdgeIncludeSecondCubeMinVertex =
      firstCubeMinVertex <= secondCubeMinVertex &&
      secondCubeMinVertex <= firstCubeMaxVertex;
    let secondCubeEdgeIncludeFirstCubeMinVertex =
      secondCubeMinVertex <= firstCubeMinVertex &&
      firstCubeMinVertex <= secondCubeMaxVertex;
    let firstCubeTotallyIncludedInSecond =
      firstCubeEdgeIncludeSecondCubeMinVertex &&
      firstCubeMaxVertex >= secondCubeMaxVertex
    let secondCubeTotallyIncludedInFirst =
      secondCubeEdgeIncludeFirstCubeMinVertex &&
      secondCubeMaxVertex >= firstCubeMaxVertex
    let intersectionLength = 0;

    if ( firstCubeTotallyIncludedInSecond ){
      intersectionLength = secondCubeMaxVertex - secondCubeMinVertex;
    }else if( secondCubeTotallyIncludedInFirst ){
      intersectionLength = firstCubeMaxVertex - firstCubeMinVertex;
      return intersectionLength;
    }else if( firstCubeEdgeIncludeSecondCubeMinVertex ){
      intersectionLength = firstCubeMaxVertex - secondCubeMinVertex;
      return intersectionLength;
    }else if( secondCubeEdgeIncludeFirstCubeMinVertex ){
      intersectionLength = secondCubeMaxVertex - firstCubeMinVertex;
      return intersectionLength;
    }
    return intersectionLength;
  }

}

