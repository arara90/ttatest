import React from 'react'
import ReactFileReader from 'react-file-reader';
import CSV from 'comma-separated-values';
import {tta2017} from '../../datas/tta2017'
import {tta2018} from '../../datas/tta2018'
import {tta2019} from '../../datas/tta2019'

//+https://jsfiddle.net/mblase75/dcqxr/ 도 보기
function Upload() {

    const handleFiles = async data => {
        // var reader = new FileReader();

        // reader.onload = function(e) {
        // Use reader.result
            const csv = new CSV(tta2019, {header: false}).parse();
            const cols = [[],[],[],[]];
            const res = {}

            const headers = [];
            var  isHeader = true;

            csv.forEach((row) => {
                var i = 0;
                var word = [];

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
        // }

    //   await reader.readAsText(files[0]);


        row.forEach((cell, index) => {
            
                if(isHeader) headers.push(cell) //header 저장
                else{
                    if( i < 4 ){
                        word.push(cell)
                        if(i==0) res[cell] = {keywords: [], meaning: ""}
                        else res[word[0]].keywords = word;
                    }
                    else res[word[0]].meaning = cell;
                }
                i++;
            });

            if(isHeader) isHeader = false;
        });

        //빈값제거
        delete res[""]

        console.log(res)

 }

 const handleClick = (e, year) =>{
     console.log(year);
     document.getElementsByClassName("btn2").click();
    

 }

 const handleClick2 = () =>{
    console.log(ff);

}


    return (

        <div>
          <button style={{width:"20px", height:"30px"}} className="btn1" onClick={(tta2019)=>handleFiles(tta2019)} >11</button>
        </div>

    )
}

export default Upload
