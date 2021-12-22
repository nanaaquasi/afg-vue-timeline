import { randomDate } from "./utils";

export const actions = ["added", "started", "requested", "updated", "joined"];
export let activities = [
  {
    id: 1,
    initiator: "John Doe",
    date: randomDate(new Date(2021, 0, 1), new Date()),
    action: "added",
    activity: "new project",
    user: "",
    position: "",
  },
  {
    id: 2,
    initiator: "Nana Aquasi",
    date: randomDate(new Date(2021, 0, 1), new Date()),
    action: "updated",
    activity: "project 567",
    user: "",
    position: "",
  },
  {
    id: 3,
    initiator: "Mary Ann",
    date: randomDate(new Date(2021, 0, 1), new Date()),
    action: "joined",
    activity: "mission",
    user: "",
    position: "",
  },
  {
    id: 4,
    initiator: "Peter Parker",
    date: randomDate(new Date(2021, 0, 1), new Date()),
    action: "started",
    activity: "web development",
    user: "",
    position: "",
  },
  {
    id: 5,
    initiator: "Clint Dev",
    date: randomDate(new Date(2021, 0, 1), new Date()),
    action: "requested",
    activity: "to join mission as",
    user: "John Doe",
    position: "Software Engineer",
  },
];
