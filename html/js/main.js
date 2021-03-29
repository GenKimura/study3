// 検索する名前を取得
function getValue () {
    return document.getElementById("name").value
}

// kimetsuSearch(name)を読み込み （非同期処理）
async function openFiles() {
    const path = await eel.openFiles()()
    return path
}

// kimetsuSearch(name)を読み込み （非同期処理）
async function kimetsuSearch(name, path) {
    const searchResult = await eel.kimetsuSearch(name, path)()
    console.log(searchResult)
    document.getElementById("result").append(searchResult + '\n');
    return searchResult
}

// // 「選択」ボタンを押してファイルパスを取得
// document.getElementById("select").onclick = () => {
//     const path = openFiles()
//     console.log(path)
// }

// 「検索」ボタンで名前記入されていればkimetsuSearchを実行
document.getElementById("search").onclick = () => {
        
        const searchItem = getValue()
        
        if (searchItem == '') {
            alert('検索する名前を入力してください\n');
        }　else {
            document.getElementById("result").append(searchItem + "を検索します\n");
            kimetsuSearch(searchItem, path);
        }
    }

// 「クリア」ボタンを押すとリロード
document.getElementById("clear").onclick = () => {
    location.reload();
}
