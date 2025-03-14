//tura ve yazı sayılarını oluştur ve başlangıçta 0la
let tura=0;
let yazi=0;

//html de bulunan coin,flip butonu ve reset butonu seç
let coin=document.querySelector(".coin");
let flipBtn=document.querySelector("#flip-button");
let resetBtn=document.querySelector("#reset-button");

//flip butonuna tıklandığında 
flipBtn.addEventListener('click',()=>{
    let i =Math.floor( Math.random()*2);//tam sayı versin diye floor kullandık rastgele 0 veya 1 sayısını seçer 0:tura 1:yazı

    //coin animasyonunu geçiçi olarak kapattık
    coin.style.animation="none";
    if(i){
        //eğer i = 1 ise yazı ise 100 milisaniye sonra coine flip-tura animasyonunu uygula
        setTimeout(()=>{
            coin.style.animation="spin-tura 5s forwards";
        }
    ,100);
    tura++;
    }
    else{
        //eğer i = 0 ise yazı ise 100 milisaniye sonra coine spin-writting animasyonunu uygula
        setTimeout(()=>{
            coin.style.animation="spin-writing 5s forwards";
        }
    ,100);
    yazi++;
    }

    //istatistikleri güncelle
    setTimeout(updateStats,5000);
    disableButton();
});
//istatistikleri güncelleme fonksiyonu
function updateStats() {
    document.querySelector("#tura-count").textContent=`Tura:${tura}`;
    document.querySelector("#writing-count").textContent=`Yazı:${yazi}`;
}
//butonu geçiçi olarak devre dışı bıraktık
function disableButton() {
    flipBtn.disabled=true;
    setTimeout(()=>{
        flipBtn.disabled=false;
    } , 5000);
    
}

//reset butonuna tıklama
resetBtn.addEventListener("click",()=>{
    //coin animasyonunu kapat tura ve yazıyı sıfırla istatistikleri güncelle
    coin.style.animation="none";
    tura=0;
    yazi=0;
    updateStats();
})