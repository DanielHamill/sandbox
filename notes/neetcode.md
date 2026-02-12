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