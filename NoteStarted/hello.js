console.log("Hello world")

function Xinchao(ten){
    console.log("hello " + ten)
}

var ten1 = "Hoang"
Xinchao("Duc")
for (i=1;i<5;i++){
    Xinchao(ten1)
}

for (i=0;i<ten1.length;i++){
    console.log(ten1[i])
}

console.log(isNaN("123"))

let ten2 = "Huy#$123"
for(i=0;i<ten2.length;i++){
    if(isNaN(ten2[i])){
        console.log(ten2[i] + ' khong phai la so')
    }else{
        console.log(ten2[i] + ' la so')
    }
}

let color = "XANH;DO;HONG;TIM"
let mang  = color.split(";")
for(i=0;i<mang.length;i++){
    console.log(mang[i].toLowerCase())
}

