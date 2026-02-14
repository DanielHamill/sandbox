# Python Interview Data Structures

## Collections Module

### deque (Double-ended Queue)
```python
from collections import deque

# Create
q = deque()
q = deque([1, 2, 3])
q = deque([1, 2, 3], maxlen=5)  # Fixed size

# Common operations
q.append(4)             # Add to right: O(1)
q.appendleft(0)         # Add to left: O(1)
q.pop()                 # Remove from right: O(1)
q.popleft()             # Remove from left: O(1)
q[0]                    # Access by index: O(1) at ends, O(n) middle
q.rotate(1)             # Rotate right
q.rotate(-1)            # Rotate left

# Use as queue (FIFO)
q.append(item)          # Enqueue
q.popleft()             # Dequeue

# Use as stack (LIFO)
q.append(item)          # Push
q.pop()                 # Pop
```

## Heapq (Priority Queue / Min Heap)
```python
import heapq

# Create (use regular list)
heap = []

# Build heap from list: O(n)
nums = [3, 1, 4, 1, 5]
heapq.heapify(nums)         # Converts list to heap in-place

# Common operations
heapq.heappush(heap, item)  # Push: O(log n)
item = heapq.heappop(heap)  # Pop min: O(log n)
heap[0]                     # Peek min: O(1)

# Push and pop in one operation
heapq.heappushpop(heap, item)  # Push then pop: O(log n)
heapq.heapreplace(heap, item)  # Pop then push: O(log n)

# Get k largest/smallest
heapq.nlargest(k, iterable)    # k largest elements
heapq.nsmallest(k, iterable)   # k smallest elements

# Max heap workaround (negate values)
max_heap = []
heapq.heappush(max_heap, -value)
max_val = -heapq.heappop(max_heap)

# Heap with tuples (compares first element)
heapq.heappush(heap, (priority, item))
priority, item = heapq.heappop(heap)
```

## Bisect (Binary Search)
```python
import bisect

# Sorted list operations
arr = [1, 3, 5, 7, 9]

# Find insertion position
pos = bisect.bisect_left(arr, 5)   # Leftmost position: 2
pos = bisect.bisect_right(arr, 5)  # Rightmost position: 3
pos = bisect.bisect(arr, 5)        # Same as bisect_right

# Insert maintaining sorted order
bisect.insort_left(arr, 4)         # Insert at leftmost position
bisect.insort_right(arr, 4)        # Insert at rightmost position
bisect.insort(arr, 4)              # Same as insort_right

# Use cases
# - Find if element exists: bisect_left(arr, x) and arr[idx] == x
# - Count occurrences: bisect_right(arr, x) - bisect_left(arr, x)
# - Find position in sorted list: bisect_left/right
```

## String Operations
```python
# Create
s = "hello"
s = 'hello'
s = """multi
line"""

# Common operations
s[0]                    # Access: O(1)
s[1:4]                  # Slice: O(k)
len(s)                  # Length
s.upper()               # Convert to uppercase
s.lower()               # Convert to lowercase
s.strip()               # Remove leading/trailing whitespace
s.split()               # Split into list
s.split(',')            # Split by delimiter
'-'.join(['a', 'b'])    # Join list into string: 'a-b'
s.replace('old', 'new') # Replace substring
s.find('sub')           # Find substring (returns -1 if not found)
s.startswith('he')      # Check prefix
s.endswith('lo')        # Check suffix
s.isalpha()             # Check if all alphabetic
s.isdigit()             # Check if all digits
s.isalnum()             # Check if alphanumeric

# String building (efficient)
chars = []
chars.append('a')
result = ''.join(chars)  # Better than += for multiple concatenations
```