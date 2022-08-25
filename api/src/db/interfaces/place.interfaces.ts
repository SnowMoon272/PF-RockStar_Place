export interface placeReviews {
	author: string;
	comment: string;
	rating: number;
}

export interface placeDates {
	musicBand: string;
	date: Date;
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
};

export type placeSocialMedia = {
	instagram: string;
};
