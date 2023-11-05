chrome.storage.local.get(["setting"], (value) => {
    value = JSON.parse(value["setting"]);
    
    var img_index = Math.floor(value.length * Math.random());
    
    var background = value[img_index][0];
    var wrapcolor = value[img_index][1];

    const root = document.querySelector(':root');
    root.style.setProperty("--background-url", `url(${background})`);
    root.style.setProperty("--background-wrap-color", wrapcolor);
});
