class Elastic {
    container: object;//容器对象
    max: number;//最大值
    min: number;//最小值
    divId: object;//图表div对象
    id: string;//图表div_id
    _w: number;
     _h: number;
    width: number;//当前宽度
    height: number;//当前的高度
    constructor(divId: string, container: string, speed:number=10,max: number = 2, min: number = 0.5) {
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
    enlarge() {
        
        //获取高度
       this.getSize(true);
        //重置容器
        this.show();

    }
    narrow() {
        this.getSize(false);
        //重置容器
        this.show();
    }
    //重置容器,渲染图表
    show() {
        this.container.innerHTML = '<div id="' + this.id + '" style="width:' + this.width + 'px;height:' + this.height + 'px"></div>';
        var myChart = echarts.init(document.getElementById(this.id));
        myChart.setOption(option);
    }
    //得到高度
    getSize(o: boolean) {
        if (o) {
            this.height= this.height + this._h;
            this.width = this.width + this._w;
        } else {
           this.height= this.height - this._h;
            this.width = this.width - this._w;
        }
    }
    //设置大小
    setSize(w: number, h: number) {
        this.width = w;
        this.height = h;
        this.show();
    }
}
    
