// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// htmL要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
    // textを「ボタンをクリックしてください」から「しました」に変更
    text.textContent = 'ボタンをクリックしました';
});