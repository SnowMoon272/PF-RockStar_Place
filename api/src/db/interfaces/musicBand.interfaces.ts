export interface musicReviews {
	author: string;
	comment: string;
	rating: number;
}
export interface musicDates {
	author: string;
	place: string;
	date: Date;
}
export enum musicRoles {
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
	reviews: musicReviews[];
	dates: musicDates[];
	banned: boolean;
	role: musicRoles;
	socialMedia: musicSocialMedia;
	description: string;
	pendingDates: musicDates[];
	profilePicture: string;
	phoneNumber: string;
};

export type musicSocialMedia = {
	instagram: string;
	spotify: string;
	youtube: string;
};
