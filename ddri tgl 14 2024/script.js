const limitInput = document.getElementById("limit-Input")
const startButton = document.getElementById("start_btn")
const GanjilNumberDiv = document.getElementById("Ganjil-number")
const GenapNumberDiv = document.getElementById("Genap-number")


startButton.addEventListener("click", ()=>{
    const limit = parseInt(limitInput.value) //cara agar bisa di limit
    
    // memastikam inputadalah bilangan positif
    if(isNaN(limit) || limit <=0){
        alert("Plis masukan nomor anu valid positif euy.")
        return;
    }

    //kosongkan tampilan sebelum nya
    GanjilNumberDiv.textContent = "Ganjil numbear : "
    GenapNumberDiv.textContent = "Genap numbear : "

    //loopingdari 1 sampai limit
    for(let i = 1; i <= limit; i++){
        if(i % 2 == 0){
            GenapNumberDiv.textContent += i + "";
        } else{
            GanjilNumberDiv.textContent += i + "";
        }
    }
})