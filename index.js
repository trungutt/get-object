import _ from 'lodash';

import fakeData from './data';
import variable from './variable';


type Point = {
	x: number,
	y: number,
	color: string,
};
const checkColor = (X: Point, Y: Point): boolean => X.color === Y.color;
const getMax = (data: Array<Point>, axis: string) => _.maxBy(data, item => item[axis])[axis];
const findPoint = (data: Array<Point>, { x, y }) => _.find(data, { x, y });

const getNeighbors = (data: Array<Point>, point: Point): Array<Point> => {
	const maxX = getMax(data, 'x');
	const maxY = getMax(data, 'y');

	const { x, y } = point;

	const neighbors = [];

	if (x + 1 <= maxX) {
		const neighbor = findPoint(data, { x: x + 1, y });
		if (neighbor) neighbors.push(neighbor);
	}

	if (x - 1 >= 0) {
		const neighbor = findPoint(data, { x: x - 1, y });
		if (neighbor) neighbors.push(neighbor);
	}

	if (y + 1 <= maxY) {
		const neighbor = findPoint(data, { x, y: y + 1 });
		if (neighbor) neighbors.push(neighbor);
	}

	if (y - 1 >= 0) {
		const neighbor = findPoint(data, { x, y: y - 1 });
		if (neighbor) neighbors.push(neighbor);
	}

	return neighbors;
};

console.log(getNeighbors(fakeData, variable));
