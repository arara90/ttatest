import React from "react";
import CSV from "comma-separated-values";
import datas from "../../redux/actions/datas/datas";

//+https://jsfiddle.net/mblase75/dcqxr/ 도 보기
function Upload() {
  const combineDatas = (data) => {
    const csv = new CSV(data, { header: false }).parse();
    const res = {};
    // const cols = [[],[],[],[]];
    // const headers = [];
    // var  isHeader = true;

    csv.forEach((row) => {
      var i = 0;
      var word = [];
      row.forEach((cell, index) => {
        if (i < 4) {
          word.push(cell);
          if (i == 0) res[cell] = { keywords: [], meaning: "" };
          else res[word[0]].keywords = word;
        } else res[word[0]].meaning = cell;
        i++;
      });
    });

    //빈값제거
    delete res[""];
    return res;
  };

  const getData = () => {
    var words = {};
    // if(isAll) for (var key in datas) words["all"] = combineDatas(datas[key]);
    // else for (var key in datas) words[key] = combineDatas(datas[key]);
    for (var key in datas) words[key] = combineDatas(datas[key]);
    console.log(words);
    return words;
  };

  return (
    <div>
      <button
        style={{ width: "20px", height: "30px" }}
        className="btn1"
        onClick={getData}
      >
        11
      </button>
    </div>
  );
}

export default Upload;

//     row.forEach((cell, index) => {
//         if(isHeader) headers.push(cell)
//         else{
//             if( i < 4 ){
//                 word.push(cell)
//                 if(i==0) cols[0].push(cell)
//                 if(i==3)cols[1].push(word)
//             }else{
//                 cols[2].push(cell)
//             }
//         }
//         i++;
//     });

//     if(isHeader) isHeader = false;
// });

// var datas ={
//     korWords: cols[0],
//     words: cols[1],
//     means: cols[2],
// }
// console.log(datas, headers)

//Header 있을때
// row.forEach((cell, index) => {
//         if(isHeader) headers.push(cell) //header 저장
//         else{
//             if( i < 4 ){
//                 word.push(cell)
//                 if(i==0) res[cell] = {keywords: [], meaning: ""}
//                 else res[word[0]].keywords = word;
//             }
//             else res[word[0]].meaning = cell;
//         }
//         i++;
//     });

//     if(isHeader) isHeader = false;
// });
