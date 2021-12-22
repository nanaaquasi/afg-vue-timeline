import { randomDate } from "./utils";

export const iconSet = {
  "icon-add":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
  "icon-user":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  "icon-user-check":
    '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#cccccc"><path d="M69.46154,1.03365c-19.94952,0 -35.97115,13.69592 -35.97115,39.89904c0,17.10697 6.82212,34.54988 17.15865,45.27404c4.03125,10.72416 -3.23017,14.72957 -4.75481,15.29808c-20.87981,7.64904 -45.27404,21.55169 -45.27404,35.35096v5.16827c0,18.8125 35.81611,23.15385 69.04808,23.15385c5.63342,0 11.39603,-0.12921 16.95192,-0.41346c-2.89423,-2.42908 -6.77043,-5.0649 -11.99038,-7.44231c-7.13221,-3.23017 -10.10397,-8.24339 -11.37019,-11.99038c-2.60997,-7.80408 0.4393,-14.65204 1.44712,-16.53846c0.20673,-0.41346 0.56851,-0.64603 0.82692,-1.03365l4.96154,-7.44231c2.81671,-4.26382 8.68269,-8.68269 17.15865,-8.68269c3.41106,0 6.95132,0.82692 10.54327,2.27404c4.23798,1.70553 8.19171,4.36719 11.57692,7.23558c1.96394,-2.6875 4.36719,-5.71094 7.02885,-8.68269c-7.67488,-4.39303 -16.59014,-8.11418 -25.01442,-10.95673c-1.00781,-0.33594 -7.23558,-3.33353 -3.30769,-15.50481c10.28486,-10.75 16.95192,-28.03786 16.95192,-45.06731c0,-26.20312 -16.02163,-39.89904 -35.97115,-39.89904zM171.37981,91.375c-45.3774,16.46094 -59.53846,51.88942 -59.53846,51.88942c0,0 -8.65685,-13.15324 -18.60577,-17.15865c-8.65685,-3.48858 -11.78365,1.65385 -11.78365,1.65385l-4.96154,7.44231c0,0 -3.66947,6.77044 3.72115,10.12981c19.07092,8.68269 24.05829,19.84615 26.875,23.36058c2.89423,3.61779 7.7524,3.48858 9.92308,-0.82692c7.67488,-15.16887 16.20253,-48.01322 54.37019,-76.49038z"></path></g></g></svg>',
  "icon-play":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
  "icon-edit":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>',
};

export const actions = ["added", "started", "requested", "updated", "joined"];
export let activities = [
  {
    id: 1,
    initiator: "John Doe",
    date: randomDate(new Date(2012, 0, 1), new Date()),
    action: "added",
    activity: "a new project",
    user: "",
    position: "",
  },
  {
    id: 2,
    initiator: "Nana Aquasi",
    date: randomDate(new Date(2012, 0, 1), new Date()),
    action: "updated",
    activity: "project 567 details",
    user: "",
    position: "",
  },
  {
    id: 3,
    initiator: "Mary Ann",
    date: randomDate(new Date(2012, 0, 1), new Date()),
    action: "joined",
    activity: "mission",
    user: "",
    position: "",
  },
  {
    id: 4,
    initiator: "Peter Parker",
    date: randomDate(new Date(2012, 0, 1), new Date()),
    action: "started",
    activity: "a new project",
    user: "",
    position: "",
  },
  {
    id: 5,
    initiator: "Clint Dev",
    date: randomDate(new Date(2012, 0, 1), new Date()),
    action: "requested",
    activity: "to join mission as",
    user: "John Doe",
    position: "Software Engineer",
  },
];
