import {performanceData} from '../../data/_performances.js';

const lookup = new Map();
performanceData.forEach(performance => {
	lookup.set(performance.id, JSON.stringify(performance));
});

export function get(req, res, next) {
	const { id } = req.params;

	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
