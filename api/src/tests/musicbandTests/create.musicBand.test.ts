const { createMusicBand, deleteMusicBand } = require("../../db/models/musicBandModel");
const mongoose = require("mongoose")
const connect = require("../../db/db");

export let newMusicBand = {
  personInCharge: "Jonatan Pasto",
  name: "Los pica gelatinas",
  email: "soypicagelatina1@gmail.com",
  password: "contrasena",
  rating: 5,
  reviews: [],
  dates: [],
  banned: false,
  role: "musicband",
  description: "Esta es una descripcion hardcodeada",
  pendingDates: [],
  profilePicture: "",
};

let newMusicBand2 = {
  personInCharge: "Jonatan Pasto",
  name: "Los pica gelatinas",
  email: "soypicag212elatina@gmail.com",
  password: "contrasena",
  rating: 5,
  reviews: [],
  dates: [],
  banned: false,
  role: "musicband",
  description: "Esta es una descripcion hardcodeada",
  pendingDates: [],
  profilePicture: "",
};

let testReviews = {
  author: "esteEsUnCorreo@gmail.com",
  comment: "Increible",
  rating: 5
}

jest.setTimeout(20000);
let result: any;

beforeAll(async () => {
  await connect();
  result = await createMusicBand(newMusicBand);
});

afterAll(async () => {
  await deleteMusicBand(newMusicBand2.email);
  await deleteMusicBand(newMusicBand.email);
  await mongoose.connection.close();
});

test("Probando que el return sea un objeto", () => {
  expect(typeof result).toBe("object");
});
test("Probando crear una banda en la base de datos", () => {
  expect(result).toHaveProperty("name");
});
test("Probando que la nueva banda tenga un rating de 5", () => {
  expect(result).toHaveProperty("rating", 5);
});
test("Probando a crear otro usuario con el mismo correo", async () => {
  const newUser = await createMusicBand(newMusicBand);
  expect(newUser).toHaveProperty("error");
});
test("Probando a crear otro usuario", async () => {
  const newUser = await createMusicBand(newMusicBand2);
  expect(newUser).toHaveProperty("name");
});
