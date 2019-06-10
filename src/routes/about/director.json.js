import allCompanyMembers from '../../data/_companyMembers.js';
import getHeadshotDetails from '../../data/_headshots.js';

const jaimeWaliczek = allCompanyMembers.filter(companyMember => companyMember.id === 'JaimeWaliczek')[0];
jaimeWaliczek.headshot = getHeadshotDetails(jaimeWaliczek); 

const contents = JSON.stringify({
	jaimeWaliczek: jaimeWaliczek
});

/* Server routes */
export function get(req, res) {
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}