export interface placeReviews {
	author: string;
	comment: string;
	rating: number;
}

export interface placeDates {
	date: Date;
	email: string;
	musicBand: string;
}
export interface placeAvailable {
	isAvailable: boolean;
	date: Date;
}

export enum placeRoles {
	ADMIN = "admin",
	MUSICBAND = "musicband",
	PLACE = "place",
}

export type placeInterface = {
	personInCharge: string;
	capacity: string;
	name: string;
	email: string;
	password: string;
	hasSound: boolean;
	city: string;
	adress: string;
	rating: number;
	description: string;
	reviews: placeReviews[];
	dates: placeDates[];
	availableDates: placeAvailable[];
	socialMedia: placeSocialMedia;
	pendingDates: placeDates[];
	profilePicture: string;
	banned: boolean;
	role: placeRoles;
	phoneNumber: string;
	coords: coords;
};

export type placeSocialMedia = {
	instagram: string;
};

export type suscription = {
	isSuscribed: boolean;
	startDate: Date;
	payment_id: string;
};

export type coords = {
	lat: string;
	lng: string;
};
