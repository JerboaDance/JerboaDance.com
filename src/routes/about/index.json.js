import companyMembers from '../../data/_companyMembers.js';

const activeCompanyMembers = companyMembers.filter(companyMember => companyMember.active);
const jaimeWaliczek = companyMembers.filter(companyMember => companyMember.id === 'JaimeWaliczek');
const activeContents = JSON.stringify({
	companyMembers: activeCompanyMembers.map(companyMember => {return companyMember; }),
	jaimeWaliczek: jaimeWaliczek[0]
});

const formerCompanyMembers = companyMembers.filter(companyMember => !companyMember.active);
const formerContents = JSON.stringify({
	companyMembers: formerCompanyMembers.map(companyMember => {return companyMember; })
});

export function get(req, res) {
	const { former } = req.query;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	if (former !== undefined) {
		res.end(formerContents);
	} else {
		res.end(activeContents);
	}
}