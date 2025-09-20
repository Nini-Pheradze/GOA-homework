// 1)gzaze midis misha da grisha, misham utxra grishasam utxra misha  15> 14 Misham arao kaco piriqito

// Misham utxra Modi avagdot moneta tu arioli dajdeba me viqnebi martali tu reshka dajdeba shen iqnebi
//   1.websteze gamoitanet shedegi arioli dajda tu rehska 
//   2.rehska dajdeba tu ara feri seicvleba beqgrandze mwvaned tu ara piriqit
//   3.websaitze unda iyos dgevandeli dge ra droa da ra rcivxvi ogon yovel wams icvlebodes es ricxvi

const tossButton = document.getElementById('tossButton');
const coinResult = document.getElementById('coinResult');
const body = document.body;
const liveInfo = document.getElementById('liveInfo');

tossButton.addEventListener('click', () => {
    const result = Math.random();

    if (result < 0.5) {
        coinResult.textContent = "არიოლი დაჯდა!";
        body.classList.remove('green-bg'); 
    } else {
        coinResult.textContent = "რეშკა დაჯდა!";
        body.classList.add('green-bg'); 
    }
});


function updateLiveInfo() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('ka-GE');
    const formattedTime = now.toLocaleTimeString('ka-GE');
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    liveInfo.textContent = `დღევანდელი თარიღი: ${formattedDate} | დრო: ${formattedTime} | რიცხვი: ${randomNumber}`;
}

updateLiveInfo();

setInterval(updateLiveInfo, 1000);

