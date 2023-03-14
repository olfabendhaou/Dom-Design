var cards =document.querySelectorAll('.mb-3');
var btnsplus=document.querySelectorAll('.fa-plus-circle');
var btnsminus=document.querySelectorAll('.fa-minus-circle');
var favs=document.querySelectorAll('.fa-heart');
var delets=document.querySelectorAll('.fa-trash-alt')

for (let i=0; i<favs.length; i++ ) {
    let fav=favs[i];
    fav.addEventListener('click', function(event) {
    if (fav.style.color == 'black') {
        fav.style.color = 'red';} 
    else {
        fav.style.color = 'black';
    }
    });totalprice();
    
}
for (let i=0; i<cards.length; i++ ) {
    let card = cards[i];
    let delet=delets[i];
    delet.addEventListener('click', function(event) {
        card.remove();
        }); totalprice();
        
    }
for (let btnplus of btnsplus){
        btnplus.addEventListener('click', function(event) {
            let  nextsbl=btnplus.nextElementSibling;
            let currentValue = parseInt(nextsbl.innerText);
            nextsbl.innerText = currentValue+1;
            }); totalprice();  
                
}
for (let btnminus of btnsminus){
    btnminus.addEventListener('click', function(event) {
        let  previoustsbl=btnminus.previousElementSibling;
        let currentValue = parseInt(previoustsbl.innerText);
        if (currentValue>0){
        previoustsbl.innerText = currentValue-1;}
        else {
            previoustsbl.innerText=0;    
        }
        
    });
    totalprice();  
}

function totalprice(){
    var nbrs=document.querySelectorAll('.qute');
    var prices=document.querySelectorAll('.unitt-price');
    var totalpriceelement=document.getElementById('total-price');
    var totalprice=0;
    for (let i=0;i<nbrs.length;i++) { 
        let price=nbrs[i]*prices[i];
        totalprice= totalprice+price;
        totalpriceelement.innerText=totalprice;};
    }
    
