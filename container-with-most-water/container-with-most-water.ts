function maxArea(heights: number[]): number {
  if (!heights.length) return 0;
  let largestVolume: number = 0;
  for (let index: number = 0; index < heights.length; index++) {
      let height: number = heights[index];
      if (height * heights.length < largestVolume) continue;
      for (let index2: number = index + 1; index2 < heights.length; index2++) {
        let height2: number = heights[index2]
          let heightToMultiply: number = height > height2 ? height2 : height;
          let volume: number = heightToMultiply * (index2 - index);
          if (volume > largestVolume) largestVolume = volume;
      }
  }
  return largestVolume;
};