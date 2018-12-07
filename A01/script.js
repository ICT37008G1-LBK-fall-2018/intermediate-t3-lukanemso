let ricxvi = prompt('Chawere 2 ricxvi').split(' '),
    a = +ricxvi[0],
    b = +ricxvi[1],
    sum = 0;

if((a <= 0 || b <= 0 ) || (a >= 1000 || b >= 1000) || a >= b ){
    alert('Araswori Shualedi');
}
else{
    for(a; a<=b; a++){
        sum += a;
    }

    alert(sum);
}