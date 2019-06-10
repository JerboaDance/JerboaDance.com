import {works} from '../../data/_works.js';

const lookup = new Map();
works.forEach(work => {
	const headerPhotograph = {
		uri: work.headerUri ? work.headerUri : `works/${work.id}/header.jpg`
	};

	lookup.set(work.id, JSON.stringify({headerPhotograph, ...work}));
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
