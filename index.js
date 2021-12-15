var result = confirm("'박별'에 대해 궁금한가요?");
if(result){
    alert("안녕하세요! 위코드 30기 박별입니다^0^");
}else{
    alert("안타깝네요!!:(");
    location.href="index2.html";
}

function getPopup(){
    window.open('popup.html','_blank','left=50,right=50,width=300,height=300');
}
