---
toc: true
description: Rotating 2D Array 90 Degrees in One Line
categories: [Algorithm, Python]
---

# Rotating 2D Array 90 Degrees In Python

Sometimes, we have to rotate the given 2d array to solve the algorithm. For example, in this [coding test]([https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/](https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/)), Question 4.

In this post, I will show you how to rotate given 2d array in simple way.

# Concept
$$
M=
  \begin{bmatrix}
    1 & 2 & 3  \\
    4 & 5 & 6 \\
    7 & 8 & 9
  \end{bmatrix}
$$
Above given matrix is $N \times N$. What if we rotate 90 degrees above matrix?

$$
M =
  \begin{bmatrix}
    7 & 4 & 1  \\
    8 & 5 & 2 \\
    9 & 6 & 3
  \end{bmatrix}
$$
Result is above matrix. I think if i have to write in Java or C, it would be bothering me. So, Python.

- Steps :
	- First of all, we have to reverse the given matrix.
	- Second of all, **zip(python) it**

# Code

First, we need to define the matrix like as follows:

```python
matrix = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
```

As I mentioned, first we have to reverse the matrix. So,

```python
matrix[::-1] # Reverse!
```

Last step is zipping it.

```python
matrix = list(zip(*matrix[::-1]))
```

Result is as follows:

```
[(7, 4, 1), (8, 5, 2), (9, 6, 3)]
```

