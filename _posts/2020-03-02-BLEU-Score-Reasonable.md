---
toc: true
description: "Evaluation Metric, BLEU, Is It Really Reasonable?"
tags: [Deep Learning, NLP, Evaluation Metric]
---

# BLEU (Bilingual Evaluation Understudy) Score

최근, 연구 주제를 정하며 대화형 데이터에 대한 evaluation metric에 대하여 생각해볼 필요가 있어짐에 따라 BLEU Score에 대하여 찾아보게 되었다. BLEU에 대한 설명과 어떠한 문제점을 내포하고 있는지 간단하게 서술해본다.

$$BLEU = min(1, \frac{\text{output length(prediction)}}{\text{reference length(target)}})(\prod_i^4precision_i)^\frac{1}{4}$$

BLEU 란 evaluation metric 으로서 주어진 데이터 X 가 순서성을 가진 단어로, Y 또한 X 와 마찬가지로 이루어진 경우에 사용되며 번역, 요약과 같은 과업에 사용된다.

- $n$-gram overlap 을 통하여 얼마나 겹치는지
- 문장 길이에 대한 과적합 보정
- 같은 단어가 연속적으로 나올 때 과적합되는 것을 보정

# Is It Really Reasonable?

BLEU 의 수식을 간단히 요약하자면 Target Sentence 와 Predicted Sentence 사이의 $n$-gram overlap 을 통하여 문장의 유사성을 살펴보는 것이다. 그렇다면, 이는 과연 합리적인 evaluation metric 인지 고심해봐야한다.

```
[1] Dialogue Context
Speaker 1: Hey! What are you doing here?
Speaker 2: I'm just shopping.
Query: What are you shopping for?
Generated Response: Some new clothes
Reference Response: I want buy gift for my mom!
```
위의 대화 예시는 발화자 1이 "야! 너 여기서 뭐해?"라는 질문에 발화자 2가 "난 그냥 쇼핑하지." 라는 대화이다. 그리고 다음 발화인 "쇼핑 뭐 하는데?" 라는 말에 응답 문장으로서 "그냥 새 옷 조금"라는 생성된 문장과 "어머니를 위해 옷을 사고 싶어!"라는 정답 문장이다.

각자가 evaluator 가 되어 human evaluation 을 해본다면 정답 문장과 생성 문장, 모두 자연스러움을 느낄 수 있을 것이다.

하지만, 위의 대화 예시를 BLEU score 로 계산해본다면 zero-score 를 받는다. 이는 $n$-gram overlap 을 이용한 평가가 human judgement 와는 상관관계가 떨어진다는 것을 의미하며 evaluation stage 에서 semantic methodology 가 고려되야한다는 것을 알 수 있다.

# Reference
[1]. [Better Automatic Evaluation of Open-Domain Dialogue Systems with Contextualized Embeddings]([https://arxiv.org/abs/1904.10635](https://arxiv.org/abs/1904.10635))