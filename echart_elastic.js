var Elastic = /** @class */ (function () {
    function Elastic(divId, container, speed, max, min) {
        if (speed === void 0) { speed = 10; }
        if (max === void 0) { max = 2; }
        if (min === void 0) { min = 0.5; }
        this.id = divId;
        this.container = document.getElementById(container);
        this.divId = document.getElementById(divId);
        this.max = max;
        this.min = min;
        this.width = document.getElementById(divId).offsetWidth;
        this.height = document.getElementById(divId).offsetHeight;
        this._w = document.getElementById(divId).offsetWidth * (speed / 100);
        this._h = document.getElementById(divId).offsetHeight * (speed / 100);
    }
    Elastic.prototype.enlarge = function () {
        //获取高度
        this.getSize(true);
        //重置容器
        this.show();
    };
    Elastic.prototype.narrow = function () {
        this.getSize(false);
        //重置容器
        this.show();
    };
    //重置容器,渲染图表
    Elastic.prototype.show = function () {
        this.container.innerHTML = '<div id="' + this.id + '" style="width:' + this.width + 'px;height:' + this.height + 'px"></div>';
        var myChart = echarts.init(document.getElementById(this.id));
        myChart.setOption(option);
    };
    //得到高度
    Elastic.prototype.getSize = function (o) {
        if (o) {
            this.height = this.height + this._h;
            this.width = this.width + this._w;
        }
        else {
            this.height = this.height - this._h;
            this.width = this.width - this._w;
        }
    };
    //设置大小
    Elastic.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
        this.show();
    };
    return Elastic;
}());
