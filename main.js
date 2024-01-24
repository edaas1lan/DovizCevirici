const secenekfirst=document.getElementById('secenekfirst');
const seceneksecond=document.getElementById('seceneksecond');
const count=document.getElementById('count');
const equal=document.getElementById('equal');
const degisiklik=document.getElementById('degisiklik');

updateRate();

function updateRate(){
    fetch(
        `https://v6.exchangerate-api.com/v6/d3909247e34706d1959cdd45/latest/${secenekfirst.value}`
)
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    const rate=data.conversion_rates[seceneksecond.value];//cevirecegi degeri alıcak
    degisiklik.textContent=`1 ${secenekfirst.value} = ${rate} ${seceneksecond.value}`;//guncel deger yerine 1 secilen turu karsısına da donusturulen degeri basacak
    equal.textContent=(count.value*rate).toFixed(2);//girilen input degeriyle apı deki degeri carp noktadan sonra 2 basamak yaz

});
}
secenekfirst.addEventListener('change',updateRate);
seceneksecond.addEventListener('change',updateRate);
count.addEventListener('input',updateRate);







