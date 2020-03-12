---
toc: true
description: MeCab 설치 에러 간단 해결
categories: [mecab, nlp]
---

# Mac OS X 에서 MeCab 설치 에러 해결

## 소개

자연어처리 데이터를 전처리할 때 필수적으로 필요한 것은 형태소 분석기를 통하여 토큰화(tokenization)을 하는 것이다. 한국어의 경우, MeCab이나 꼬꼬마 형태소 분석기 또는 카카오에서 만든 형태소 분석기 등을 사용한다.

필자의 개발 환경은 Mac OS X 인데, 이 환경에서 설치할 때 약간의 에러가 발생한다. 이 글에서는 이 에러를 어떻게 해결하는지 알아본다.

## 에러 해결

에러는 크게 2가지가 발생한다.

- `ldconfig: command not found`

  - ```shell
    sudo update_dyld_shared_cache
    ```

- `error: command 'gcc' failed with exit status`[1]

  - ```shell
    export MACOSX_DEPLOYMENT_TARGET=10.10
    CFLAGS='-stdlib=libc++' pip install konlpy
    ```
    
- `mecab install error`
  - ```shell
    bash <(curl -s https://raw.githubusercontent.com/konlpy/konlpy/master/scripts/mecab.sh)
    ```

위의 명령어를 수행하면 정상적으로 설치가 진행된다.

## Reference

[1]. [Mac OS konlpy 설치오류 #224](https://github.com/konlpy/konlpy/issues/224#issuecomment-455439009)
