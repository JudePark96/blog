---
toc: true
description: 편향-분산 간의 Trade-off
categories: machine-learning
---

# Bias-Variance Trade off

Supervised Learning 을 할 때, 설계한 모델의 Predicted Value 와 실제 Label Value 간의 차이를 Error 라고 한다.

이 Error 는 Variance, Bias, Noise 로 이루어져 있는데 $Error(x) = Var(x) + Bias(x) + Noise(x)$ 이다.

Error 가 어떻게 위의 언급한 것과 같이 되는지 알아본다.


# Decomposition

- $y = f(x) + \epsilon$
	- $y$ 는 $\text{noise } \epsilon$ 을 포함한 함수이다. 이 때, noise 는 평균이 0, 표준편차는 $\sigma^2$ 인 가우시안 분포를 따른다고 가정한다.
- $g(x) = wx + b$
	- 학습할 hypothesis function 이다.
- $Error = E[(y-g(x))^2]$
	- hypothesis function 을 바탕으로 한 error function 이다.
- $y'=f(x')+\epsilon$

----


$$
E[(y'-g(x'))^2] \\
= E[g(x')^2 - 2g(x')y' + y'^2] \\
= Var(g(x')) + E[g(x')]^2 - 2E[g(x')]f(x') + Var(y')+f(x')^2 \\
= Var(g(x')) + (E[g(x')]-f(x'))^2 + Var(\epsilon) \\
= Var(g(x')) + (E[g(x')]-f(x'))^2 + \sigma^2
$$


----

Low Bias-High Variance 인 상태일 수록 Overfitting 이고, High Bias-Low Variance 인 상태일 수록 Underfitting 이라고 할 수 있다.

우리는 적절한 Bias, Variance 를 갖는 모델을 설계해야함을 알 수 있다.
