export interface reviews {
	author: string;
	comment: string;
	rating: number;
}
export interface dates {
	author: string;
	place: string;
	date: Date;
}
export enum Roles {
	ADMIN = "admin",
	MUSICBAND = "musicband",
	PLACE = "place",
}

export type musicBandInterface = {
	personInCharge: string;
	name: string;
	email: string;
	password: string;
	rating: number;
	reviews: reviews[];
	dates: dates[];
	banned: boolean;
	role: Roles;
	socialMedia: any;
	description: string;
	pendingDates: dates[];
	profilePicture: string;
};
