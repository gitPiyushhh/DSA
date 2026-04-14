## 1. 3Sum

## Pattern:
Two Pointer + Sorting

## Approach:
- Sort array
- Fix i
- Use left & right pointers
- Skip duplicates

## Time Complexity:
O(n^2)

## Mistakes:
- Forgot sorting
- Sum outside loop
- Return inside loop

## Key Learning:
- Always update sum inside loop
- Handle duplicates carefully

---------------------------------

## 2. 3Sum Closest

### Pattern:
Sorting + Two Pointers

### Problem:
Find a triplet in the array such that the sum is closest to the given target.

---

### Approach:
- Sort the array
- Fix one element (i)
- Use two pointers (left = i+1, right = n-1)
- Calculate sum = nums[i] + nums[left] + nums[right]
- Compare distance from target using absolute difference
- Update result if current sum is closer to target
- Move pointers:
  - If sum < target → left++
  - If sum > target → right--
  - If sum == target → return immediately

---

### Key Logic:
- Compare closeness using:
  Math.abs(sum - target) < Math.abs(res - target)

---

### Time Complexity:
O(n^2)

### Space Complexity:
O(1)

---

### Mistakes I Made:
- Stored difference instead of sum
- Incorrect pointer movement logic
- Did not update sum inside loop

---

### Key Learnings:
- Always store the actual result (sum), not difference
- Use absolute difference only for comparison
- Pointer movement depends on sum vs target (not diff)
- Sorting is mandatory for two pointer approach

---

### Pattern Insight:
- Used for "closest value" problems
- Similar logic appears in:
  - 3Sum Closest
  - Minimum difference problems
