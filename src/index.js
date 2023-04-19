
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

    //button(完了)生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      //押された完了ボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);

    })

    //button(削除)生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押されたdeleteボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
    })
    
    //divの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
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