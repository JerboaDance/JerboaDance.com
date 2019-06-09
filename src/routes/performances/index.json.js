import {performanceData, activePerformance} from '../../data/_performances.js';

const contents = JSON.stringify({
	performances: performanceData.map(performance => {return performance; }),
	activePerformance: activePerformance
});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	
	res.end(contents);
}