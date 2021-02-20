---
toc: true
description: 
categories: Natural Language Processing, NLP

---

# mecab-ko-dic 컴파일 에러 해결하기

```
WARNING: `aclocal-1.11' is missing on your system. You should only need it if you modified`acinclude.m4' or `configure.ac'. You might want to install the`Automake' and `Perl' packages. Grab them from any GNU archive site. configure.ac:2: error: possibly undefined macro: AM_INIT_AUTOMAKE If this token and others are legitimate, please use m4_pattern_allow. See the Autoconf documentation. make: ***
```

`./configure` 와 `make` 을 하였을 때 위와 같은 에러로 MeCab 사전이 컴파일되지 않는 경우가 발생한다. 그럴 경우에는 아래와 같이 하면 된다.

```bash
autoreconf
./configure
make
```

아마도 autoconf, automake 관련 에러로 생각되는데 autoreconf 를 하면 잘 된다.