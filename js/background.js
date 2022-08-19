const body = document.querySelector("body");
// 이미지 갯수 설정
const IMG_NUMBER = 8;
// 랜덤 숫자 생성 함수
function getRandom() {
  const number = Math.floor(Math.random()*8);
  return number;
}
// 최종 실행 함수
function init() {
  const randomNumber = ;
}
init();

/* 이미지를 가져오는 함수 */
function paintImage(imgNumber) {
  /* 1. new 를 사용하여 object 만들기 */
  const image = [
    URL('https://cdn.pixabay.com/photo/2022/07/27/20/29/bumble-bee-7348702_1280.jpg'),
    URL('https://cdn.pixabay.com/photo/2019/12/15/17/10/building-4697597_1280.jpg'),
    URL('https://cdn.pixabay.com/photo/2022/06/23/09/18/drawing-7279358_1280.jpg'),
    URL('https://cdn.pixabay.com/photo/2022/08/06/20/38/iceland-7369376__480.jpg'),
    URL('https://cdn.pixabay.com/photo/2022/07/29/01/07/trees-7350845__480.jpg'),
    URL('https://cdn.pixabay.com/photo/2022/05/07/17/50/bird-7180724__480.jpg'),
    URL('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg'),
    URL('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg')
    ];
  /* 2. object에 이미지 주소(레퍼런스) 연결하기 */
  image.src = `images/${imgNumber + 1}.jpg`;
  // + 1를 하는 이유는 Math.random() 함수가 0을 줄 수 있기 때문이다.
  /* body 안에 image 넣기 */
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() *IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();

 /* 이미지(갯수) 함수와 randeomNumber변수(랜덤숫자생성함수)를 인자로 설정 */
  paintImage(randomNumber);

}
init();






