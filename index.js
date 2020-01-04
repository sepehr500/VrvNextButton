window.onload = () => {
  const style = document.createElement("style");
  style.innerText = `
.vjs-playback-rate::before {
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODk4LjMgODk4LjMiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQo8cG9seWdvbiBwb2ludHM9IjEyMC4yLDg4Mi41IDU1My42LDQ0OS4yIDEyMC4yLDE1LjggMCwxMzYgMzEzLjIsNDQ5LjIgMCw3NjIuMyIgZmlsbD0iI2ZmZiIvPg0KPHBvbHlnb24gcG9pbnRzPSIzNDQuNyw3NjIuMyA0NjQuOSw4ODIuNSA4OTguMyw0NDkuMiA0NjQuOSwxNS44IDM0NC43LDEzNiA2NTcuOSw0NDkuMiIgZmlsbD0iI2ZmZiIvPg0KPC9nPg0KPC9zdmc+DQo=);
    width: 24px !important;
    display: block;
    top: 12px !important;
    left: 13px !important;
    opacity: calc(var(--base-opacity) + var(--add-opacity));
}

.vjs-playback-rate {
	display: block !important;
    --base-opacity: 0.2;
    --add-opacity: 0;
}

.vjs-playback-rate-value {
	display: none;
}

.vjs-playback-rate:hover {
    --add-opacity: 0.1;
}
	`;
  document.body.appendChild(style);

  setInterval(() => {
    bind(document.querySelector(".vjs-playback-rate"));
  }, 2000);

  bind = button => {
    button.title = "Skip";
    button.addEventListener("click", () => {
      const video = document.querySelector("video");
      video.currentTime = video.duration - 0.001;
      video.play();
    });
  };
};
