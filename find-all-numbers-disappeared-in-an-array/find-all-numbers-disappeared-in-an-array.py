class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        numsInRange = []
        for num in range(1, len(nums) + 1):
            numsInRange.append(num)
        rangeSet = set(numsInRange)
        print(rangeSet)
        for num in nums:
            if num in rangeSet:
                rangeSet.remove(num)
        return rangeSet
        