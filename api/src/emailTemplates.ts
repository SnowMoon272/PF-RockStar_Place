import { place } from "./db/models/placeModel";

const registerTemplate = (email: any) => {
	const htmlContent = `
    <h1>Bienvenido a Rockstar Place!</h1>
    <h2>Te has registrado exitosamente!</h2>
    <h3>Vemos que te has registrado con el correo electrónico de: ${email}</h3>
    `;
	return htmlContent;
};

const bandMatchTemplate = (bandName: any, date: any, placeDates: any) => {
	const htmlContent = `
        <h1>Fecha confirmada!</h1>
        <h2>Hola ${bandName} te enviamos este correo electrónico para avisarte que tienes una nueva fecha 
        el ${date} en ${placeDates}!</h2>
        <h3>Te deseamos suerte en tus futuros eventos
        saludos,
        Rockstar Place</h3>
    `;
	return htmlContent;
};

const placeMatchTemplate = (placeName: any, bandName: any, date: any) => {
	console.log(placeName);
	console.log(bandName);
	console.log(date);
	const htmlContent = `
        <h1>Fecha confirmada!</h1>
        <h2>Hola ${placeName} te enviamos este correo electrónico para avisarte que tienes una nueva fecha 
        con ${bandName} el ${date} !</h2>
        <h3>Te deseamos suerte en tus futuros eventos
        saludos,
        Rockstar Place</h3>
    `;
	return htmlContent;
};

const matchInvitationTemplate = ``;

const bannedTemplate = ``;

const cancelMatchTemplate = ``;

module.exports = {
	registerTemplate,
	bandMatchTemplate,
	placeMatchTemplate,
	bannedTemplate,
	cancelMatchTemplate,
	matchInvitationTemplate,
};
