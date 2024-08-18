// Pages

const mainPage = document.getElementById("main-page");
const broadcastingRoom = document.getElementById("broadcasting-room");

// Buttons

const beginBroadcast = document.getElementById("begin-broadcast");
const returnFromBroadcast = document.getElementById("return-from-bd");

beginBroadcast.onclick = function () {
  fadePage(mainPage, broadcastingRoom);
}

returnFromBroadcast.onclick = function () {
  fadePage(broadcastingRoom, mainPage);
}