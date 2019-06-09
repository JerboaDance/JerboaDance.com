import companyMembers from '../../data/_companyMembers.js';
import photoCredits from '../../data/_photoCredits.js';

/* Helper functions to merge data */
function addPhotoCredit(companyMember) {
	const headshotUri = companyMember.headshotUri ? companyMember.headshotUri : `company/${companyMember.id}.jpg`;
	
	// Deal with setting up default if file isn't present
	//headshot.uri = 'company/defaultHeadshot.png';

	const photoCredit = photoCredits.findByUri(headshotUri);

	// TODO deal with object being mutated
	companyMember.headshot = { uri:headshotUri, ...photoCredit};
}

function addPhotoCredits(companyMembers) {
	companyMembers.forEach(companyMember => addPhotoCredit(companyMember));
}

/* Create list of active company members and Jaime */
const activeCompanyMembers = companyMembers.filter(companyMember => companyMember.active);
addPhotoCredits(activeCompanyMembers);

const jaimeWaliczek = companyMembers.filter(companyMember => companyMember.id === 'JaimeWaliczek')[0];
addPhotoCredit(jaimeWaliczek);

const activeContents = JSON.stringify({
	companyMembers: activeCompanyMembers.map(companyMember => {return companyMember; }),
	jaimeWaliczek: jaimeWaliczek
});

/* Create list of former company members */
const formerCompanyMembers = companyMembers.filter(companyMember => !companyMember.active);
addPhotoCredits(formerCompanyMembers);

const formerContents = JSON.stringify({
	companyMembers: formerCompanyMembers.map(companyMember => {return companyMember; })
});

/* Server routes */
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