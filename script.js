const countwords =() =>{
    let nochar=document.getElementById('words').value.length;
    let noword=document.getElementById('words').value;
    let nos=document.getElementById('words').value;
    noword=noword.match(/\w+/g );
    noword=noword.length;
    console.log(noword);
    
    // nos=nos.match(/@#$%^&*()!{}:""<>?,\.;'[]?/g );
    // nos=nos.length;
    // document.getElementById('showwords').innerHTML = "Total words are :"+noword;
    
    document.getElementById('showdata').innerHTML = "Total characters are :"+nochar;
    document.getElementById('showwords').innerHTML = "Total words are :" + noword;
    document.getElementById('symbols').innerHTML = "Total symbols are :" + nos;
    }
    
    
    