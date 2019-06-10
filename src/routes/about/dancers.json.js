import allCompanyMembers from '../../data/_companyMembers.js';
import getHeadshotDetails from '../../data/_headshots.js';

const companyMembers = allCompanyMembers.filter(companyMember => companyMember.active);

companyMembers.forEach(companyMember => { 
	companyMember.headshot = getHeadshotDetails(companyMember); 
});

const contents = JSON.stringify({
	companyMembers: companyMembers.map(companyMember => {return companyMember; })
});

/* Server routes */
export function get(req, res) {
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}