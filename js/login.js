var loginSubmit = document.getElementById('submit');
// 获取URL
var str = location.href;
var params = getParamByUrl(str);
console.log(params)
    // 获取注册页面的信息
function getParamByUrl(url) {
    var theRequest = new Object();
    var index = url.indexOf('?');
    if (index != -1) {
        var str = url.substr(index + 1);
        strs = str.split('&');
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1]);
        }
    }
    return theRequest
}

// 用户名是否匹配
var userName = document.getElementById('username');
var userPass = document.getElementById('userpass');

userName.onfocus = function() {

}

userName.onblur = function() {
    if (userName.value != params['phone']) {
        userPass.className = 'display-inline icon-times-circle';
        userPass.innerHTML = '手机号码不正确';
        loginSubmit.setAttribute('disabled', true)
    } else {
        userPass.className = 'display-inline icon-check-circle';
        userPass.innerHTML = '手机号码正确';
        loginSubmit.removeAttribute('disabled')
    }
}
var passWord = document.getElementById('password');
var passTo = document.getElementById('passto');

passWord.onfocus = function() {

}



passWord.onblur = function() {
        if (passWord.value != params['pass']) {
            passTo.className = 'display-inline icon-times-circle';
            passTo.innerHTML = '密码错误';
            loginSubmit.setAttribute('disabled', true)
        } else {
            passTo.className = 'display-inline icon-check-circle';
            passTo.innerHTML = '密码正确';
            loginSubmit.removeAttribute('disabled')
        }
    }
    // 点击提交数据到index.html
loginSubmit.onclick = function() {
    if (password.value == '' || userName.value == '') {
        alert('请填写信息后登录');
        loginSubmit.setAttribute('disabled', true)
    } else {
        // alert(1); 
        // 跳转页面
        window.location.href = './index.html?username=' + userName.value;
    }
}