document.getElementById("set").onclick = () => {
    chrome.storage.local.set(
        {
            "background-imag":
                document.getElementById("url").value
        },
        () => {}
    );
}