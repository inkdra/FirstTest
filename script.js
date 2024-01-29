document.addEventListener("DOMContentLoaded", function() {
    // 今日の日付を取得
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ja-JP', options);

    // "今日の" 部分に日付を反映
    document.getElementById("todayDate").textContent = "今日のスケジュール - " + formattedDate;

    // 予定のテーブルを生成 (例としてダミーデータを表示)
    let scheduleTable = "<table><thead><tr><th>時間</th><th>予定</th></tr></thead><tbody>";

    // 例として9:00 AMと10:00 AMの予定を表示
    scheduleTable += "<tr><td>9:00 AM</td><td>ミーティング</td></tr>";
    scheduleTable += "<tr><td>10:00 AM</td><td>作業</td></tr>";

    // 他の時間も同様に追加

    scheduleTable += "</tbody></table>";

    // 生成したテーブルを scheduleTable の div に追加
    document.getElementById("scheduleTable").innerHTML = scheduleTable;
});
