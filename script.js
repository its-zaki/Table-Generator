function create_table(){
    let div = document.querySelector("#table");
    let input = (document.querySelector(".input").value);
    div.innerHTML = ''

 for (i=1; i<=10; i++ ){
    div.innerHTML += `${input} * ${i} = ${input*i} <br/>`
    
}
}