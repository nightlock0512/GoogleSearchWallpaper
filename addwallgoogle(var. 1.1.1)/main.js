chrome.storage.local.get(["background-imag"], (value) => {
    var background = value["background-imag"];
    const root = document.querySelector(':root');
    root.style.setProperty("--background-url", `url(${background})`);
});

