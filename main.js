let div2=document.getElementById("div2")
console.log(div2);

let section=document.getElementsByTagName("section")
console.log(section);

let body=document.getElementsByTagName("body")
console.log(body);

div2.onclick=function(){
    let div11=document.getElementById("div11")
    console.log(div11);
        div11.style.display="block"
        section[0].style.filter="blur(1.5px)"
}

    body[0].onclick=function name() {
        let div11=document.getElementById("div11")
        console.log(div11);
        let res=div11.classList.toggle(true)
        if(res){
        div11.style.display="none"
        section[0].style.filter="none"
    }
     }
