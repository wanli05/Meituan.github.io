//获取city页面传值过来的城市信息
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
};
// 获取登录页面传值过来的ID信息
window.addEventListener('load', function() {
    var loginId = document.querySelector('#loginId');
    console.log(location.search);
    var params = location.search.substr(1)
    console.log(params);
    var arr = params.split('=');
    console.log(arr)
    if (arr.length != 1) {
        loginId.innerHTML = arr[1]
    } else {
        loginId.innerHTML = '立即登录';
    }
});