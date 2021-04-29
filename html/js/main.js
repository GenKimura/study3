// グローバル変数
let path = [];


// 検索する名前を取得
function getValue () {
    return document.getElementById("name").value
}

// open()を読み込み （非同期処理）
async function open() {
    path = await eel.open()()
    document.getElementById("fileName").append(path[1]);
    return path
}

// kimetsuSearch(name)を読み込み （非同期処理）
async function kimetsuSearch(name, path) {
    const searchResult = await eel.kimetsuSearch(name, path)()
    console.log(searchResult)
    document.getElementById("result").append(searchResult + '\n');
    return searchResult
}    

// 「選択」ボタンを押してファイルパスを取得
document.getElementById("select").onclick = () => {
    path = open()
    console.log(path)
    return path
}

// 「検索」ボタンで名前記入されていればkimetsuSearchを実行
document.getElementById("search").onclick = () => {
        
        const searchItem = getValue()
        
        if (path == ''){
            alert('検索するファイルを選択してください\n');
        }　else {
            if (searchItem == '') {
                alert('検索する名前を入力してください\n');
            }　else {
                document.getElementById("result").append(searchItem + "を検索します\n");
                console.log(path[0])
                kimetsuSearch(searchItem, path[0]);
            }
        }

    }

// 「クリア」ボタンを押すとリロード
document.getElementById("clear").onclick = () => {
    location.reload();
}
