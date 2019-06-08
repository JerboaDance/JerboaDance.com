import companyMembers from './_companyMembers.js';
const formerCompanyMembers = companyMembers.filter(companyMember => !companyMember.active || companyMember.active == false);

const contents = JSON.stringify(formerCompanyMembers.map(companyMember => {
	return companyMember;
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}