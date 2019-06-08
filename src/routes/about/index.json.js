import companyMembers from './_companyMembers.js';

const contents = JSON.stringify(companyMembers.map(companyMember => {
	return companyMember;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}