document.body.onload = () => {
    chrome.storage.local.get(["background-imag"],(img)=>{
        document.getElementById("url").value = img["background-imag"].join(',');
        console.log(img["background-imag"].join(','));
    })
}

document.getElementById("set").onclick = () => {
    chrome.storage.local.set(
        {
            "background-imag":
                document.getElementById("url").value.split(',')
        },
        () => {alert("保存しました。")}
    );
}