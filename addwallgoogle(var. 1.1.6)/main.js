chrome.storage.local.get(["background-imag","background-wrap-color"], (value) => {
    var img_index = Math.floor(value["background-imag"].length * Math.random());
    var background = value["background-imag"][img_index];
    var wrapcolor = value["background-wrap-color"];
    const root = document.querySelector(':root');
    root.style.setProperty("--background-url", `url(${background})`);
    root.style.setProperty("--background-wrap-color", wrapcolor);

    
});