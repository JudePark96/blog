---
toc: true
description: .gitignore 가 동작하지 않아!
categories: github, git

---

# .gitignore 가 동작하지 않아! 어떻게 해야해!?

## 1. 어떤 문제가 발생했어?

나는 항상 `.gitignore` 를 작성하고 프로젝트를 시작하는데 용량이 큰 바이너리 파일, 불필요한 환경 구축 폴더 등을 올리지 않기 위해서다. 그런데 평소대로 했는데 .gitignore 에 작성한대로 동작을 하지 않았다

## 2. 어떻게 해결해?

```shell
git rm -r --cached .
git add .
git commit -m "remove git cached files"
git push origin master
```

이러면 해결이 되더라...!
