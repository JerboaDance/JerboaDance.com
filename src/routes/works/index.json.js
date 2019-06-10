import {works, activeWork} from '../../data/_works.js';

const contents = JSON.stringify({
	works: works.map(work => {return work; }),
	activeWork: activeWork
});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	
	res.end(contents);
}