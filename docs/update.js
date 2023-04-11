
  // 更新情報のリストを取得する
  var updates = document.querySelectorAll("#updates li");

  // 最新の3つの更新情報を抽出する
  var latestUpdates = Array.prototype.slice.call(updates, 0, 3);

  // トップページに更新情報を表示する
  var updatesContainer = document.getElementById("latest-updates");
  latestUpdates.forEach(function(update) {
    updatesContainer.innerHTML += update.outerHTML;
  });

