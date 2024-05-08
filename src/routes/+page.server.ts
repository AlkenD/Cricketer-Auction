import { extractSheets } from 'spreadsheet-to-json';
import creds from '$lib/cred.json';

export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let currentData;
	await extractSheets(
		{
			// your google spreadhsheet key
			spreadsheetKey: '1WwuOcvTdfsRNnQ50i3Ul9UCscx4FxsJIr734eMbFwUw',
			// your google oauth2 credentials or API_KEY
			credentials: creds,
			// optional: names of the sheets you want to extract
			sheetsToExtract: ['Sheet2']
		},
		function (err, data) {
			currentData = data.Sheet2;
		}
	);
	return {
		ipl: currentData
	};
}
