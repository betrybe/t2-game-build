/* src: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser */
function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function initGame() {
  document.querySelector("#game-container").style.display = "block";
  UnityLoader.instantiate("game-container", "public/Build/GAME.json");
}

function showMobileWarning() {
  document.querySelector("#mobile-warning").style.display = "block";
}

window.onload = function () {
  isMobile() ? showMobileWarning() : initGame();
};
