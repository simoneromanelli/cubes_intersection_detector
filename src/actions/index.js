export const CALCULATE_INTERSECTION = 'CALCULATE_INTERSECTION';

export const calculateIntersection = (cubesAttributes) => {
  return {
    type: CALCULATE_INTERSECTION,
    cubesAttributes: cubesAttributes
  }
}