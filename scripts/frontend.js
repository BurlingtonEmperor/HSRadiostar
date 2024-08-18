// Pages

const mainPage = document.getElementById("main-page");
const broadcastingRoom = document.getElementById("broadcasting-room");
const broadcastingFinish = document.getElementById("broadcasting-finish");

// Form values

const playlistLink = document.getElementById("playlist-link");
const imageLink = document.getElementById("imagelist");
const graphicSwitchTime = document.getElementById("graphic-switch-time");

// DOM CHANGE 

const broadcastError = document.getElementById("broadcast-error");
graphicSwitchTime.value = "60";

// Buttons

const beginBroadcast = document.getElementById("begin-broadcast");
const returnFromBroadcast = document.getElementById("return-from-bd");

const letsBroadcast = document.getElementById("lets-broadcast");

beginBroadcast.onclick = function () {
  fadePage(mainPage, broadcastingRoom);
}

returnFromBroadcast.onclick = function () {
  fadePage(broadcastingRoom, mainPage);
}

letsBroadcast.onclick = function () {
  if (playlistLink.value == "") {
    broadcastError.innerText = "Required field was not filled out";
  }

  else {
    broadcastError.innerText = "";
    if (graphicSwitchTime.value == "") {
      // Do nothing
    }

    else {
      let imagelinkArray = imageLink.split(",");
      let stringifiedArray = JSON.stringify(imagelinkArray);
      let encodedArray = window.btoa(stringifiedArray);

      let finalCoded = encodedArray + "*(#//" + String(graphicSwitchTime);

      fadePage(broadcastingRoom, broadcastingFinish);
    }
  }
}