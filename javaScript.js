alert('Deals Of The Day')
while(true){
a= prompt(" Deals Of the day now available \n Please Enter Total Amount For Getting discount detail =  ")

if(a>=0 & a<2000)
{
    alert('You Will Not Get Any Discount ! \n Better Luck Next Time');
}
else if(a>=2000 & a<=3000){
D= a-(a*10)/100;
    alert(a +' On This Amount You will get 10% Discount \n So You Have to Pay Only = ' + D +' Rs')
}
else if(a>=3001 & a<=5000){
     D= a-(a*15)/100;
     alert(a +' On This Amount You will get 15% Discount \n So You Have to Pay Only = ' + D +' Rs')
}
else if(a>5000){
     D= a-(a*20)/100;
            alert(a +' On This Amount You will get 20% Discount \n So You Have to Pay Only = ' + D +' Rs')
        }
else{
    alert(' invalid Data')
    break;
}
}

