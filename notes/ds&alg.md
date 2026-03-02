# algo & data structures for beginners

## arrays

```python
# pop, pos default -1
arr.pop(pos)
# peek
arr[-1]

```

## singly linked lists

list node:
```python
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None
```

creating list:
```python
ListNode1.next = ListNode2
```

list traversal:
```python
cur = ListNode1
while cur:
    cur = cur.next
```

deleting node
```python 
head.next = head.next.next
```

- head and tail pointers
- insertions in O(1) time
- traversal in O(n) time

## doubly linked list

insert end
```python
tail.next = ListNode4
ListNode4.prev = tail
tail = tail.next
```

insert front
```python
ListNode5.next = head
head.prev = ListNode5
head = ListNode5
```

## queues

```python
arr.insert(0, item)
arr.pop()
```

dequeue as linked list
```python
def dequeue(self):
    # Queue is empty
    if not self.left:
        return None
    
    # Remove left node and return value
    val = self.left.val
    self.left = self.left.next
    if not self.left:
        self.right = None
    return val
```

## Recursion

### One-branch

```python

def recur(arg):

    if base_case:
        return

    return recur(arg)

```

### Two-branch

```python
**def fibonacci(n):
    # Base case: n = 0 or 1
    if n <= 1:
        return n

    # Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2)**
```


## Sorting

### insertion sort

```python
def insertionSort(arr):
	# Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
        j = i - 1
        while j >= 0 and arr[j + 1] < arr[j]:
            # arr[j] and arr[j + 1] are out of order so swap them 
            tmp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = tmp
            j -= 1
    return arr
```

- stable
- O(n)

```python
def mergeSort(arr, s, e):
    if e - s + 1 <= 1:
        return arr

    # The middle index of the array
    m = (s + e) // 2

    # Sort the left half
    mergeSort(arr, s, m)

    # Sort the right half
    mergeSort(arr, m + 1, e)

    # Merge sorted halfs
    merge(arr, s, m, e)
    
    return arr
```

- stable
- O(nlogn) time, O(n) space

### quick sort

```python
# Implementation of QuickSort
def quickSort(arr: list[int], s: int, e: int) -> list[int]:
    if e - s + 1 <= 1:
        return arr

    pivot = arr[e]
    left = s # pointer for left side

    # Partition: elements smaller than pivot on left side
    for i in range(s, e):
        if arr[i] < pivot:
            tmp = arr[left]
            arr[left] = arr[i]
            arr[i] = tmp
            left += 1

    # Move pivot in-between left & right sides
    arr[e] = arr[left]
    arr[left] = pivot
    
    # Quick sort left side
    quickSort(arr, s, left - 1)

    # Quick sort right side
    quickSort(arr, left + 1, e)

    return arr
```

### bucket sort

```python
def bucketSort(arr):
    # Assuming arr only contains 0, 1 or 2
    counts = [0, 0, 0]

    # Count the quantity of each val in arr
    for n in arr:
        counts[n] += 1
    
    # Fill each bucket in the original array
    i = 0
    for n in range(len(counts)):
        for j in range(counts[n]):
            arr[i] = n
            i += 1
    return arr
```

## binary search (array)

```python 
arr = [1, 3, 3, 4, 5, 6, 7, 8]

def binarySearch(arr, target):
    L, R = 0, len(arr) - 1

    while L <= R:
        mid = (L + R) // 2

        if target > arr[mid]:
            L = mid + 1
        elif target < arr[mid]:
            R = mid - 1
        else:
            return mid
    return -1
```

- O(logn) time, O(n) space


## binary tree

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
```        

search
```python
def search(root, target):

    if root.value == target:
        return True

    elif root.value > target:
        search(root.left, target)

    elif root.value < target:
        search(root.right, target)

    else
        return False
```

- log(n) time

insert
```python
def insert(root, val):

    if root is None:
        return Tree(val)

    if val > root.val:
        return insert(root.right, val)

    if val < root.val:
        return insert(root.left, val)

    # val already exists in tree
    return root
```


### removal

case 1: target node has 0 or 1 child
- parent points to child if 1 child
- parent points to null if no children

case 2: target node has 2 children
- return in-order successor, which is min child of right subtree

```python
# Return the minimum value node of the BST.
def minValueNode(root):
    curr = root
    while curr and curr.left:
        curr = curr.left
    return curr

# Remove a node and return the root of the BST.
def remove(root, val):
    if not root:
        return None
    
    if val > root.val:
        root.right = remove(root.right, val)
    elif val < root.val:
        root.left = remove(root.left, val)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        else:
            minNode = minValueNode(root.right)
            root.val = minNode.val
            root.right = remove(root.right, minNode.val)
    return root
```

- O(logn) if balanced, O(n) if not
  - for both time and space.
  - for space, nubmer of recursive calls proportional to height of tree


### depth-first-search (DFS)

inorder
```python
def inorder(root):
    if not root:
        return    
    inorder(root.left)
    print(root.val)
    inorder(root.right)
```

preorder
```python
def preorder(root):
    if not root:
        return    
    print(root.val)
    preorder(root.left)
    preorder(root.right)
```

postorder
```python 
def postorder(root):
    if not root:
        return    
    postorder(root.left)
    postorder(root.right)
    print(root.val)
```


### bredth-first-search
```python
def bfs(root):
    queue = deque()

    if root:
        queue.append(root)
    
    level = 0
    while len(queue) > 0:
        print("level: ", level)
        for i in range(len(queue)):
            curr = queue.popleft()
            print(curr.val)
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
        level += 1        
```

## backtracking

example: path to leaf without containing 0
- use dfs

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def canReachLeaf(root):
    if not root or root.val == 0:
        return False
    
    if not root.left and not root.right:
        return True
    if canReachLeaf(root.left):
        return True
    if canReachLeaf(root.right):
        return True
    return False
```

build path:
```python
def leafPath(root, path):
    if not root or root.val == 0:
        return False
    path.append(root.val)

    if not root.left and not root.right:
        return True
    if leafPath(root.left, path):
        return True
    if leafPath(root.right, path):
        return True
    path.pop()
    return False
```

## heaps

heap-push
```python
def push(self, val):
    self.heap.append(val)
    i = len(self.heap) - 1

    # Percolate up
    while i > 1 and self.heap[i] < self.heap[i // 2]:
        tmp = self.heap[i]
        self.heap[i] = self.heap[i // 2]
        self.heap[i // 2] = tmp
        i = i // 2
```

heap-pop
```python
def pop(self):
    if len(self.heap) == 1:
        return None
    if len(self.heap) == 2:
        return self.heap.pop()

    res = self.heap[1]   
    # Move last value to root
    self.heap[1] = self.heap.pop()
    i = 1
    # Percolate down
    while 2 * i < len(self.heap):
        if (2 * i + 1 < len(self.heap) and 
        self.heap[2 * i + 1] < self.heap[2 * i] and 
        self.heap[i] > self.heap[2 * i + 1]):
            # Swap right child
            tmp = self.heap[i]
            self.heap[i] = self.heap[2 * i + 1]
            self.heap[2 * i + 1] = tmp
            i = 2 * i + 1
        elif self.heap[i] > self.heap[2 * i]:
            # Swap left child
            tmp = self.heap[i]
            self.heap[i] = self.heap[2 * i]
            self.heap[2 * i] = tmp
            i = 2 * i
        else:
            break
    return res
```

## hashing

- "unique", "count", "frequency": use hashmap
- hash function:
  - convert key ("alice") to sequence of ints using asci
    - "Alice" -> 65, 108, ..., ...
  - add them together
    - 65 + 108 + ... = 324..
  - modulo
    - 324 % size_of_memory = 200
  - map value to 200 in memory

collisions
- chaining, use linked list for all pairs in same spot


## graphs

```python
grid = [[0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0]]

adjMatrix = [[0, 0, 0, 0],
             [1, 1, 0, 0],
             [0, 0, 0, 1],
             [0, 1, 0, 0]]
```

depth first search
```python
def dfs(grid, r, c, visit):
    ROWS, COLS = len(grid), len(grid[0])
    if (min(r, c) < 0 or
        r == ROWS or c == COLS or
        (r, c) in visit or grid[r][c] == 1):
        return 0
    if r == ROWS - 1 and c == COLS - 1:
        return 1

    visit.add((r, c))

    count = 0
    count += dfs(grid, r + 1, c, visit)
    count += dfs(grid, r - 1, c, visit)
    count += dfs(grid, r, c + 1, visit)
    count += dfs(grid, r, c - 1, visit)

    visit.remove((r, c))
    return count
```

breadth first search
```python
def bfs(grid):
    ROWS, COLS = len(grid), len(grid[0])
    visit = set()
    queue = deque()
    queue.append((0, 0))
    visit.add((0, 0))
    length = 0
    while queue:
        for i in range(len(queue)):
            r, c = queue.popleft()
            if r == ROWS - 1 and c == COLS - 1:
                return length

            neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            for dr, dc in neighbors:
                if (min(r + dr, c + dc) < 0 or
                    r + dr == ROWS or c + dc == COLS or
                    (r + dr, c + dc) in visit or grid[r + dr][c + dc] == 1):
                    continue
                queue.append((r + dr, c + dc))
                visit.add((r + dr, c + dc))
        length += 1
```


# advnaced algorithms

## Arrays

### Kadane's algorithm

find largest non-empty subarray with largest sum

- brute force
  - O(n^2) time

kadane's algorithm

```python
def kadanes(nums):
    maxSum = nums[0]
    curSum = 0

    for n in nums:
        curSum = max(curSum, 0)
        curSum += n
        maxSum = max(maxSum, curSum)
    return maxSum
```

sliding window verison
```python
def slidingWindow(nums):
    maxSum = nums[0]
    curSum = 0
    maxL, maxR = 0, 0
    L = 0

    for R in range(len(nums)):
        if curSum < 0:
            curSum = 0
            L = R

        curSum += nums[R]
        if curSum > maxSum:
            maxSum = curSum
            maxL, maxR = L, R 

    return [maxL, maxR]
```


### Sliding window, fixed size

example
- given array return true if two elements within window of k that are equal

algorithm
- L start at 0
- R = L + k
- nested for loop, outside L, inside R
- detect duplicate in window using hash set 
  - instead of looping through window again, remove element at L from hash set, check if R is in Hash set, add R to hash set
    - O(1) operation

```python
def closeDuplicates(nums, k):
    window = set() # Cur window of size <= k
    L = 0

    for R in range(len(nums)):
        if R - L + 1 > k:
            window.remove(nums[L])
            L += 1
        if nums[R] in window:
            return True
        window.add(nums[R])

    return False
```

### sliding window, variable size

example: find length of longest subarray with same value in each position

```python
def longestSubarray(nums):
    length = 0
    L = 0
    
    for R in range(len(nums)):
        if nums[L] != nums[R]:
            L = R 
        length = max(length, R - L + 1)
    return length
```

example: find minim length subarray where sum is greater than equal to target

algorithm:
- window: sum of values in subarray
- main loop: add arr at right pointer to to window
- while total > than target, shrink window until valid by iterating L and removing arr at L from window
  - update length while doing this

complexity
- still O(n), inner loop only run for O(n) total, making total alg O(n)

```python
def shortestSubarray(nums, target):
    L, total = 0, 0
    length = float("inf")
    
    for R in range(len(nums)):
        total += nums[R]
        while total >= target:
            length = min(R - L + 1, length)
            total -= nums[L]
            L += 1
    return 0 if length == float("inf") else length
```

### two pointers

example: is_palendrome
- can stop once L==R

```python
def isPalindrome(word):
    L, R = 0, len(word) - 1
    while L < R:
        if word[L] != word[R]:
            return False
        L += 1
        R -= 1
    return True
```

example: given sorted input aray, find two indices of two elements that sum up to target value. exactly one solution

algorithm
- if sum < target, increment L
- if sum > target, decrement R

```python
def targetSum(nums, target):
    L, R = 0, len(nums) - 1
    while L < R:
        if nums[L] + nums[R] > target:
            R -= 1
        elif nums[L] + nums[R] < target:
            L += 1
        else:
            return [L, R]
```

### prefix sum

prefix: any contiguous subarray that starts at the beginning
- add element to sum/prod as you increment along array
- can find sum of middle sub array
  - subtract prefix sum at one point with prefix and point before to get sum between both points
  - **EDGE CASE** if range sum start from 0, there is no L-1 index, so sit it to zero

```python
class PrefixSum:

    def __init__(self, nums):
        self.prefix = []
        total = 0
        for n in nums:
            total += n
            self.prefix.append(total)

    def rangeSum(self, left, right):
        preRight = self.prefix[right]
        preLeft = self.prefix[left - 1] if left > 0 else 0
        return (preRight - preLeft)
```

## linked lists

example: find middle of linked list

algorithm
- 2 pointer, fast increment by two, slow increment by one
- when fast reach end, slow at midpoint

```python
def middleOfList(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

example: find cycle in linked list
- easy: hash set
  - uses O(n) memory
- better: 2 pointers
  - if slow and fast pointers at same node
  - will always intersect eventually if cycle

```python
def hasCycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

example: find start of cycle

```python 
def cycleStart(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break

    if not fast or not fast.next:
        return None
    
    slow2 = head
    while slow != slow2:
        slow = slow.next
        slow2 = slow2.next
    return slow
```

## trees

### trie

- O(1) for insert, search, search prefix
- prefix tree
- tree of characters
- hashmap for every letter/node
- leaf node bool word=True

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        curr = self.root
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        curr.word = True

    def search(self, word):
        curr = self.root
        for c in word:
            if c not in curr.children:
                return False
            curr = curr.children[c]
        return curr.word

    def startsWith(self, prefix):
        curr = self.root
        for c in prefix:
            if c not in curr.children:
                return False
            curr = curr.children[c]
        return True
```

### union-find
- detect disjoint sets
- cycle detection


### segment tree
- udpate and query in logn time
  - previously in array update in O(1) time