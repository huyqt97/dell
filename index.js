function button(){
    let input = Number(document.getElementById(`input`).value);
    // console.log(input);
    let tu = document.getElementById(`select1`).value;
    // console.log(tu);
    let sang = document.getElementById(`select2`).value;
    // console.log(sang);
    if (tu == sang){
        document.write(input);
    }else
    if (tu == "vnd" && sang == "usd"){
        document.getElementById("result").innerHTML= (input / 24000 + `USD`);
    } else
    if (tu == "usd" && sang == "vnd"){
        document.getElementById("result").innerHTML= (input * 24000 + "VNĐ");
    }
    
}