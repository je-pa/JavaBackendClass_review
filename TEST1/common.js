function goToBack(){
    history.back();
}

function clkLogin(){
    var txtIdElem = document.getElementById('txtId');
    if(txtIdElem.value ===''){
        alert('로그인을 할 수 없습니다.');
        return;
    }
    var txtPwElem = document.getElementById('txtPw');
    if(txtPwElem.value ===''){
        alert('로그인을 할 수 없습니다.');
        return;
    }
    location.href = 'main.html';
}

function clkJoin(){
    var txtIdElem = document.getElementById('txtId');
    console.log(txtIdElem.value);
    if(txtIdElem.value ===''){
        alert('회원가입을 할 수 없습니다.');
        return;
    }

    var txtPwElem = document.getElementById('pw1');
    console.log(txtPwElem.value);
    if(txtPwElem.value ===''){
        alert('회원가입을 할 수 없습니다.');
        return;
    }

    var txtPwElem2 = document.getElementById('pw2');
    console.log(txtPwElem2.value);
    if(txtPwElem2.value ===''){
        alert('회원가입을 할 수 없습니다.');
        return;
    }
    
    if(txtPwElem.value !== txtPwElem2.value){
        alert('비밀번호를 확인해 주세요');
        return;
    }

    location.href = 'login.html';

}