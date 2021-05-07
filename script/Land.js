//创建一个大地的类
//大地继承矩形Rectangle

const landDom = document.querySelector(".land");
const landStyles = getComputedStyle(landDom);  //得到大地的所有样式
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top);

class Land extends Rectangle {
    constructor(speed) {
        // super指的是父类
        super(landWidth,landHeight,0,landTop,speed,0,landDom);
    }

    onMove() {
        if(this.left <= -landWidth / 2) {
            this.left = 0;
        }
    }
}

