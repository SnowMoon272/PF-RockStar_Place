const { createMusicBand, deleteMusicBand, banHandler, getMusicBand } = require("../../db/models/musicBandModel");
const mongoose = require("mongoose")
const connect = require("../../db/db");

export let musicBandTest = {
  personInCharge: "Sebastian",
  name: "Test de banda o músico",
  email: "soyunTest3@gmail.com",
  password: "test",
  rating: 5,
  reviews: [],
  dates: [],
  banned: false,
  role: "musicband",
  description: "Esta es una descripcion de un test",
  pendingDates: [],
  profilePicture: "",
};

let band : any;

beforeAll( async () => {
  await connect();
  band = await createMusicBand(musicBandTest);
});

afterAll(async () => {
  await deleteMusicBand(musicBandTest.email);
  await mongoose.connection.close();
});

test("band should be created'p1", () => {
  expect(typeof band).toBe("object");
});
test("band should be created p2", () => {
  expect(band).toHaveProperty("personInCharge");
});
test("property ban in band should to be false", async () => {
  const musicBand = await getMusicBand(musicBandTest.email);
  expect(musicBand.banned).toBeFalsy();
});
test("band should be banned", async () => {
  await banHandler(musicBandTest.email);
  const musicBand = await getMusicBand(musicBandTest.email);
  expect(musicBand.banned).toBeTruthy();
});
test("band should be unbanned", async () => {
  await banHandler(musicBandTest.email);
  const musicBand = await getMusicBand(musicBandTest.email);
  expect(musicBand.banned).toBeFalsy();
});
