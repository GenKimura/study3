console.log("hello world")

function getValue () {
    return document.getElementById("name").value
}

document.getElementById("search").onclick = () => {
    document.getElementById("result").append(getValue() + "\n");
}

