---
toc: true
description: TorchText 의 Field 설정
categories: NLP, torch, torchtext

---

# TorchText Field 의 batch_first 는 항상 True 로 설정하자

## 1. 소개

우선 평소에 따로 vocabulary, tokenizer 등의 데이터 전처리 과정에서 필요한 요소들을 직접 코딩해왔었다. 하지만, 이번에는 `TorchText` 를 한 번 사용해보고자 했다. 그 과정에서 나의 어이없는 실수를 소개한다.

> 한줄 요약: torchtext.data.Field() 를 사용할 때 항상 batch_first=True 로 설정하자.

## 2. 어떤 문제가 발생했어?

우선 `json` 학습 데이터를 구축해놓고 이를 TorchText 를 통하여 불렀다. 학습 데이터의 내부 구조는 아래와 같다.

```json
{'text':'text', 'label': 'label'}
...
{'text':'text', 'label': 'label'}
```

이제 어떻게 불러오는지 한 번 보자.

```python
from torchtext.data import Field, Iterator, TabularDataset

SRC = Field(tokenize=lambda x: x.split(" "), lower=True, batch_first=True)
TRG = Field(tokenize=lambda x: x.split(" "), init_token='<sos>', eos_token='<eos>', lower=True, batch_first=True)

dataset = TabularDataset(path='data.json',
                         format='json',
                         fields={
                                 'text':('text', SRC), 
                                 'label': ('label', TRG)}
                        )
```

우선 SRC와 TRG에 해당하는 Field 를 설정한다. TorchText 에서는 Field 내부의 속성들을 지정함으로서 데이터 전처리 의 번거로움을 줄여준다고 한다.

> 위의 코드에선 batch_first=True 로 하였다. False 일 때와 차이점을 아래에서 보여줄 예정이다.

이제 우리가 일상적으로 사용하는 텐서의 형태로 보기 위해서는 아래와 같이 코드를 작성한다.

```python
SRC.build_vocab(dataset)
TRG.build_vocab(dataset)
```

우리가 만들었어야하는 vocabulary 를 위의 2줄로 만들 수가 있다. 옴마가쉬... 그 외에도 `min_freq` 와 같은 속성으로 vocabulary 생성 과정에 조건을 걸 수 있다.

이제 iterator 로 돌려보고 결과를 보자.

```python
BATCH_SIZE = 8

train_iterator = BucketIterator(
    dataset,
    batch_size = BATCH_SIZE,
)

for i, batch in enumerate(train_iterator):
	  print(' '.join([SRC.vocab.itos[i.item()] for i in batch.text[0]]))
    print(' '.join([TRG.vocab.itos[i.item()] for i in batch.label[0]]))
```

```shell
text -> to date , a large number of ... have been stated and the most appropriate algorithm for each application has been determined .

label -> <sos> autonomous exploration __;__ mapping of unknown environments <eos>
```

대충 의도한대로 제대로 나왔다. 그렇다면 만약 `batch_first=False` 로 설정한다면 어떻게 될까?

> 텍스트 길이가 길기 때문에 일부 텍스트와 패딩 토큰을 보기 좋게 하기 위하여 지웠다.

```shell
<sos> <sos> <sos> <sos> <sos> <sos> <sos> <sos>
<sos> <sos> <sos> <sos> <sos> <sos> <sos> <sos>
```

 `batch_first=False` 를 하였을 때는 위처럼 나오게 된다. 옴마가쉬...

## 3. 여기서 나의 실수는?

많은 예제들, 그리고 나의 경험에서 나는 항상 데이터 전처리 과정에서 텐서의 형상을 $[\text{batch_size} \ntimes \text{sequence_length}]$ 의 형태를 띄도록 하였다. 하지만 TorchText 에서는 $[\text{sequence_length} \ntimes \text{batch_size}]$ 의 형태 또한 지원했던 것이다. 그렇기 때문에 Index -> Text 로 변환하였을 때 제대로 표현이 안되었던 것이다. 홀리쉿...

## 4. 결론

- **batch_first** 속성을 확인하자.
- TorchText 는 좋은 거다. 나름대로.
- 토큰화 과정은 **따로 전처리하는 것**이 나은 것 같다.