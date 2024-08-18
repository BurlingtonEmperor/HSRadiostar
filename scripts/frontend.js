// Pages

const mainPage = document.getElementById("main-page");
const broadcastingRoom = document.getElementById("broadcasting-room");
const broadcastingFinish = document.getElementById("broadcasting-finish");
const stationFinder = document.getElementById("station-finder");

// Form values

const playlistLink = document.getElementById("playlist-link");
const imageLink = document.getElementById("imagelist");
const graphicSwitchTime = document.getElementById("graphic-switch-time");

// DOM CHANGE 

const broadcastError = document.getElementById("broadcast-error");
graphicSwitchTime.value = "60";
const copyText = document.getElementById("copy-text");
const copyTexter = document.getElementById("copy-texter");

// Buttons

const beginBroadcast = document.getElementById("begin-broadcast");
const returnFromBroadcast = document.getElementById("return-from-bd");

const findStation = document.getElementById("find-station");

const letsBroadcast = document.getElementById("lets-broadcast");
const letsRock = document.getElementById("lets-rock");

const tuneIn = document.getElementById("tune-in");

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
      let imagelinkArray = imageLink.innerText.split(",");
      let stringifiedArray = JSON.stringify(imagelinkArray);
      let encodedArray = window.btoa(stringifiedArray);

      let finalCoded = encodedArray + "*(#//" + String(graphicSwitchTime.value);

      fadePage(broadcastingRoom, broadcastingFinish);
      copyTexter.innerText = finalCoded;
      copyText.value = finalCoded;
    }
  }
}

letsRock.onclick = function () {
  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);
  copyTexter.innerText += " (COPIED!)";

  fadePage(broadcastingFinish, mainPage);

  setTimeout(function () {
    copyTexter.innerText = "";
    playlistLink.value = "";
    imageLink.value = "";
    graphicSwitchTime.value = "60";
  }, 500);
}

findStation.onclick = function () {
  fadePage(mainPage, stationFinder);
}