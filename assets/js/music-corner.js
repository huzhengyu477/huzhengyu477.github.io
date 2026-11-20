const musicToggle = document.querySelector(".music-toggle");
const musicPlayer = document.getElementById("music-player");
const musicTemplate = document.getElementById("music-player-template");

if (musicToggle && musicPlayer && musicTemplate) {
  musicToggle.hidden = false;

  musicToggle.addEventListener("click", () => {
    const opening = musicPlayer.hidden;

    if (opening) {
      musicPlayer.appendChild(musicTemplate.content.cloneNode(true));
    } else {
      musicPlayer.replaceChildren();
    }

    musicPlayer.hidden = !opening;
    musicToggle.setAttribute("aria-expanded", String(opening));
    musicToggle.setAttribute("aria-label", opening ? "关闭播放器" : "打开播放器");
  });
}
