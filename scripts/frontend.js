// Pages

const mainPage = document.getElementById("main-page");
const broadcastingRoom = document.getElementById("broadcasting-room");
const broadcastingFinish = document.getElementById("broadcasting-finish");
const stationFinder = document.getElementById("station-finder");
const quicktimePlayer = document.getElementById("quicktime-player");

// Form values

const playlistLink = document.getElementById("playlist-link");
const imageLink = document.getElementById("imagelist");
const graphicSwitchTime = document.getElementById("graphic-switch-time");

const stationLink = document.getElementById("station-link");
const bdCode = document.getElementById("bd-code");

// DOM CHANGE 

let codeStorage = "";
const broadcastError = document.getElementById("broadcast-error");
graphicSwitchTime.value = "60";
const copyText = document.getElementById("copy-text");
const copyTexter = document.getElementById("copy-texter");
const stationError = document.getElementById("station-error");
const playerPlace = document.getElementById("player-place");

// Buttons

const beginBroadcast = document.getElementById("begin-broadcast");
const returnFromBroadcast = document.getElementById("return-from-bd");

const findStation = document.getElementById("find-station");

const letsBroadcast = document.getElementById("lets-broadcast");
const letsRock = document.getElementById("lets-rock");

const tuneIn = document.getElementById("tune-in");
const returnFromBF = document.getElementById("return-from-bf");

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
      let imagelinkArray = imageLink.value.split(",");
      let stringifiedArray = JSON.stringify(imagelinkArray);
      let encodedArray = window.btoa(stringifiedArray);

      let finalCoded = encodedArray + "*(#//" + String(graphicSwitchTime.value);
      codeStorage = finalCoded;

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

  fadePage(broadcastingFinish, stationFinder);

  setTimeout(function () {
    copyTexter.innerText = "";
    playlistLink.value = "";
    imageLink.value = "";
    graphicSwitchTime.value = "60";
  }, 500);
}

returnFromBF.onclick = function () {
  fadePage(stationFinder, mainPage);
}

findStation.onclick = function () {
  fadePage(mainPage, stationFinder);
}

tuneIn.onclick = function () {
  if (bdCode.value == "" || stationLink.value == "") {
    stationError.innerText = "Required fields were not filled in.";
  }

  else {
    if (bdCode.value.includes("*(#//")) {
      let broadcastCodeArray = bdCode.value.split("*(#//");

      if (broadcastCodeArray[0] == "") {
        // do nothing
      }

      else {
        let realArray = window.atob(broadcastCodeArray[0]);
        let actualRealArray = JSON.parse(realArray);
        let carouselOfThings = 0;

        setInterval(function () {
          if (carouselOfThings == (actualRealArray.length - 1)) {
            carouselOfThings = 0;
          }

          if (actualRealArray.length < 2) {
            // do nothing
          }

          else {
            carouselOfThings += 1;
          }
          document.body.style.backgroundImage = "url('" + actualRealArray[carouselOfThings] + "')";
        }, parseInt(broadcastCodeArray[1]) * 1000);

        if (stationLink.value.includes("<iframe")) {
          $("#player-place").append(String(stationLink.value));
          $("iframe").hide();
          fadePage(stationFinder, quicktimePlayer);
          $("iframe").show();
          setTimeout(function () {
            // $(".playButton").click();
            // $("path").click();
            // $("circle").click();
            // $(".sc-media").click();
            $(".playButton__play").click();
            $("iframe").hide();

            let items = document.querySelectorAll(".playButton__play");
            for (let i = 0; i < items.length; i++) {
              items[i].click();
            }
          }, 700);
        }

        else {
          stationError.innerText = "Error: Not a valid embed code.";
        }
      }
    }

    else {
      stationError.innerText = "Error: Invalid broadcast code";
    }
  }
}