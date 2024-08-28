const runConvert = () => {
    let tien = document.getElementById("tien").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let conv = 0;

    if(from === to)
    {
        alert("Khong can chuyen doi")
    }
    else if(from==="vnd" && to==="usd")
    {
        conv = tien / 24000;
        console.log("conv1 ",conv);
    }
    else
    {
        conv = tien * 24000;
    }

    alert("gia tri sau khi chuyen doi la " + conv);
}