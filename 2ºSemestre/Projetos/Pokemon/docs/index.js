while(!feliz){
    if(cafe > 0){
        console.log('Beber Café');

        feliz = true;
        
        cafe--;
    }else{
        console.log('Beber Cachaça');

        feliz = true;
        sobrio = false;
    }
}