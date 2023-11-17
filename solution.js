function solution(points) {
  let rank = 1;
  let min = 0;
  let max = points[0][0] + points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] + points[i][1] > max) {
      rank = rank + 1;
    }

    if (points[i][0] + points[i][1] < max) {
      min = min + 1;
    }
  }
  if (min === 0) return (rank = -1);

  return rank;
}
