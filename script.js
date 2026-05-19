const AnyKey = document.querySelector('.AnyKey');
let Trans = 0;

// 1. 페이지가 켜지자마자 0.2초마다 자동으로 깜빡이게 만들기
const timer = setInterval(() => {
  if (Trans >= 1) {
    Trans = 0; // 1 이상이 되면 다시 0으로 초기화
  } else {
    Trans += 0.01; // 0.1씩 투명도를 증가
  }
  
  // 소수점 오차 방지를 위해 fixed 처리 후 투명도 적용
  AnyKey.style.opacity = Trans.toFixed(1); 
}, 8);


// 2. 아무 키나 눌리면 깜빡임을 멈추고 객체를 화면에서 제거하기
window.addEventListener('keydown', (event) => {
  console.log(`누른 키: ${event.key}`); 

  // 작동 중이던 깜빡이 타이머를 멈춥니다.
  clearInterval(timer);
  
  // .AnyKey 객체를 HTML에서 아예 삭제합니다.
  AnyKey.remove(); 
  
}, { once: true }); // 키를 연타해도 에러가 나지 않도록 딱 한 번만 실행