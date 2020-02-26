---
toc: true
description: Simple Summary of Knowledge Distillation
categories: [knowledge-distillation, nlp]
---
# Knowledge Distillation

## Introduction

NLP 에서 BERT라는 Transformer 를 이용한 Pre-Trained Language Representation 이 나오면서 많은 성능 향상을 이루어냈다. BERT는 기본적으로, 위키피디아, 뉴스 데이터 등과 같은 large corpus 를 **unlabeled data**로 모델을 미리 학습 시킨 후, 특정 task를 가지고 있는 **labeled data 를 이용하여 transfer learning**을 하는 모델이다.

하지만, BERT는 좋은 성능에도 불구하고 굉장히 큰 모델 사이즈를 나타내고 있다. 예를 들어, `BERT-Base, Multilingual Cased`[1] 의 경우 110M 이라는 사이즈를 보여주고 있다. 이는 곧, 재정적 여유가 충분한 회사가 아닌 이상 실제  프로덕션에서 서비스화하기 어려움을 의미한다. 그렇기 때문에, **성능을 보존하면서 모델 사이즈를 경량화하는 방안**이 필요하다고 생각할 수 있다.

이번 글에서는 모델 경량화 방안 중 하나인 Knowledge Distillation 에 대해서 간략하게 소개해보고자 한다.

## Model
Supervised Learning 이라는 접근법을 통해 모델을 학습한다고 가정하자. 그렇다면, 생각할 수 있는 절차는 아래와 같다. :

- 주어진 데이터와 라벨을 전처리한다.
- 모델을 정의 및 학습한다.
- 발생한 loss 를 이용하여 back-propagation 을 한다.

![image-20200226170645740](https://github.com/JudePark96/blog/blob/master/_posts/cross_entropy_probability.png?raw=true)

이미지 클래스 분류라는 과업(CIFAR-10 등)을 기반으로 하면 위와 같은 확률을 통하여 가장 높은 확률 dog 를 고를 것이다. 그 이유는 90% 의 확률로 dog 이라고 예측하였기 때문이다.

여기서 **근본적으로 들 수 있는 의문은 나머지 확률들은 과연 ignored 되도 괜찮은 것인가?** 라는 관점이다.

![t_softmax](https://github.com/JudePark96/blog/blob/master/_posts/t_softmax.png?raw=true)

Geoffery Hinton 은 Distilling the Knowledge in a Neural Network[2] 라는 논문을 통해 Temperature 라는 개념을 도입하여 Target 을 Softer 하게 함으로서 Knowledge 를 일반화한다고 한다. 위 사진의 수식에서 T가 Temperature 이며 T=1 일 때, 일반적인 Softmax 함수와 똑같음을 알 수 있다.

위의 수식을 통하여 one-hot encoding 처럼 만들어진 hard target 을 soft target 분포를 label 로 학습을 하면 충분히 generalized 해서 knowledge 를 transfer 할 수 있다고 한다.

> 이미지 자료는 Dark Knowledge[3] 에서 캡쳐했습니다.

## Experiments

직접 실험을 해보진 않았지만 Dark Knowledge[3] 의 슬라이드에 따르면 MNIST 데이터 집합으로 실험한 결과 좋은 성능을 나타냈다고 한다. 비록 이번 글에선 직접 실험한 걸 소개하진 못했지만 다음 글에선 기회가 된다면 BERT 를 Knowledge Distillation 하였을 때, 어떠한 결과가 나오는지 소개하고자 한다.



## Reference
[1]. [Google-Research BERT](https://github.com/google-research/bert)

[2]. [Distilling the Knowledge in a Neural Network](https://arxiv.org/pdf/1503.02531.pdf)

[3]. [Dark Knowledge](https://www.ttic.edu/dl/dark14.pdf)