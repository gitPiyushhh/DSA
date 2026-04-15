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

------------------------------------------------------

## 3. Remove Duplicates from Sorted Array

### Pattern:
Two Pointers (Slow + Fast Pointer)

### Problem:
Remove duplicates from a sorted array **in-place** and return the number of unique elements.

---

### Approach:
- Since array is sorted, duplicates are adjacent
- Use two pointers:
  - `i` → scans array
  - `k` → position to place unique elements
- First element is always unique
- For every new unique element:
  - place it at index `k`
  - increment `k`

---

### Key Logic:
- If nums[i] !== nums[i-1] → it's a new unique element
- Place it at nums[k] and increment k

---

### Time Complexity:
O(n)

### Space Complexity:
O(1) (in-place)

---

### Mistakes I Made:
- Used extra array instead of modifying input
- Confusion with pointer movement (k++ placement)
- Overwriting elements incorrectly (elem at 0th index)

---

### Key Learnings:
- In-place problems require modifying original array
- Use slow pointer (k) to overwrite duplicates
- `k` always represents count of unique elements
- Sorted property helps simplify logic

---

### Pattern Insight:
- Common pattern: "Overwrite duplicates using slow pointer"
- Used in:
  - Remove duplicates problems
  - In-place array modification

-----------------------------------------------------

## 4. Squares of a Sorted Array

### Pattern:
Two Pointers (Compare Extremes) + Result Pointer (k)

### Problem:
Given a sorted array (can contain negative numbers), return an array of squares in sorted order.

---

### Approach:
- The largest square will come from either:
  - Leftmost element (large negative)
  - Rightmost element (large positive)
- Use two pointers:
  - left = 0
  - right = n - 1
- Use a result array and fill it from the end:
  - k = n - 1
- Compare squares:
  - If leftSq > rightSq → place leftSq at res[k]
  - Else → place rightSq at res[k]
- Move pointers accordingly and decrement k

---

### Key Logic:
- Compare extremes (left & right)
- Fill result from end (largest values first)

---

### Time Complexity:
O(n)

### Space Complexity:
O(n)

---

### Mistakes I Made:
- Tried to overwrite original array while still using it for comparisons
- This caused incorrect values during iteration
- Did not realize that modifying input can affect future calculations

---

### Key Learnings:
- If reading and writing overlap → use a separate result array
- Transformation (like squaring) can break sorted order
- Always check if original data is still needed before modifying
- Use result pointer (k) to control placement

---

### Pattern Insight:
- Use two pointers when:
  - Array is sorted
  - Extremes determine result
- Use extra pointer (k) when building result array

---

### Golden Rule:
"If modifying input affects future comparisons → use a new array"