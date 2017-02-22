/* @flow */

import fakeData from './data';
import variable from './variables';

import type { Point } from './types';
import { checkColor, getMax, findPoint } from './utils';


const object: Array<Point> = [variable];
const checkedPoints: Array<Point> = [];
let border;

const maxX = getMax(fakeData, 'x');
const maxY = getMax(fakeData, 'y');


const getObject = (data: Array<Point>, points: Array<Point>): any =>
	points.reduce((accumulator: any, point: Point) => {
		if (!accumulator) return accumulator;

		const hasPoint = findPoint(checkedPoints, point);
		if (hasPoint) return accumulator;

		const { x, y } = point;

		let neighbor;
		const neighbors = [];
		if (x + 1 <= maxX) {
			neighbor = findPoint(data, { x: x + 1, y });
			neighbors.push(neighbor);
		}

		if (x - 1 >= 0) {
			neighbor = findPoint(data, { x: x - 1, y });
			neighbors.push(neighbor);
		}

		if (y + 1 <= maxY) {
			neighbor = findPoint(data, { x, y: y + 1 });
			neighbors.push(neighbor);
		}

		if (y - 1 >= 0) {
			neighbor = findPoint(data, { x, y: y - 1 });
			neighbors.push(neighbor);
		}

		for (const item of neighbors) {
			if (item && !findPoint(accumulator, item)) {
				if (checkColor(point, item)) {
					accumulator.push(item);
				} else {
					if (!border) {
						border = item.color;
					} else {
						if (border !== item.color) return false;
					}
				}
			}
		}

		checkedPoints.push(point);

		return getObject(data, object);
	}, object);

const finalObject = getObject(fakeData, [variable]);

/* eslint-disable no-console */
if (finalObject) {
	console.log('finalObject = ', JSON.stringify(finalObject, null, 5));
} else {
	console.log('Cannot identify object');
}
