import {
	musicReviews,
	musicDates,
	musicRoles,
	musicBandInterface,
} from "../interfaces/musicBand.interfaces";

import {
	placeReviews,
	placeDates,
	placeAvailable,
	placeInterface,
	placeRoles,
} from "../interfaces/place.interfaces";

const { model } = require("mongoose");

const musicBandSchema = require("../schemas/musicBandSchema");

const musicBand = model("musicband", musicBandSchema);

const placeSchemaModel = require("../schemas/placeSchema");

const place = model("place", placeSchemaModel);
