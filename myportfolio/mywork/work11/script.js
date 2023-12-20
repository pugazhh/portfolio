result = () =>{
    let amt = document.getElementById('amt')
    let per = document.getElementById('per')
    let res = document.getElementById('result')
    let btn = document.getElementById('btn')

    let ans = (amt.value/per.value).toFixed(2);
    res.innerText =ans + "Rs Each";
    btn.style.background="green"

    reset = () =>{
        res.innerText = "🥹😅";
        per.value = "";
        amt.value = "";
        btn.style.background="black"
    }
}