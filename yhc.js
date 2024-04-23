const NUMBER_OF_LEAVES = 40;
function init() {
  let container = document.getElementById('leafContainer');
  for (let i = 0; i < NUMBER_OF_LEAVES; i++) {

    container.appendChild(createALeaf());
  }
}

//返回设置的随机整数
function randomInteger(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}
//返回设置的随机浮点数
function randomFloat(low, high) {
  return low + Math.random() * (high - low);
}

function pixelValue(value) {
  return value + 'px';
}

function durationValue(value) {
  return value + 's';
}
function createALeaf() {
  // 创建萤火虫元素
  var leafDiv = document.createElement('div');
  leafDiv.className = 'beetle'
  // 萤火虫初始位置
  leafDiv.style.bottom = "100px";

  //萤火虫距页面左侧的距离
  leafDiv.style.left = pixelValue(randomInteger(0, 1500));

  // 随机得到正时针旋转并向右移动的动画、逆时针旋转并向左移动的动画；
  var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpin';
  // 给生成的萤火虫元素添加动画
  leafDiv.style.animationName = 'flicker,fade, up,' + spinAnimationName;
  // 随机设置动画时间
  var fadeAndDropDuration = durationValue(randomFloat(5, 11));
  var leafDelay = durationValue(randomFloat(0, 5));
  leafDiv.style.animationDelay = leafDelay;
  leafDiv.style.animationDuration = fadeAndDropDuration;

  return leafDiv;
}

window.addEventListener('load', init());