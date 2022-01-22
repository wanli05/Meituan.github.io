// 节点获取

var addrShow03 = document.getElementById('addr-show03');
var dataOrder = document.getElementById('data-order').querySelectorAll('li');
var dataShow = document.getElementById('data-show');

// 自动加载函数的第三种写法
(function init() {
    showHotCity();
})();

// 自动加载热门城市
function showHotCity() {
    dataOrder[0].className = 'cityOn';
    var cityLen = cityAll[0].citys.length;
    var dl = document.createElement('dl');
    var dt = document.createElement('dt');
    dt.innerText = cityAll[0].name;
    var dd = document.createElement('dd');
    dl.appendChild(dt);
    dl.appendChild(dd);

    for (var i = 0; i < cityLen; i++) {
        var aCity = document.createElement('a');
        aCity.innerText = cityAll[0].citys[i];
        dd.appendChild(aCity);
    }
    dataShow.appendChild(dl);
}

// 点击 li 显示不同的城市
dataOrder.forEach(function(value, index, array) {
    value.onclick = function() {
        for (var z = 0; z < 7; z++) {
            if (z == index)
                dataOrder[index].className = 'cityOn';
            else
                dataOrder[z].className = '';
        }
        dataShow.innerHTML = '';
        switch (index) {
            case 0:
                showHotCity();
                break;
            case 6:
                showCitys(index, 2);
                break;
            default:
                showCitys(index, 4);
        }
    }
});
// 显示城市
function showCitys(index, m) {
    var currentAll = cityAll.slice(4 * index - 3, 4 * index + m - 3);
    var dl = [];
    for (var j = 0; j < m; j++) {
        dl[j] = document.createElement('dl');
        var dt = document.createElement('dt');
        dt.innerText = currentAll[j].name;
        dl[j].appendChild(dt);
        var cityLen = currentAll[j].citys.length;
        var dd = document.createElement('dd');
        for (var k = 0; k < cityLen; k++) {
            var aCity = document.createElement('a');
            aCity.innerText = currentAll[j].citys[k];
            dd.appendChild(aCity);
        }
        dl[j].appendChild(dd);
        dataShow.appendChild(dl[j]);
    }
}
// 点击城市后将结果添加到输入框中
dataShow.onclick = function(e) {
    var cityShow = dataShow.querySelectorAll('a');
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target && target.nodeName == 'A') {
        addrShow03.value = target.innerText;
    }
}