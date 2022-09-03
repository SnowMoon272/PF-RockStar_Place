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

//le llega el mail al musico
const cancelPendingDate = (name: any, place: any, date: any) => {
	const htmlContent = `
        <h1>Fecha pendiente rechazada :(</h1>
            <h2>Hola ${name} queremos avisarte que tu solicitud para tocar en ${place}
            el ${date} ha sido rechazada. No te desamines! puedes seguir aplicando para tocar en otros lugares,
            exitos!
            </h2>
            <h3>Te deseamos lo mejor en tus futuros eventos
            saludos,
            Rockstar Place <3</h3>
    `;
	return htmlContent;
};
//le llega el mail al lugar
const newPendingDateTemplate = (placeName: any, bandName: any, date: any) => {
	const htmlContent = `
    <h1>Tienes una nueva solicitud!</h1>
    <h2>Hola ${placeName} te contactamos porque has recibido una nueva solicitud de parte de la banda
    ${bandName} para tocar en tu local el ${date}, podes gestionar tus fechas pendientes en tu perfil de nuestro
    website!
    </h2>
    <h3>Te deseamos lo mejor en tus futuros eventos
    saludos,
    Rockstar Place <3
    </h3>
    `;
	return htmlContent;
};

const bannedTemplate = (name: any) => {
	const htmlContent = `
    <h1>Cuenta Suspendida</h1>
        <h2>Querido usuario: ${name}, lamentamos informarle que su cuenta ha sido suspendida
        debido a mal comportamiento.
        </h2>
        <h3>Gracias por haber utilizado nuestros servicios.
        saludos,
        Rockstar Place    
        </h3>
    `;
	return htmlContent;
};

// le llega el mail al musico
const cancelMusicMatchTemplate = (bandName: any, placeName: any, date: any) => {
	const htmlContent = `
    <h1>Fecha Suspendida</h1>
    <h2>Estimado usuario: ${bandName}, le enviamos este correo electrónico para avisarle que 
        su fecha en ${placeName} el ${date} ha sido cancelada :(
            No te desamines! puedes seguir aplicando para tocar en otros lugares,
            exitos!</h2>
            <h3>Te deseamos lo mejor en tus futuros eventos
            saludos,
            Rockstar Place <3</h3>
    `;
	return htmlContent;
};

// le llega el mail al place
const cancelPlaceMatchTemplate = (placeName: any, date: any, bandName: any) => {
	const htmlContent = `
    <h1>Fecha Cancelada Exitosamente</h1>
    <h2>Estimado usuario: ${placeName}, queremos informarle tu fecha programada
        para el ${date} con ${bandName} ha sido cancelada.</h2>
        <h3>Muchas gracias por utilizar nuestros servicios
            saludos,
            Rockstar Place <3</h3>
    `;
	return htmlContent;
};

module.exports = {
	registerTemplate,
	bandMatchTemplate,
	placeMatchTemplate,
	bannedTemplate,
	cancelMusicMatchTemplate,
	cancelPlaceMatchTemplate,
	newPendingDateTemplate,
	cancelPendingDate,
};
