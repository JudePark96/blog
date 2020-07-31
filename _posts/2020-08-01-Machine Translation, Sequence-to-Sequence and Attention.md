---
toc: true
description: CS224n Lecture 8 Summary
categories: NLP, NMT, seq2seq, attention
---

# Machine Translation, Sequence-to-Sequence and Attention

## 1. Introduction

Seq2Seq 공부를 하는데 블로그들은 알아보기 **(내 기준)** 힘들어서 CS224n 의 강의 슬라이드를 보면서 정리하였다. 근데 내 정리도 보니까 나 혼자밖에 못 알아볼 듯.

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page1.jpg)

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page2.jpg)

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page3.jpg)

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page4.jpg)

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page5.jpg)

![](https://raw.githubusercontent.com/JudePark96/blog/master/_posts/nmt/Page6.jpg)



## 2. Conclusion

- Neural Machine Translation 은 Sequence-to-Sequence 형태의 Neural Network 로 접근함.
- Sequence-to-Sequence 는 Dialogue, Summarization 등의 다양한 Task 에 사용될 수 있음.
- Sequence-to-Sequence 는 Conditional Language Model 이라고 볼 수 있음.
- Decoding 에서 항상 optimal solution 이라고 보장할 수는 없지만 beam search 를 이용하는 것이 효율적임.
- Evaluation Metric 으로서 BLEU 를 사용하지만 불완전함.
  - [BLEU (Bilingual Evaluation Understudy) Score](https://judepark96.github.io/blog/2020/03/22/BLEU-Score-Reasonable.html) 를 참고.
- Information Bottleneck 을 Attention Mecahnism 을 이용하여 해소함.



## 3. Reference

- [CS224n Lecture 8 Slide](http://web.stanford.edu/class/cs224n/slides/cs224n-2020-lecture08-nmt.pdf)

