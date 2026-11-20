const musicCorner = document.querySelector(".music-corner");

if (musicCorner) {
  const toggle = musicCorner.querySelector(".music-toggle");
  const player = musicCorner.querySelector(".music-player");
  const template = musicCorner.querySelector("template");
  const playlist = musicCorner.querySelector(".music-playlist");
  const tracks = playlist.querySelectorAll(".music-track");
  const currentLine = musicCorner.querySelector(".music-current");
  const source = musicCorner.querySelector(".music-source");
  let currentTrack = playlist.querySelector('[aria-pressed="true"]');

  function openPlayer() {
    const frame = template.content.querySelector("iframe").cloneNode(true);
    const url = new URL(frame.src);
    url.searchParams.set("cid", currentTrack.dataset.cid);
    frame.src = url;
    player.replaceChildren(frame);
    player.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "关闭播放器");
  }

  function closePlayer() {
    player.replaceChildren();
    player.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开播放器");
  }

  toggle.addEventListener("click", () => {
    if (player.hidden) {
      openPlayer();
    } else {
      closePlayer();
    }
  });

  for (const track of tracks) {
    track.addEventListener("click", () => {
      if (track === currentTrack && !player.hidden) return;

      currentTrack.setAttribute("aria-pressed", "false");
      currentTrack = track;
      currentTrack.setAttribute("aria-pressed", "true");
      currentLine.textContent = currentTrack.querySelector("span").textContent;

      const url = new URL(source.href);
      url.searchParams.set("p", currentTrack.dataset.part);
      source.href = url;
      openPlayer();
    });
  }

  toggle.hidden = false;
  playlist.hidden = false;
}
