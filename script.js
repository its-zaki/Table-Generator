function create_table(){
    let div = document.querySelector("#table");
    let input = (document.querySelector("#Input").value);
    div.innerHTML = ''
    if( Input.value  <= 0 || Input.value == ''   ){
        
        div.innerHTML = "Enter Positive Number"
    }
    else{
        for (i=1; i<=10; i++ ){
           div.innerHTML += `${input} * ${i} = ${input*i} <br/>`
           
       }
     

}   
}