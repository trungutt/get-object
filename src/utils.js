/* @flow */

import _ from 'lodash';

import type { Point } from './types';


export const checkColor = (X: Point, Y: Point): boolean => X.color === Y.color;
export const getMax = (data: Array<Point>, axis: string): number =>
	_.maxBy(data, item => item[axis])[axis];
export const findPoint = (data: Array<Point>, { x, y }: any): Point => _.find(data, { x, y });
