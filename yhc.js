const NUMBER_OF_LEAVES = 40;
function init() {
  let container = document.getElementById('leafContainer');
  for (let i = 0; i < NUMBER_OF_LEAVES; i++) {

    container.appendChild(createALeaf());
  }
}

//�������õ��������
function randomInteger(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}
//�������õ����������
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
  // ����ө���Ԫ��
  var leafDiv = document.createElement('div');
  leafDiv.className = 'beetle'
  // ө����ʼλ��
  leafDiv.style.bottom = "100px";

  //ө����ҳ�����ľ���
  leafDiv.style.left = pixelValue(randomInteger(0, 1500));

  // ����õ���ʱ����ת�������ƶ��Ķ�������ʱ����ת�������ƶ��Ķ�����
  var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpin';
  // �����ɵ�ө���Ԫ����Ӷ���
  leafDiv.style.animationName = 'flicker,fade, up,' + spinAnimationName;
  // ������ö���ʱ��
  var fadeAndDropDuration = durationValue(randomFloat(5, 11));
  var leafDelay = durationValue(randomFloat(0, 5));
  leafDiv.style.animationDelay = leafDelay;
  leafDiv.style.animationDuration = fadeAndDropDuration;

  return leafDiv;
}

window.addEventListener('load', init());