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

function showVimeoVideo() {
  setTimeout(() => {
    document.querySelector("#game-container").style.display = "none";
    document.querySelector("#vimeo-video").style.display = "block";
  }, 8000);
}

window.onload = function () {
  isMobile() ? showMobileWarning() : initGame();

  window.document.addEventListener("game-finished", () => {
    showVimeoVideo();
  });
};
