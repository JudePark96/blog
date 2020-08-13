---
toc: true
description: Graph Convolutional Networks for Text Classification Summary
categories: graph-representation, graph, page-rank, nlp, graph-neural-network
---

# Graph Convolutional Networks for Text Classification

# 1. 초록은 뭐라고 말하고 있어 ?

기존의 텍스트 분류 과업을 하기 위한 몇 몇 연구에서는 convolutional neural networks 를 사용하였다. 본 논문에서는 convolutional neural networks 가 아닌 graph convolutional networks 를 텍스트 분류 과업에 적용하는 것을 제안한다.

# 2. 주요 기여점은 뭐야 ?

- We propose a novel graph neural network method for text classification. To the best of our knowledge, this is the first study to model a whole corpus as a heterogeneous graph and learn word and document embeddings with graph neural networks jointly.
- Results on several benchmark datasets demonstrate that our method outperforms state-of-the-art text classification methods, without using pre-trained word embeddings or external knowledge. Our method also learn predictive word and document embeddings automatically.

# 3. 이전의 접근과는 뭐가 다른 것 같아 ?

기존의 텍스트 분류 과업을 위한 주요 딥러닝 모델로는 CNN, LSTM 등이 있다. 이러한 모델들은 local consecutive word sequences 의 semantic, synthetic information 을 잘 caputre 할 수 있지만 global word co-occurence 를 무시할 수 있는 가능성이 있다.

본 논문에서는 이전의 접근과는 다르게 graph representation 을 학습하여 classification task 를 수행한다는 점이다. 이를 수행하기 위하여 corpus -> graph 의 방법으로 PMI, TF-IDF 를 소개하였고, PMI 의 경우가 성능이 더 좋음을 알려준다. 또한 two-layer GCN 이 one-layer GCN 보다 성능이 좋았지만 더 많은 layer 는 성능에 큰 의미가 없음을 나타내었다.

**기존의 CNN, LSTM 을 GNN 계열의 신경망으로 대체한다는 것 자체가 geometric 의 관점으로 보았을 때 큰 차이가 있다.**

# 4. 어떤 걸 제안할 수 있을까 ?

- encoding method (corpus -> graph)
- residual connection
- 한국어 데이터 집합에 적용

# 5. Reference

- [Graph Convolutional Networks for Text Classification](https://arxiv.org/abs/1809.05679)