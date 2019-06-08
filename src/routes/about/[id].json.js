import companyMembers from '../../data/_companyMembers.js';

const lookup = new Map();
companyMembers.forEach(companyMember => {
	lookup.set(companyMember.id, JSON.stringify(companyMember));
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
