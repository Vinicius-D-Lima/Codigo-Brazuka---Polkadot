function verifica(num,target){
    for(let i = 0;i < num.length; i++){
        if(num[i] == target){
            return num[i];   
        }
    }
    return -1;
    
}

let num = [1,2,43,22,6,7,8];
target = 44;
let i = verifica(num,target);
if(target == i){
    console.log("numero encontrado");
}else{
    console.log("esse numero nao existe");
}