# Given a non-empty subarray (contigous), find the largest sum

# Typically we would assume that solving this solution
# would require us to operate in O(n * n) uising a brute
# force method.

def brute(nums):
	# we need to ensure that the maximum value is initially not set to 
	# something that can potentially be larger than our input, and at
	# the same time ensure that our array is non-empty
  maximum = nums[0]
  
  for i in range(len(nums)):
    current = 0
		for j in range(i, len(nums)):
			current += nums[j]
			maximum = max(current, maximum)
  return maximum

# the challenge is to have this algorithm run in O(n) time complexity
# using a "growing" window or a two pointer technique

def kadane(nums):
  maximum = nums[0]
  current = 0
  
  for n in nums:
    current = max(current, 0)
    current += n
    maximum = max(maximum, current)
  return maximum

# using the two-pointer technique we can find the indexes of the maximum sum

def sliding(nums):
  maximum = current = 0
  L = R = 0
  maxLeft = maxRight = 0
  
  for R in range(len(nums)):
    # where our current index is smaller than 0, assign the value at the
    # left pointer to the value at the right pointer
    if current < 0:
      current = 0
      L = R
    current += nums[R]

    if current > maximum:
      maximum = current
      maxLeft, maxRight = L, R
  return [maxLeft, maxRight]