// if (option == "all") {
//   for (var key in datas) {
//     words = { ...words, ...combineDatas(datas[key]) };
//     // console.log(Object.keys(words));
//   }
// } else words = combineDatas(datas[option]);
// // console.log(words);

/////////// map형 res /////////////////////////

// export const combineDatas = (data) => {
//   const csv = new CSV(data, { header: false }).parse();
//   const res = {};
//   // const cols = [[],[],[],[]];
//   // const headers = [];
//   // var  isHeader = true;

//   csv.forEach((row) => {
//     var i = 0;
//     var word = [];
//     row.forEach((cell, index) => {
//       if (i < 4) {
//         word.push(cell);
//         if (i == 0) res[cell] = { keywords: [], meaning: "" };
//         else res[word[0]].keywords = word;
//       } else res[word[0]].meaning = cell;
//       i++;
//     });
//   });

//   //빈값제거
//   delete res[""];
//   return res;
// };

// export const getQuiz = (datas) => (dispatch) => {
//   // return datas[Object.keys(datas)[Math.floor(Math.random()*Object.keys(datas).length)]]
//   var dataArray = Object.keys(datas);
//   var randomNumber = Math.random();
//   var dataIndex = Math.floor(randomNumber * dataArray.length);
//   var randomKey = dataArray[dataIndex];
//   // This will course this will return the value of the randomKey
//   // instead of a fresh random value
//   var randomValue = datas[randomKey];
// };
