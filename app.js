let h =  parseInt(prompt("Nhập chiều của của bạn: "))
let w = parseInt(prompt("Nhập cân nặng của bạn"))
let c= w/((h/100)*2)
if(c<16) {
    console.log("Severely underweigh")
}
else if(c>16 && c<18.5){
    console.log("Underweight")
}
else if(c>18.5 && c<25){
    console.log("Normal")
}
else if(c>25 && c<30){
    console.log("Overweight")
}
else{
    console.log("Obese")
}