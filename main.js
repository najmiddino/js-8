let num_1 = [2, 4,9,10,45,67,8,90]
let num_2 = []


for(let i=0; i < num_1.length; i++){
    if(num_1[i] % 2 == 0){
        num_2.push(num_1[i])
    }
}

console.log(num_1, 'boshlanishidagi arre');
console.log(num_2, 'juft sonlari');