export interface reviews {
	author: string;
	comment: string;
	rating: number;
}

export interface dates {
	musicBand: string;
	date: Date;
}
export interface available {
	isAvailable: boolean;
	date: Date;
}

export enum Roles {
	ADMIN = "admin",
	MUSICBAND = "musicband",
	PLACE = "place",
}

export type placeInterface = {
	capacity: string;
	name: string;
	email: string;
	password: string;
	hasSound: boolean;
	city: string;
	adress: string;
	rating: number;
	description: string;
	reviews: reviews[];
	dates: dates[];
	availableDates: available[];
	socialMedia: socialMedia;
	pendingDates: dates[];
	profilePicture: string;
	banned: boolean;
	role: Roles;
	phoneNumber: string;
};

export type socialMedia = {
	instagram: string;
};
