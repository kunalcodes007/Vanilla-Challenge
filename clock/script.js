
const secondhand=document.querySelector('.second-hand');
const minutehand=document.querySelector('.minute-hand');
const hourhand=document.querySelector('.hour-hand');

function setdate(){
     const current=new Date();
     const seconds=current.getSeconds();
    const secondsdegree=((seconds/60)*360)+90;
    secondhand.style.transform= `rotate(${secondsdegree}deg)`;

    const minutes=current.getMinutes();
    const minutedegree=((minutes/60)*360)+((seconds/60)*6) +90;
    minutehand.style.transform=`rotate(${minutedegree}deg)`;

    const hours=current.getHours();
    const hourdegree=((minutes/12)*360)+90;
    hourhand.style.transform=`rotate(${hourdegree}deg)`;
}

setInterval(setdate,1000); 
setdate();