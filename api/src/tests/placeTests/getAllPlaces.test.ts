const { createPlace, deletePlace, getAllPlaces } = require("../../db/models/placeModel")
const mongoose = require("mongoose")
const connect = require("../../db/db");

export const placeTest = {
  capacity: "200",
  name: "Local de prueba",
  email: "soyunTest8@gmail.com",
  password: "estaesunacontrasena",
  hasSound: true,
  city: "Bogota",
  adress: "Avenida las americas",
  description: "Esta es una descripción",
  reviews:[],
  dates:[],
  availableDates:[],
  pendingDates:[],
  profilePicture: "not-working",
};

jest.setTimeout(60000*2);

let place:any;
let allPlaces:any;
beforeAll(async () => {
  await connect();
  place = await createPlace(placeTest);
  allPlaces = await getAllPlaces();
});

afterAll(async () => {
  await deletePlace(placeTest.email);
  await mongoose.connection.close();
});

test("place should be created'p1", () => {
  expect(typeof place).toBe("object");
});
test("place should be created p2", () => {
  expect(place).toHaveProperty("city");
});
test("getAllBands should return an array of places", () => {
  expect(Array.isArray(allPlaces)).toBe(true);
});
test("allBands[0] should to have property email", () => {
  expect(allPlaces[0]).toHaveProperty("email");
});
test("allBands[0] should to have property name",() => {
  expect(allPlaces[0]).toHaveProperty("name");
});