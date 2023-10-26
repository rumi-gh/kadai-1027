import "./styles.css";

// アロー関数を使用
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);
  
  // // div生成
  // const div = document.createElement("div");
  // div.className = "list-row";
  // // console.log(div);

  // // liタグ生成
  // const li = document.createElement("li");
  // li.innerText = inputText;
  // // console.log(li);

  // // burron(完了)タグ生成
  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";
  // completeButton.addEventListener("click", () => {
  //   // alert("完了");

  //   // 押された完了ボタンの親タグ(div)を未完了リストから削除
  //   // const deleteTarget = completeButton.parentNode;
  //   // document.getElementById("incomplete-list").removeChild(deleteTarget);
  //   // ↑を共通化↓
  //   deleteFromIncompleteList(completeButton.parentNode);

  //   // 完了リストに追加する要素
  //   const addTarget = completeButton.parentNode;

  //   // TODO内容テキストを取得
  //   const text = addTarget.firstElementChild.innerText;
  //   //console.log(text);

  //   // div以下を初期化
  //   addTarget.textContent = null;
  //   //console.log(addTarget);

  //   // liタグ生成
  //   const li = document.createElement("li");
  //   li.innerText = text;
  //   // console.log(li);

  //   // buttonタグ生成
  //   const backButton = document.createElement("button");
  //   backButton.innerText = "戻す";
  //   // イベントを付与
  //   backButton.addEventListener("click", () => {
  //     // alert("戻す");
  //     // 押された戻すボタンの親タグ(div)を完了リストから削除
  //     const deleteTarget = backButton.parentNode;
  //     document.getElementById("complete-list").removeChild(deleteTarget);

  //     // テキスト取得
  //     const text = backButton.parentNode.firstElementChild.innerText;
  //     console.log(text);
  //   });

  //   // divタグの子要素に各要素を設定
  //   addTarget.appendChild(li);
  //   addTarget.appendChild(backButton);
  //   // console.log(addTarget);

  //   // 完了リストに追加
  //   document.getElementById("complete-list").appendChild(addTarget);
  // });
  // // console.log(completeButton);

  // // burron(削除)タグ生成
  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // deleteButton.addEventListener("click", () => {
  //   // alert("削除");
  //   // 押された削除ボタンの親タグ(div)を未完了リストから削除
  //   // const deleteTarget = deleteButton.parentNode;
  //   // // console.log(deleteTarget);
  //   // document.getElementById("incomplete-list").removeChild(deleteTarget);
  //   // ↑を共通化↓
  //   deleteFromIncompleteList(deleteButton.parentNode);
  // });
  // // console.log(deleteButton);
  
  // // divタグの子要素の各要素を設定
  // div.appendChild(li);
  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);
  // //console.log(div);

  // // 未完了リストに追加
  // document.getElementById("incomplete-list").appendChild(div);

  // ↑を共通化↓
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // burron(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {

    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // console.log(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // burron(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  
  // divタグの子要素の各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());