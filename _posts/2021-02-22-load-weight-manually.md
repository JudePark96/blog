---
toc: true
description: Load weights of model manually.
categories: NLP, torch

---

# How to load weight of the part of a pre-trained model in PyTorch?

We usually do pre-train language models but depends on model configuration, there need to load weight manually. For example, what if we have weights of 6 layers and the structure of the given pre-trained model is 12 layers, then how to load the weights into the given pre-trained model?

Usually, there is a succinct method to load weights; `load_state_dict()`. But, mentioned above, we can’t use `load_state_dict()`.

Here is the thing;

```python
weights = model.state_dict()
lm_dict = lm.state_dict()

weights = {k: v for k, v in weights.items() if k in lm_dict}
lm_dict.update(weights)
lm.load_state_dict(lm_dict)
```
