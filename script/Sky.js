//创建一个天空的类
//天空继承矩形Rectangle

const skyDom = document.querySelector(".sky");
const skyStyles = getComputedStyle(skyDom);  //得到天空的所有样式
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);

class Sky extends Rectangle {
    constructor() {
        // super指的是父类
        super(skyWidth,skyHeight,0,0,-50,0,skyDom);
    }

    onMove() {
        if(this.left <= -skyWidth / 2) {
            this.left = 0;
        }
    }
}

