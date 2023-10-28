// 配列の宣言と値の代入を行う
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// 配列の値の出力をする
console.log(holidays);

// 変数holidaysの値が0以外である間、変数numの値を出力し続ける
while(holidays !== 0){
    holidays = Math.floor(Math.random() * 5);
}

// 1〜15までの数値を順番に出力する
for(let i = 1; i <= 15; i++) {
    console.log(i);
}


