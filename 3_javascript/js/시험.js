// 적용하기 버튼이 클릭 되었을 때
const applyBtn =document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function() {

    // 위에 작성된 input 요소들을 모두 얻어오기
    const boxWidth = document.querySelector("#box-width");
    const boxHeight = document.querySelector("#box-height");
    const fs = document.querySelector("#fs");

    const fw = document.querySelector("[name='fw']:checked");

    const fontColor = document.querySelector("#box-font-color");
    const bgColor = document.querySelector("#box-bg-color");

    const row = document.getElementById("[name='align-row']:checked");
    const col = document.getElementById("[name='align-col]:checked");

    const content = document.querySelector("#content");
    const box = document.querySelector("#box");

    // input에 작성된 값을 얻어와서, 그 값에 따라 #box에 js로 CSS추가

    // 너비를 입력하는 input의 값이 작성되어 있다면
    if(boxWidth.value.trim().length > 0) {
        // boxWidth라는 요소의 value값에 앞뒤로 공백 제거를 한 후,
        // value값의 문자열 길이를 따졌더니, 0보다 클 때 ==> 뭔가 값이 있을 때
        box.style.width = boxWidth.value + "px";
        
    }

    // 높이를 입력하는 input에 값이 작성되어 있다면
    if(boxHeight.value.trim().length > 0) {
        box.style.Height = boxHeight.value + "px";
    }

    if(fs.value.trim().length > 0) {
        box.style.fontSize = fs.value + "px";
    }

    
    if(fw != null) { // 글자 굵기가 체크된 게 있다면
        console.log(fw);
        box.style.fontWeight = fw.value;
    }

    if(fontColor.value.trim().length > 0) {
        box.innerText = fontColor.value;
    }


    if(bgColor.value.trim().length > 0) {
        box.innerText = bgColor.value;
    }
    


    if(row != null) {
        console.log(row);
        box.style.justifyContent = row.value;
    }


    if(col != null) {
        console.log(col);
        box.style.alignItems = col.value;
    }



    if(content.value.trim(). length > 0) {
        box.innerText = content.value;

    }



    console.log("#apply-btn")




    
});