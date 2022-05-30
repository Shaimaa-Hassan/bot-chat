let form = document.querySelector("form");
let chatArea = document.querySelector("#chat-area");
let message = document.querySelector("#message");
// let send = document.getElementById("send");
// i used fetch
async function getbotanswer(){
    const responseText = await fetch("bot-answer.json");//اسم ملف الجسون اللي عندي وبنحط اي لينك لو عايز خارجي يكون فيه اوبجيكت
    const data = await responseText.json();// بنحوله من نص لاوبجيكت
    // console.log(data);
    // console.log(responseText);
    form.onsubmit = (e)=>{//يعني لما ادوس على انتر او الزرار
        e.preventDefault();
        // console.log("ok");
        if(message.value.trim() === ""){
            alert("please insert value");
        }
        else{
            chatArea.innerHTML +=`<p class=" p-2 " style="background-color: #ddd;">${message.value}</p>  `//جعلتها هنا عشان يكتب الرسالة سواء كانت موجودة او لا 
            data.forEach((item)=>{
                if(message.value.trim().toLowerCase() === item.my_msg){
                    let timeres = Math.floor(Math.random()*10000);
                    console.log(timeres);//هيطبع الوقت اللي هتتعرض فيه الرسالة 
                    setTimeout(()=>{chatArea.innerHTML += `  <p class="bg-info p-2">${item.bot_answer}</p>`}, timeres);
                }
            })
            // if(message.value.trim() === (data[0].my_msg)){
            //     console.log(data[0].bot_answer);
            // }
            message.value ="";// هنا عشان يفضي المكان اللي بنكتب فيه بعد ما يرسله في كل مرة
        }
    }
}
getbotanswer();

