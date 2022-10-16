chrome.storage.local.get(["background-imag"], (value) => {
    var img_index = Math.floor(value["background-imag"].length * Math.random());
    var background = value["background-imag"][img_index];
    console.log(img_index,background,value["background-imag"]);
    const root = document.querySelector(':root');
    root.style.setProperty("--background-url", `url(${background})`);
});

