const monthNames = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december'
];

// i do this because i might use non-capitalized for D/M/Y format
function monthCapitalized(date){
    return monthNames[date.getMonth()][0].toUpperCase() + 
    monthNames[date.getMonth()].substring(1);
}


function USADate(date){
    return `${monthCapitalized(date)} ${date.getDate()}, 
    ${date.getFullYear()}`;
}

export default {monthNames, monthCapitalized, USADate}