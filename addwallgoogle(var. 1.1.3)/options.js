document.body.onload = () => {
    chrome.storage.local.get(["background-imag"], (img) => {
        document.getElementById("url").value = img["background-imag"].join(',');
        console.log(img["background-imag"].join(','));
    })
}

document.getElementById("set").onclick = () => {
    chrome.storage.local.set(
        {
            "background-imag":
                document.getElementById("url").value.split(','),
            "background-wrap-color":
                document.getElementById("color").value + Number(document.getElementById("opacity").value).toString(16)
        },
        () => { alert("保存しました。") }
    );
}

setInterval(() => {
    document.getElementById("colorvalue").innerText = document.getElementById("color").value;
    document.getElementById("opacityvalue").innerText = document.getElementById("opacity").value;
}, 10);


