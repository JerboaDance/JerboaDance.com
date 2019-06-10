import photoCredits from './_photoCredits.js';

function getHeadshotDetails(companyMember) {
	const headshotUri = companyMember.headshotUri ? companyMember.headshotUri : `company/${companyMember.id}.jpg`;
	
	// Deal with setting up default if file isn't present
	//headshot.uri = 'company/defaultHeadshot.png';

	const photoCredit = photoCredits.findByUri(headshotUri);
	const headshot = { uri:headshotUri, ...photoCredit};

	return headshot;
}

export default getHeadshotDetails;