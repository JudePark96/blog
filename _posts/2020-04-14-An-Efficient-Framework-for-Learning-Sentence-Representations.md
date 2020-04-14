---
toc: true
description: Summary of An Efficient Framework for Learning Sentence Representations
categories: [embedding, NLP, deep-learning]
---

# An Efficient Framework for Learning Sentence Representations

<script async class="speakerdeck-embed" data-id="c83e26401b0a4168a3d48c26253be6d8" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>

## 1. Summary

자연어처리의 여러 과업들을 연구하는 일의 필수적인 요소는 **임베딩**이다. Discrete Variables 를 Continuous Vectors 로 다룰 수 있게 해주며 신경망을 통하여 구축한 임베딩은 각 Vector 가 의미를 가지고 있다. 이러한 임베딩 기법에는 **Word2Vec, Glove, FastText** 가 있는데 이 중의 Word2Vec 을 간단히 살펴보고 간다.

Word2Vec[1] 에서 **Distributional Hypothesis** 를 기반하여 Unsupervised Learning 을 하는 신경망을 구축하였다. 그렇다면 Distributional Hypothesis 는 무엇일까? **비슷한 위치에서 발생하는 단어들은 그 의미도 유사할 것이라는 가정**이다. 간단한 예시를 아래에서 잠깐 언급해보겠다.

- 나는 [빈 칸] 을 보았어. - 예시 1

예시 1의 문장에 빈 칸에 어떠한 단어를 넣을까? 굉장히 수많은 단어가 가능할 것이다. 예를 들어 개, 고양이 등이 가능할 것이다. 위의 예시 1처럼 주변의 단어를 가지고 [빈 칸] 의 단어를 예측하는 것이 Word2Vec 의 **CBOW(Continuous Bag of Words)** 이다.

- [빈 칸] 고양이 [빈 칸] - 예시 2

예시 1과 다르게 예시 2는 주어진 단어를 바탕으로 주변 단어들이 무엇인지 예측하는 것이 Word2Vec 의 **Skip-Gram** 이다.

An Efficient Framework for Learning Sentence Representations 에서는 이러한 Distributional Hypothesis 를 Consecutive Sentences 에 적용한다. 그렇다면 Sentence Embedding 에서의 Distributional Hypothesis 는 **비슷한 맥락에 있는 문장들은 그 의미도 유사할 것이라는 가정**으로 생각할 수 있다. 이 가정을 바탕으로 신경망을 구축한다.

신경망과 관련된 자세한 이야기는 슬라이드를 참고하면 될 것 같다.

## 2. Reference

[1]. Efficient Estimation of Word Representations in Vector Space