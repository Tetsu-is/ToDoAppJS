
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";
    console.log(div);

    //li生成
    const li = document.createElement("li");
    li.innerText = inputText;

    //button(DONE)生成
    const doneButton = document.createElement("button");
    doneButton.innerText = "DONE";
    doneButton.addEventListener("click", () => {
      //完了リストに追加する要素
      const addTarget = doneButton.parentNode;

      //TODOテキストを取得
      const text  =addTarget.firstElementChild.innerText;

      //div以下を初期化
      addTarget.textContent = null;
      console.log(addTarget);

    })

    //button(DELETE)生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", () => {
      //押されたdeleteボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
    })
    
    //divの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);

    //未完了リストから指定の要素を削除
    const deleteFromIncompleteList = (target) => {
      const deleteTarget = deleteButton.parentNode;
      document.getElementById("incomplete-list").removeChild(target);
    } 
}

document.getElementById('add-button').addEventListener("click", () => onClickAdd());