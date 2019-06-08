import companyMembers from './_companyMembers.js';
const activeCompanyMembers = companyMembers.filter(companyMember => companyMember.active);

const contents = JSON.stringify(activeCompanyMembers.map(companyMember => {
	return companyMember;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}