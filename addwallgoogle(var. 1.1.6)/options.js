const url = document.getElementById("url");
const color = document.getElementById("color");
const opacity = document.getElementById("opacity");

document.body.onload = () => {
    chrome.storage.local.get(["background-imag", "background-wrap-color"], (data) => {
        url.value = data["background-imag"].join(',');
        color.value = data["background-wrap-color"].substr(0, 7);
        opacity.value = parseInt(data["background-wrap-color"].substr(7, 9), 16);
    })
}

document.getElementById("set").onclick = () => {
    chrome.storage.local.set(
        {
            "background-imag":
                url.value.split(','),
            "background-wrap-color":
                color.value + Number(opacity.value).toString(16)
        },
        () => { alert("保存しました。") }
    );
}

setInterval(() => {
    document.getElementById("colorvalue").innerText = color.value;
    document.getElementById("opacityvalue").innerText = opacity.value;
}, 100);


