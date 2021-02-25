array = [
    document.getElementsByClassName("member-in-about-us-1")[0],
    document.getElementsByClassName("member-in-about-us-2")[0],
    document.getElementsByClassName("member-in-about-us-3")[0],
    document.getElementsByClassName("member-in-about-us-4")[0]
];

document.getElementsByClassName("next-button")[0].onclick = function () {
    nextImg();
    applySort();
}

document.getElementsByClassName("prev-button")[0].onclick = function () {
    prevImg();
    applySort();
}

function nextImg() {
    let temp1 = array[0];

    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            array[array.length - 1] = temp1;
            break;
        }
        array[i] = array[i + 1];
    }
}

function prevImg() {
    let temp4 = array[array.length - 1];

    for (let i = array.length - 1; i >= 0; i--) {
        if (i === 0) {
            array[0] = temp4;
            break;
        }
        array[i] = array[i - 1];
    }
}

function applySort() {
    for (let i = 0; i < array.length; i++) {

        let stringBuilder = '<div class="member-in-about-us-' + (i + 1) + '">';
        for (let j = 0; j < array[i].children.length; j++) {
            stringBuilder += array[i].children[j].outerHTML;
        }
        stringBuilder += '</div>';

        document.getElementsByClassName("member-in-about-us-" + (i + 1))[0].outerHTML = stringBuilder;
    }
}