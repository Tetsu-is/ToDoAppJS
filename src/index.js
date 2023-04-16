
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
      alert("DONE!");
    })

    //button(DELETE)生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.addEventListener("click", () => {
      //押されたdeleteボタンの親タグ(div)を未完了リストから削除
      const deleteTarget = deleteButton.parentNode;
      document.getElementById("unfinished-area").removeChild(deleteTarget);
    })
    
    //divの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(doneButton);
    div.appendChild(deleteButton);

    //unfinishedに追加
    document.getElementById("unfinished-area").appendChild(div);
}

document.getElementById('add-button').addEventListener("click", () => onClickAdd());

/* const el = document.getElementById('add-button');
if (el) {
  el.addEventListener('click', onClickAdd, false);
} */