---
toc: true
description: Adding Special Tokens To HuggingFace BertTokenizer
categories: NLP
---

# Adding Special Tokens To HuggingFace BertTokenizer

## 1. Introduction

Sometimes, except pre-defined special tokens, such as **[SEP], [CLS]**, we need to add special tokens to BertTokenizer. **In this post, I Introduce the way to add special tokens to BertTokenizer.**

## 2. Method

First, we need to define speical token what we will add. In this post, adding special token will be **'[eou]'** which means **End of Utterances**.

```python
eou_token = '[eou]'
```

Now, add eou_token to BertTokenizer.

```python
tokenizer = BertTokenizer.from_pretrained(model_name)
special_tokens_dict = {'additional_special_tokens': [decode_sep]}

orig_num_tokens = len(tokenizer)
num_added_tokens = tokenizer.add_special_tokens(special_tokens_dict)
total_num_tokens = orig_num_tokens + num_added_tokens
```

We got the tokenizer we added the special tokens, and total number of vocab. After this stage, we need to change the embedding size of BertModel.

```python
bert = BertModel.from_pretrained(model_name)
bert.resize_token_embeddings(total_num_tokens)
```

Done!