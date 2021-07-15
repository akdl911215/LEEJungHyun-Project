// 게임 초기화와 종료 로직 코드
const canvas = document.getElementById('board');
const ctx = document.getElementById('2d');

// 상수를 사용해 캔버스의 크기를 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);