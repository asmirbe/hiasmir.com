// Fonction pour vérifier si l'heure d'été est en vigueur
const isSummerTime = (date) => {
	const year = date.getFullYear();
	const startDST = new Date(year, 2, 31 - new Date(year, 2, 31).getDay(), 2, 0, 0, 0);
	const endDST = new Date(year, 9, 31 - new Date(year, 9, 31).getDay(), 2, 0, 0, 0);
	return date >= startDST && date < endDST;
};

// Fonction pour formater l'heure
export const formatTime = (date) => {
	let localTime = date.getTime();
	let localOffset = date.getTimezoneOffset() * 60000;
	let parisOffset = isSummerTime(date) ? 7200000 : 3600000;
	let utc = localTime + localOffset;
	let parisTime = new Date(utc + parisOffset);

	let hours = parisTime.getHours();
	let minutes = parisTime.getMinutes();
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12; // l'heure '0' doit être '12'
	minutes = minutes < 10 ? "0" + minutes : minutes;
	return {time:`${hours}:${minutes}`, ampm:ampm};
};
