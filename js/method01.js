// 获取节点
var btn = document.getElementsByClassName('met1')[0];
var addrShow = document.getElementById('addr-show');
var prov = document.getElementById('prov');
var city = document.getElementById('city');
var country = document.getElementById('country');

// 用于保存省市区
var current = {
    prov: '',
    city: '',
    country: ''
};
// 自动获取加载省的信息
(function showProv() {
    // 禁用按钮
    btn.disabled = true;
    // 获取城市列表长度。
    for (var i = 0; i < provice.length; i++) {
        // 创建一个 option 的节点
        var provOpt = document.createElement('option');
        // 加入数据
        provOpt.value = provOpt.innerText = provice[i]['name'];
        // 将节点插入到 select 节点里面    
        prov.appendChild(provOpt);

    }
})();
// 根据省的信息来显示市的信息
function showCity(obj) {
    // 获取option 下拉框的值
    var val = obj.options[obj.selectedIndex].value;
    // console.log(val) 

    // 处理bug,当两次传值不一样的时候要清空数据
    if (val != current.prov) {
        // console.log(val)
        current.prov = val;
        btn.disabled = true;
        city.length = 1
    }
    if (val != '') {
        var provIndex = 0;
        // 查找省的索引
        for (var i = 0; i < provice.length; i++) {
            if (val == provice[i]['name']) {
                provIndex = i;
            }
        }
    }
    // 遍历市的节点
    var cityLen = provice[provIndex]['city'].length;

    for (var j = 0; j < cityLen; j++) {
        // 创建市的节点
        var cityOpt = document.createElement('option');
        // 向下拉列表里面添加
        cityOpt.value = cityOpt.innerText = provice[provIndex]['city'][j].name;
        city.appendChild(cityOpt);
    }
}
// 根据所选城市来显示区县列表
function showCountry(obj) {
    var val = obj.options[obj.selectedIndex].value
        // console.log(val);
        // 处理bug,当两次传值不一样的时候要清空数据
    if (val != current.city) {
        // console.log(val)
        current.city = val;
        btn.disabled = true;
        country.length = 1
    }
    // 查找省的索引
    var provIndex = 0;
    provIndex = 0;
    // 查找省的索引
    for (var i = 0; i < provice.length; i++) {
        if (current.prov == provice[i]['name']) {
            provIndex = i;
            break;
        }
    }
    // 查找城市的索引
    var cityLen = provice[provIndex]['city'].length;
    var cityIndex = 0;
    for (var i = 0; i < cityLen; i++) {
        if (current.city == provice[provIndex]['city'][i].name) {
            cityIndex = i;
            break;
        }
    }
    // 查找对应的县区
    if (val != ' ') {
        var countryLen = provice[provIndex]['city'][cityIndex].districtAndCounty.length;
        // 如果只有省市没有区县要处理一下
        if (countryLen == 0) {
            addrShow.value = current.prov + '-' + current.city;
            return;
        }
        for (var n = 0; n < countryLen; n++) {
            var countryOpt = document.createElement('option');
            countryOpt.innerText = provice[provIndex]['city'][cityIndex].districtAndCounty[n];
            countryOpt.value = countryOpt.innerText;
            country.appendChild(countryOpt)
        }
    }
}
// 选择区县后处理函数
function selecCountry(obj) {
    current.country = obj.options[obj.selectedIndex].value;
    if ((current.city != '') && (current.country != '')) {
        btn.disabled = false;
    }
}
// 点击确定触发函数
function showAddr() {
    addrShow.value = current.prov + '-' + current.city + '-' + current.country
}