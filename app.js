let button=document.querySelector(".btn");
let show=document.querySelector("h3");
let sta=document.querySelector("h4");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(position => {
        const {latitude,longitude} = position.coords;
        const url=`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.address);
            let c=(data.address.city);
            let s=(data.address.state);


            show.textContent=`${c}`;
            sta.textContent=`${s}`;
        }).catch(() =>{
            console.log("Error");
        })
    })
});


