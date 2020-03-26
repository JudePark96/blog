---
toc: true
description: "Powerful method <DataLoader, Dataset> - PyTorch"
tags: [PyTorch, Deep Learning, NLP]

---

# How to write custom dataset class?

# 1. Introduction
Everyone knows deep learning is getting important nowadays. There is a two popular framework to write the code for deep learning as:

- PyTorch
- TensorFlow

Many of code in GitHub has written in PyTorch or TensorFlow, So the fact is when we want to write simple neural network such as multi-layer perceptron, we should know PyTorch or TensorFlow. It's being simple common sense.

Before writing the neural network, data has to be prepared for training. In this post, I will introduce **how to write custom dataset class** using PyTorch simply.

# 2. Defining Data Format

The problem is what the format is various. For example, the image has usually $width \times height \times channel$, the text has usually $1 \times \text{text length}$ at all.
In this post, data format is **question/answering** such as simple chatbot.

Given data format is as:

| Question | Answering         |
| -------- | ----------------- |
| 12시 땡! | 하루가 또 가네요. |

> In english, Each means "It's 12 pm!", "One another day passed."

# 3. Writing Custom Dataset Class!

In this section, we will explore dataset class, and how to write with respect to given function of class.

First, Dataset is class of pre-prcoessing data in PyTorch. We can write as:

```python
from torch.utils.data import Dataset


class ConversationDataset(Dataset):
	def __init__(self) -> None:
		pass
  
	def __getitem__(self, idx: int) -> Any:
		pass
  
	def __len__(self) -> int:
	    pass
```
The class name is whatever you want. If you want to another name such as **QuestionAnsweingDataset**, It's fine. **Just remember, class name should include what the class means.**

- ```def __init__(self, args1, args2, ...)```

It means initiating class with given arguments. As you know, at this function, initiating properties of class with given arguments. Arguments might be necessity to pre-processing given data.

If we need **question, answer, vocab, max_len** as arguments, the code is as:

```python
def __init__(self, question: list, answer: list, vocab: Vocabulary, max_len: int = 128) -> None:  
	self.question = question  
	self.answer = answer  
	self.vocab = vocab  
	self.max_len = max_len  
	self.tokenizer = Mecab()
```
> Using type-hinting, It's very useful when writing easy to understand.

- ```__getitem__(self, idx: int) -> Any```

This function returns single sequence data. Also, data has to be pre-processed for training at this function.
Idx, the argument is given data index.

What we need is tokenized each text data, the code is as:

```python
def __getitem__(self, idx: int):  
	q_tokenized = [self.vocab.special_tokens[2]] + self.tokenizer.morphs(self.question[idx])  
    a_tokenized = self.tokenizer.morphs(self.answer[idx]) + [self.vocab.special_tokens[3]]  
  
    q_len = len(q_tokenized)  
    a_len = len(a_tokenized)  
  
    q = T.ones(self.max_len).long()  
    a = T.ones(self.max_len).long()  
  
    q_tensor = T.LongTensor([self.vocab.get_token2idx(word)  
                             for word in q_tokenized])  
  
    a_tensor = T.LongTensor([self.vocab.get_token2idx(word)  
                             for word in a_tokenized])
	q[:q_len] = q_tensor  
	a[:a_len] = a_tensor  
  
	return q, a
```
In text pre-processing, we need to convert the text to index of given vocabulary to understand, because computer actually doesn't know what the sentence means if we don't covert.

First, `q_tokenized` is tokenizing given sentence by morpheme unit. For example, `나는 한국어를 공부해` will be `['나', '는', '한국어', '를', '공부', '해']`

`T.ones(self.max_len).long()` is for text padding such as zero-padding of computer vision. Each given length of sentence is various. Some of sentence could be 128, or 64, or 48, and so on. So, we need to define maximum length of sentence with argument of initiating function. In this post, maximum length of sentence is 128.

`T.ones(self.max_len).long()` returns $[1 \times \text{maximum length}]$ shape which contains only 1. The reason I called `T.ones` function, index of `<pad>`token is 1.

`q_tensor` is just storing sentence coverted from tokenized word to following vocabulary index. Shape of `q_tensor` is $[1 \times \text{sentence length}]$. Length of sentence could equal to maximum length which we define luckily, but it's highly unlikely.

`q[:q_len]  = q_tensor`, this statement solve above problem. it returns like `[4, 5, 6, 7, 8, 9, 1, 1, ... , 1]` and it equals to `['나', '는', '한국어', '를', '공부', '해', <pad>, <pad>, ..., <pad>]`.

Pre-processing is done! Now, all we need to write is `return q`.

> You can do the same process with the above method for pre-processing answer.

- `def __len__(self) -> int`

It returns lengths of whole data. I usually use **assert statement** which means, training data and label usually have same length.

```python
def __len__(self) -> int:  
	assert len(self.question) == len(self.answer)  
    return len(self.question)
```

The benefit of using assert statement is when initiating class and call, we can protect ourselves from potential issue. Because, given data format has ground truth: one question - one answer.
So, if we have 1200 questions, then it must have 1200 answers. it's kids stuff right?

# 4. Initiating DataLoader using Custom Dataset

DataLoader is simple, powerful method to bring the batch data automatically. Let's see the code as:

```python
def get_loader(question: list,  
               answer: list,  
               vocab: Vocabulary,  
               max_len:int,  
               batch_size: int,  
               shuffle: bool) -> DataLoader:  
	dataset = ConversationDataset(question, answer, vocab, max_len)  
    return DataLoader(dataset, batch_size=batch_size, shuffle=shuffle)
```
First, we need to initiate dataset class as mentioned at section 3. Then, we have `dataset` variable in function.
All we left is initiating dataloader class following as:

```python
return DataLoader(dataset, batch_size=batch_size, shuffle=shuffle)
```

# 5. Summary

In this post, we figured out how to write custom dataset class in PyTorch, and using dataloader class. It's very convenient, powerful method. It reduces code complexity which means easy to understand.