//calculating a value
function square(number){
    return number * number;
}
/*let number = square(3);
console.log(number);*/
console.log(square(2));

let cars=['volvo','BMW','mercedes'];
cars[3]='RANGE ROVER';
console.log(cars);

function speciality(){
    var i = 0;
    var speed =20;
    do{
        speed = speed + i;
        console.log(speed);
        i++;
    }
    while(speed<100);
    {
        console.log("Nitro is needed");
    }

}
speciality();