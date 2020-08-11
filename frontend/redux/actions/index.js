import CSV from 'comma-separated-values';
import datas from '../../datas/datas'


export const combineDatas = (data) => {
    const csv = new CSV(data, {header: false}).parse();
    const res = {}
    // const cols = [[],[],[],[]];
    // const headers = [];
    // var  isHeader = true;

    csv.forEach((row) => {
        var i = 0;
        var word = [];
        row.forEach((cell, index) => {
            if( i < 4 ){
                word.push(cell)
                if(i==0) res[cell] = {keywords: [], meaning: ""}
                else res[word[0]].keywords = word;
            }
            else res[word[0]].meaning = cell;
            i++;
        });
 });

    //빈값제거
    delete res[""]
    return res;
} 

export const getDatas = (option="all") => {
    var words = {};

    if(option=="all"){
        for (var key in datas){
            item = combineDatas(datas.key);
            words = {...words, ...item  }; 
        }
    }else words = combineDatas(datas[option])
    console.log(words);
    return words;
 }

 export const getQuiz = (num=10) => {
    var words = {};
    console.log(words)
    return words
 }

