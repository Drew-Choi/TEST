function solution(board, k) {
  let answer = 0;

  for(let i = 0; i < board.length; i += 1) {

      for(let x = 0; x < board[i].length; x += 1) {
          i + x <= k ? answer += board[i][x] : answer
      }

    }

  return answer;
}