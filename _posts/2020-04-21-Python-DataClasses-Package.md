---
toc: true
description: Python - dataclasses package
categories: [Python]
---

# Python - DataClasses Package

## 1. Introduction

Java 로 개발하던 때에는 **Lombok** 이라는 Dependency 를 통해 Constructor, Getter, Setter 등을 쉽게 Wrapping 할 수 있었다. 이는 객체 코드를 작성할 때 많은 양의 코드를 줄여주었다.

예를 들어, 객체를 아래와 같이 작성할 수 있었다.

```java
import lombok.Data;

@Data
public class Student {
    private int id;
    private String name;
}
```

이렇게 하면 기본적인 Constructor, Getter, Setter 등을 *@Data Annotation* 을 통해서 쉽게 할 수 있었다. 이처럼 Java 로 개발할 때는 이런 도구들이 개발 효율성을 높여주었다.

지금은 소프트웨어 엔지니어링을 하지 않고 신경망 설계 및 실험을 진행하고 있지만 이 경우에도 당연히 많은 코드가 쓰이며 그렇기 때문에 어떻게 코드를 효율적으로 빠르게 작성할 수 있는가에 대하여 고민하는 것은 당연한 것 같다. 

기존의 Python3 에서 객체 코드를 작성할 때는 아래와 같이 작성하였다.

```python 
import torch.nn as nn

class Net(nn.Module):
  def __init__(self, q, k, v):
    super.__init__()
    self.q = q
    self.k = k
    self.v = v
```

위와 같은 코드를 작성하면서 시간이 많이 걸렸다고 생각되는 구간은 Constructor 이다. Property 를 일일히 Assgin 해주고 있었기 때문에 손가락을 많이 움직여야했다.

> Java 에도 있는데 Python 에도 혹시 편하게 해주는 것은 없을까? 라는 생각은 계속 해왔었다.

이러한 문제를 없애주기 해소하기 위하여 Python 3.7 부터 추가된 [dataclasses](https://docs.python.org/ko/3/library/dataclasses.html) 라는 Pacakge 를 사용해보도록 하자. 

이 글에서는 간단한 사용 방법만 소개하도록 한다.

## 2. How to use?

```python
from dataclasses import dataclass

@dataclass
class Net:
    q: list
    k: list
    v: list
```

Java 와 비슷하게 *@dataclass* Decorator 로 객체를 Wrapping 해준다.

```python
print(Net([], [], []))
Result => Net(q=[], k=[], v=[])
```

결과는 위와 같이 나오며 성공적으로 Constructor 가 설정되었음을 알 수 있었다.

## 3. Reference

1. [Python Doc - dataclasses](https://docs.python.org/ko/3/library/dataclasses.html)

