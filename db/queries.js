import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils.js/data-utils";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}
async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}
async function createUser(user) {
  return await userModel.create(user);
}
async function foundUserByCredentials(credentials) {
  const user= await userModel.findOne(credentials).lean();
  return replaceMongoIdInObject(user);
}
export { getAllEvents, getEventById, createUser, foundUserByCredentials };
