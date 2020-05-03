---
toc: true
description: Supervised Learning, Linear Regression - CS229 notes
categories: [machine-learning, supervised-learning]
---

# Supervised Learning, Linear Regression

### 1. Supervised Learning

Supervised Learning 이란 주어진 $feature X$ 를 이용하여 $target Y$ 를 예측하는 것이다. $(x_i, y_i)$ 는 하나의 training example 이며 ${(x_i, y_i);i = 1, ..., n}$ 를 training set 으로 표현할 수 있다.

위의 Notation 을 바탕으로 정리하자면 주어진 training set 을 바탕으로 $target Y$ 를 예측하는 $h(x)$ 를 학습하는 것이다. 이 $h(x)$ 를 Hypothesis 라고  부른다.

$target Y$ 가 continuous 하다면 regression problem 이고, $target Y$ 가 discrete 하다면 classification problem 으로 부를 수 있다.

### 2. Linear Regression

$X$ 가 2개의 feature 를 가지고 있다고 하자. 그렇다면 $h(x)$ 는 아래와 같이 될 수 있다.

$$h(x) = \theta_0 + \theta_1x_1 + \theta_2x_2 $$

위의 수식은 linear function 을 통하여 y 로 approximate 하는 것이다. 여기서 $\theta$ 는 parameters 이며 weights 로도 불린다. 이 $\theta$ 는 $x$ 를 $y$ 로 vector space 에서 mapping 하는 것을 의미하며 그렇기 때문에 $\theta$ 가 잘 학습되는 것이 중요하다.

어떻게 좋은 $\theta$ 를 얻을 수 있을까? Linear Regression 을 하는 목적은 주어진 $feature X$ 를 이용하여 $target Y$ 에 근사시키는 것이다. 이를 위해 **Cost Function** 을 사용한다. 수식은 아래와 같다.

$J(\theta) = \frac{1}{2}\sum_{i=1}^n(h_{\theta}(x^{i}) - y^i)^2 $

Ordinary Least Squares 를 의미하며 수식을 직관적으로 바라보면 $h(x^i)$ 와 $y^i$ 간의 잔차를 제곱한 것이다. 이는 $y$ 와 $h_{\theta}(x)$ 간의 error 를 의미하며 좋은 $\theta$ 를 얻기 위해서 error 를 줄여야할 것이다.

우리는 $J(\theta)$ 를 최소화(minimize)하는 $\theta$ 를 찾고 싶다. 그렇기 때문에 **Gradient Descent** 를 사용한다.

$\theta_j := \theta_j - \alpha \frac{\partial}{\partial\theta_j}J(\theta)$

$\alpha$ 는 learning rate 를 의미한다. 매 step 마다 $J(\theta)$ 를 최소화할 것이며 결국 수렴할 것이다. right hand side 의 partial derivative term 을 풀어보면 아래와 같다.

$\frac{\partial}{\partial\theta_j}J(\theta) = (h_\theta(x) - y)x_j$

그렇기 때문에 update rule 은 아래와 같다.

$\theta_j := \theta_j + \alpha(y^i-h_{\theta}(x^i)x^i_j))$

위의 rule 을 **least mean squares update rule** 이라고 불린다.

### 3. Conclusion

1. Supervised Learning 은 $h(x) :\rightarrow Y$, 즉 $y$ 로 근사시키는 $h(x)$ 를 만드는 것이다.
2. $J(\theta)$ 를 minimize 하기 위하여 Gradient Descent 를 사용한다.
3. Linear Regression 에서 update rule 로서 least mean squares update rule 을 사용한다.