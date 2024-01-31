const input1 = document.getElementById("input1");

function check1() {

    const value = Number(input1.value);

    if(value > 0) {
    alert("양수입니다"); }

    if(value < 0) {
    alert("양수가 아닙니다"); }

};
