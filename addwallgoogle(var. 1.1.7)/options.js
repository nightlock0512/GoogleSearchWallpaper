// document.body.onload = () => {
//     chrome.storage.local.get(["background-imag", "background-wrap-color"], (data) => {
//         url.value = data["background-imag"].join(',');
//         color.value = data["background-wrap-color"].substr(0, 7);
//         opacity.value = parseInt(data["background-wrap-color"].substr(7, 9), 16);
//     })
// }

// document.getElementById("set").onclick = () => {
//     chrome.storage.local.set(
//         {
//             "background-imag":
//                 url.value.split(','),
//             "background-wrap-color":
//                 color.value + Number(opacity.value).toString(16)
//         },
//         () => { alert("保存しました。") }
//     );
// }


const urls = document.querySelector(".urls");
const add = document.querySelector(".add");
const save_btn = document.getElementById("save");

add.onclick = () => {
    addItem();
}

function addItem(url, color) {
    const item = document.createElement("tr");
    item.classList.add("item");
    item.innerHTML = `
    <td><input type="text" class="url"></td>
    <td><input type="color" class="color"></td>
    <td><span class="opacity_value">127</span><input type="range" class="opacity" max="255" min="0" value="127"></td>
    <td><button class="remove">×</button></td>`;

    const url_elm = item.querySelector(".url");
    const color_elm = item.querySelector(".color");
    const opacity_value = item.querySelector(".opacity_value");
    const opacity = item.querySelector(".opacity");
    const remove_btn = item.querySelector(".remove");

    if (url != null) {
        url_elm.value = url;
    }
    if (color != null) {
        opacity.value = parseInt(color.slice(-2), 16);
        opacity_value.innerText = ("000" + opacity.value).slice(-3);
        color_elm.value = color.substr(0, 7);
    }

    opacity.oninput = () => {
        opacity_value.innerText = ("000" + opacity.value).slice(-3);
    }

    remove_btn.onclick = () => {
        item.remove();
    };
    urls.appendChild(item);
}

save_btn.onclick = save;

function save() {
    const item = document.querySelectorAll(".item");
    var list = [];
    item.forEach(element => {
        list.push([element.querySelector(".url").value, element.querySelector(".color").value + Number(element.querySelector(".opacity").value).toString(16)]);
    });
    list = JSON.stringify(list);

    chrome.storage.local.set(
        {
            "setting": list
        },
        () => { alert("保存しました。") }
    );
}

document.body.onload = load;

function load() {
    chrome.storage.local.get(["setting"], (data) => {
        if (data == undefined) return false;
        data = JSON.parse(data["setting"]);
        data.forEach((item) => {
            addItem(item[0], item[1]);
        })
    })
}