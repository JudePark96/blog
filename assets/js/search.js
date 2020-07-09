
var documents = [{
    "id": 0,
    "url": "https://JudePark96.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://JudePark96.github.io/about/",
    "title": "About Me",
    "body": "Eunhwan Park Seoul, Republic of Korea. judepark@kookmin. ac. kr Hi, I am student in the Department of Computer Science at Kookmin University. If you want to know about me in details, please see my curriculum vitae "
    }, {
    "id": 2,
    "url": "https://JudePark96.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://JudePark96.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://JudePark96.github.io/%EC%97%B0%EA%B5%AC/2020/07/06/%ED%95%98%EB%B0%98%EA%B8%B0-%EC%97%B0%EA%B5%AC-%EC%A3%BC%EC%A0%9C%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B3%B5%EB%B6%80-%EB%AA%A9%EB%A1%9D.html",
    "title": "하반기 연구 주제를 위한 공부 목록",
    "body": "2020/07/06 -  연구 주제     Keyphrase 추출/생성   Named Entity Recognition    공부 목록     Stanford NLP chap 2-3, 8, 12-15   관련 논문 읽기   ICLR 2020 최근 논문 읽기    해야할 일     연구 주제 실험   다양한 연구 주제 생각   "
    }, {
    "id": 5,
    "url": "https://JudePark96.github.io/machine-learning/2020/06/22/Bias-Variance-tradeoff.html",
    "title": "Bias-Variance Trade off",
    "body": "2020/06/22 - Supervised Learning 을 할 때, 설계한 모델의 Predicted Value 와 실제 Label Value 간의 차이를 Error 라고 한다. 이 Error 는 Variance, Bias, Noise 로 이루어져 있는데 $Error(x) = Var(x) + Bias(x) + Noise(x)$ 이다. Error 가 어떻게 위의 언급한 것과 같이 되는지 알아본다. Decomposition $y = f(x) + \epsilon$     $y$ 는 $\text{noise } \epsilon$ 을 포함한 함수이다. 이 때, noise 는 평균이 0, 표준편차는 $\sigma^2$ 인 가우시안 분포를 따른다고 가정한다.     $g(x) = wx + b$     학습할 hypothesis function 이다.     $Error = E[(y-g(x))^2]$     hypothesis function 을 바탕으로 한 error function 이다.     $y’=f(x’)+\epsilon$Low Bias-High Variance 인 상태일 수록 Overfitting 이고, High Bias-Low Variance 인 상태일 수록 Underfitting 이라고 할 수 있다. 우리는 적절한 Bias, Variance 를 갖는 모델을 설계해야함을 알 수 있다. "
    }, {
    "id": 6,
    "url": "https://JudePark96.github.io/%EB%AF%B8%EB%B6%84/2020/06/06/sigmoid.html",
    "title": "Sigmoid Derivation",
    "body": "2020/06/06 - 우선 $u = 1+e^{-x}$ 로 한다면 아래와 같이 된다. 이제 이를 미분하는 과정은 아래와 같다. "
    }, {
    "id": 7,
    "url": "https://JudePark96.github.io/%EC%97%AC%EB%A6%84%EB%B0%A9%ED%95%99,/%EB%8C%80%ED%95%99%EC%83%9D/2020/05/30/%EC%97%AC%EB%A6%84%EB%B0%A9%ED%95%99.html",
    "title": "여름 방학동안 뭐하지 ?",
    "body": "2020/05/30 - 이번 글만큼은 약간 러프한 나의 생각을 나열해보자! 러프한 생각 나열이니 글씨 말투도 러프하게 하자!  회사 인턴 AI Rush 인라이플 KorQuAD Challenge 마무리 EmotionGIF 2020 밑바닥부터 시작하는 딥러닝 1~2 복습 기초 수학 복습 운동 (aka. 건강한 삶)연구와 관련된 모든 것을 지탱할 수 있는 나의 비장의 무기.  하하하하!!! 꺄르륵!!! 내가 지금까지 이걸 아껴두고 있었지!!! 열심히 해야징 쿄쿄쿄… "
    }, {
    "id": 8,
    "url": "https://JudePark96.github.io/algorithm/2020/05/16/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-(Python).html",
    "title": "프로그래머스 - 모의고사 (Python)",
    "body": "2020/05/16 - 문제 설명: 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다. 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, …2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, …3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, … 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요. 제한 조건 시험은 최대 10,000 문제로 구성되어있습니다.  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요. 입출력 예      answers   return         [1,2,3,4,5]   [1]       [1,3,2,4,2]   [1,2,3]   입출력 예 설명입출력 예 #1  수포자 1은 모든 문제를 맞혔습니다.  수포자 2는 모든 문제를 틀렸습니다.  수포자 3은 모든 문제를 틀렸습니다. 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다. 입출력 예 #2  모든 사람이 2문제씩을 맞췄습니다. 문제 풀이: 이 문제의 theme 은 완전탐색이다. 주어진 패턴과 답안을 비교하며 맞은 수를 각 수포자마다 기록하고 형식에 맞게만 반환해주면 되는 문제이다. def solution(answers):  p1 = ([1, 2, 3, 4, 5] * (int(len(answers) / 5) + 1))  p2 = ([2, 1, 2, 3, 2, 4, 2, 5] * (int(len(answers) / 8) + 1))  p3 = ([3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * (int(len(answers) / 10) + 1))  calc = lambda x, y: sum(list(map(lambda x, y: x == y, x, y)))  result_list = [calc(p1, answers), calc(p2, answers), calc(p3, answers)]  return [i + 1 for i, result in enumerate(result_list) if max(result_list) == result]수포자가 찍는 방식을 패턴이라고 하자. 그렇다면 그 패턴은 최소한 패턴 *= (정답 수 / 패턴 길이) + 1 만큼 될 것이다. p1~p3 가 그렇게 초기화된 것이다. 그리고 calc 이라는 lambda function 을 선언해준다. 이 lambda function 에서 맞은 것을 기록하며 만약 5개 중 2개가 맞았다면 [True, False, True, False, False] 와 같은 방식으로 기록될 것이다. (이것은 예시일 뿐이다. ) 그렇다면 이 배열을 sum 함수로 계산하면 2가 될 것이다. 그리고 답안 형태에 맞게 변환해주고 반환해주면 정답이 풀린다.  Python 의 Generator 를 이용하면 (cycle 과 같은) 공간복잡도 또한 해결할 수 있으나, 최대 10,000 문제라는 조건과 쉬운 문제의 특성 상 cycle 을 사용하지 않았다. 출처: 프로그래머스 - 모의고사 "
    }, {
    "id": 9,
    "url": "https://JudePark96.github.io/machine-learning/supervised-learning/2020/05/03/Supervised-Learning-1.html",
    "title": "Supervised Learning, Linear Regression",
    "body": "2020/05/03 - 1. Supervised Learning: Supervised Learning 이란 주어진 $feature X$ 를 이용하여 $target Y$ 를 예측하는 것이다. $(x_i, y_i)$ 는 하나의 training example 이며 ${(x_i, y_i);i = 1, …, n}$ 를 training set 으로 표현할 수 있다. 위의 Notation 을 바탕으로 정리하자면 주어진 training set 을 바탕으로 $target Y$ 를 예측하는 $h(x)$ 를 학습하는 것이다. 이 $h(x)$ 를 Hypothesis 라고 부른다. $target Y$ 가 continuous 하다면 regression problem 이고, $target Y$ 가 discrete 하다면 classification problem 으로 부를 수 있다. 2. Linear Regression: $X$ 가 2개의 feature 를 가지고 있다고 하자. 그렇다면 $h(x)$ 는 아래와 같이 될 수 있다. 위의 수식은 linear function 을 통하여 y 로 approximate 하는 것이다. 여기서 $\theta$ 는 parameters 이며 weights 로도 불린다. 이 $\theta$ 는 $x$ 를 $y$ 로 vector space 에서 mapping 하는 것을 의미하며 그렇기 때문에 $\theta$ 가 잘 학습되는 것이 중요하다. 어떻게 좋은 $\theta$ 를 얻을 수 있을까? Linear Regression 을 하는 목적은 주어진 $feature X$ 를 이용하여 $target Y$ 에 근사시키는 것이다. 이를 위해 Cost Function 을 사용한다. 수식은 아래와 같다. $J(\theta) = \frac{1}{2}\sum_{i=1}^n(h_{\theta}(x^{i}) - y^i)^2 $ Ordinary Least Squares 를 의미하며 수식을 직관적으로 바라보면 $h(x^i)$ 와 $y^i$ 간의 잔차를 제곱한 것이다. 이는 $y$ 와 $h_{\theta}(x)$ 간의 error 를 의미하며 좋은 $\theta$ 를 얻기 위해서 error 를 줄여야할 것이다. 우리는 $J(\theta)$ 를 최소화(minimize)하는 $\theta$ 를 찾고 싶다. 그렇기 때문에 Gradient Descent 를 사용한다. $\theta_j := \theta_j - \alpha \frac{\partial}{\partial\theta_j}J(\theta)$ $\alpha$ 는 learning rate 를 의미한다. 매 step 마다 $J(\theta)$ 를 최소화할 것이며 결국 수렴할 것이다. right hand side 의 partial derivative term 을 풀어보면 아래와 같다. $\frac{\partial}{\partial\theta_j}J(\theta) = (h_\theta(x) - y)x_j$ 그렇기 때문에 update rule 은 아래와 같다. $\theta_j := \theta_j + \alpha(y^i-h_{\theta}(x^i)x^i_j))$ 위의 rule 을 least mean squares update rule 이라고 불린다. 3. Conclusion:  Supervised Learning 은 $h(x) :\rightarrow Y$, 즉 $y$ 로 근사시키는 $h(x)$ 를 만드는 것이다.  $J(\theta)$ 를 minimize 하기 위하여 Gradient Descent 를 사용한다.  Linear Regression 에서 update rule 로서 least mean squares update rule 을 사용한다. "
    }, {
    "id": 10,
    "url": "https://JudePark96.github.io/deep-learning/2020/04/30/Real-Time-Checking-NVIDIA-SMI.html",
    "title": "Real-Time Checking NVIDIA-SMI",
    "body": "2020/04/30 - 1. Introduction: 딥러닝 신경망을 학습하다보면 GPU 상태를 확인해볼 필요가 있다. 그 명령어가 nvidia-smi 인데 이거를 매번 타이핑하는 것은 굉장히 비효율적인 행동이다. 리눅스 명령어를 통하여 실시간 모니터링이 가능하도록 하자.  cuda 관련 환경 구축이 전부 되어있음을 가정한다. 2. Monitoring: 아래의 명령어를 터미널에서 타이핑한다.  watch -d -n 0. 5 nvidia-smi그러면 아래와 같이 화면이 나온다.  위의 명령어는 nvidia-smi 를 0. 5초에 한 번씩 새로고침되도록 하는 명령어이다. 이를 통하여 실시간 모니터링이 가능하다. "
    }, {
    "id": 11,
    "url": "https://JudePark96.github.io/python/2020/04/21/Python-DataClasses-Package.html",
    "title": "Python - DataClasses Package",
    "body": "2020/04/21 - 1. Introduction: Java 로 개발하던 때에는 Lombok 이라는 Dependency 를 통해 Constructor, Getter, Setter 등을 쉽게 Wrapping 할 수 있었다. 이는 객체 코드를 작성할 때 많은 양의 코드를 줄여주었다. 예를 들어, 객체를 아래와 같이 작성할 수 있었다. import lombok. Data;@Datapublic class Student {  private int id;  private String name;}이렇게 하면 기본적인 Constructor, Getter, Setter 등을 @Data Annotation 을 통해서 쉽게 할 수 있었다. 이처럼 Java 로 개발할 때는 이런 도구들이 개발 효율성을 높여주었다. 지금은 소프트웨어 엔지니어링을 하지 않고 신경망 설계 및 실험을 진행하고 있지만 이 경우에도 당연히 많은 코드가 쓰이며 그렇기 때문에 어떻게 코드를 효율적으로 빠르게 작성할 수 있는가에 대하여 고민하는 것은 당연한 것 같다. 기존의 Python3 에서 객체 코드를 작성할 때는 아래와 같이 작성하였다. import torch. nn as nnclass Net(nn. Module): def __init__(self, q, k, v):  super. __init__()  self. q = q  self. k = k  self. v = v위와 같은 코드를 작성하면서 시간이 많이 걸렸다고 생각되는 구간은 Constructor 이다. Property 를 일일히 Assgin 해주고 있었기 때문에 손가락을 많이 움직여야했다.  Java 에도 있는데 Python 에도 혹시 편하게 해주는 것은 없을까? 라는 생각은 계속 해왔었다. 이러한 문제를 없애주기 해소하기 위하여 Python 3. 7 부터 추가된 dataclasses 라는 Pacakge 를 사용해보도록 하자. 이 글에서는 간단한 사용 방법만 소개하도록 한다. 2. How to use?: from dataclasses import dataclass@dataclassclass Net:  q: list  k: list  v: listJava 와 비슷하게 @dataclass Decorator 로 객체를 Wrapping 해준다. print(Net([], [], []))Result =&gt; Net(q=[], k=[], v=[])결과는 위와 같이 나오며 성공적으로 Constructor 가 설정되었음을 알 수 있었다. 3. Reference:  Python Doc - dataclasses"
    }, {
    "id": 12,
    "url": "https://JudePark96.github.io/embedding/machine-learning/deep-learning/graph/2020/04/15/CS224W-Machine-Learning-with-Graph-(1).html",
    "title": "CS224W - Machine Learning w/ Graph (1)",
    "body": "2020/04/15 -  Why Networks?Networks are a general language for describing complex systems of interacting entities.  Networks     Society :→ collection of 7+ billion individuals.    Communication systems :→ it links electronic devices   Interaction :→ between genes/proteins regulate life   Thoughts :→ it is hidden in the connections between billions of neurons in our brain    Type of Networks     Social networks   Economic networks   Communication networks   Information networks   Internet   Networks of neurons    Way to Analyze Networks     Node classification :→ predict the type/color of a given node   Link prediction :→ predict whether two nodes are linked   Community detection :→ identify densely linked clusters of nodes   Network Similarity :→ measure similarity of two nodes/networks    Embedding Node     Let there is $Node u$, $Node v$.  When embedding, our goal is mapping nodes to $d$-dimensional embeddings such that nodes with similar network neighbourhoods are embedded close together.          My thinking :→ As I think, in Natural Language Area, between each word of given sentence, they have a certain relationship which they have to be represented by network representation.            Components of a Network     Object ($N$)         nodes, vertices          Interactions ($E$)         links, edges          System ($G(N, E)$)         network, graph           Directed VS Undirected Graphs     Directed         links :→ directed /w arcs     examples :→ phone calls, following on Twitter.           Undirected         links :→ undirected which means it is symmetrical, reciprocal matrix.      example :→ collaborations, friendship on Facebook           Bipartite Graph     it is a graph whose nodes can be divided into two disjoint sets $U$ and $V$ such that every link connects a node in $U$ to one in $V$ which means $U$ and $V$ are independent sets.    Examples         Authors - Papers     Actors - Movies     Users - Moveis     Recipes - Ingredients     Folded Network             Author collaboration networks       Movie co-rating networks                      Conclusion     As mentioned above, Networks are a general language for describing complex systems of interacting entities. No matter what you are in position it means domain, well-representation by graph will be powerful method to solve the given tasks.    "
    }, {
    "id": 13,
    "url": "https://JudePark96.github.io/embedding/nlp/deep-learning/2020/04/14/An-Efficient-Framework-for-Learning-Sentence-Representations.html",
    "title": "An Efficient Framework for Learning Sentence Representations",
    "body": "2020/04/14 - 1. Summary: 자연어처리의 여러 과업들을 연구하는 일의 필수적인 요소는 임베딩이다. Discrete Variables 를 Continuous Vectors 로 다룰 수 있게 해주며 신경망을 통하여 구축한 임베딩은 각 Vector 가 의미를 가지고 있다. 이러한 임베딩 기법에는 Word2Vec, Glove, FastText 가 있는데 이 중의 Word2Vec 을 간단히 살펴보고 간다. Word2Vec[1] 에서 Distributional Hypothesis 를 기반하여 Unsupervised Learning 을 하는 신경망을 구축하였다. 그렇다면 Distributional Hypothesis 는 무엇일까? 비슷한 위치에서 발생하는 단어들은 그 의미도 유사할 것이라는 가정이다. 간단한 예시를 아래에서 잠깐 언급해보겠다.  나는 [빈 칸] 을 보았어. - 예시 1예시 1의 문장에 빈 칸에 어떠한 단어를 넣을까? 굉장히 수많은 단어가 가능할 것이다. 예를 들어 개, 고양이 등이 가능할 것이다. 위의 예시 1처럼 주변의 단어를 가지고 [빈 칸] 의 단어를 예측하는 것이 Word2Vec 의 CBOW(Continuous Bag of Words) 이다.  [빈 칸] 고양이 [빈 칸] - 예시 2예시 1과 다르게 예시 2는 주어진 단어를 바탕으로 주변 단어들이 무엇인지 예측하는 것이 Word2Vec 의 Skip-Gram 이다. An Efficient Framework for Learning Sentence Representations 에서는 이러한 Distributional Hypothesis 를 Consecutive Sentences 에 적용한다. 그렇다면 Sentence Embedding 에서의 Distributional Hypothesis 는 비슷한 맥락에 있는 문장들은 그 의미도 유사할 것이라는 가정으로 생각할 수 있다. 이 가정을 바탕으로 신경망을 구축한다. 신경망과 관련된 자세한 이야기는 슬라이드를 참고하면 될 것 같다. 2. Reference: [1]. Efficient Estimation of Word Representations in Vector Space "
    }, {
    "id": 14,
    "url": "https://JudePark96.github.io/2020/03/26/powerful-method-dataloader-dataset.html",
    "title": "How to write custom dataset class?",
    "body": "2020/03/26 - 1. IntroductionEveryone knows deep learning is getting important nowadays. There is a two popular framework to write the code for deep learning as:  PyTorch TensorFlowMany of code in GitHub has written in PyTorch or TensorFlow, So the fact is when we want to write simple neural network such as multi-layer perceptron, we should know PyTorch or TensorFlow. It’s being simple common sense. Before writing the neural network, data has to be prepared for training. In this post, I will introduce how to write custom dataset class using PyTorch simply. 2. Defining Data FormatThe problem is what the format is various. For example, the image has usually $width \times height \times channel$, the text has usually $1 \times \text{text length}$ at all. In this post, data format is question/answering such as simple chatbot. Given data format is as:       Question   Answering         12시 땡!   하루가 또 가네요.     In english, Each means “It’s 12 pm!”, “One another day passed. ” 3. Writing Custom Dataset Class!In this section, we will explore dataset class, and how to write with respect to given function of class. First, Dataset is class of pre-prcoessing data in PyTorch. We can write as: from torch. utils. data import Datasetclass ConversationDataset(Dataset):	def __init__(self) -&gt; None:		pass 	def __getitem__(self, idx: int) -&gt; Any:		pass 	def __len__(self) -&gt; int:	  passThe class name is whatever you want. If you want to another name such as QuestionAnsweingDataset, It’s fine. Just remember, class name should include what the class means.  def __init__(self, args1, args2, . . . )It means initiating class with given arguments. As you know, at this function, initiating properties of class with given arguments. Arguments might be necessity to pre-processing given data. If we need question, answer, vocab, max_len as arguments, the code is as: def __init__(self, question: list, answer: list, vocab: Vocabulary, max_len: int = 128) -&gt; None: 	self. question = question 	self. answer = answer 	self. vocab = vocab 	self. max_len = max_len 	self. tokenizer = Mecab() Using type-hinting, It’s very useful when writing easy to understand.  __getitem__(self, idx: int) -&gt; AnyThis function returns single sequence data. Also, data has to be pre-processed for training at this function. Idx, the argument is given data index. What we need is tokenized each text data, the code is as: def __getitem__(self, idx: int): 	q_tokenized = [self. vocab. special_tokens[2]] + self. tokenizer. morphs(self. question[idx])   a_tokenized = self. tokenizer. morphs(self. answer[idx]) + [self. vocab. special_tokens[3]]    q_len = len(q_tokenized)   a_len = len(a_tokenized)    q = T. ones(self. max_len). long()   a = T. ones(self. max_len). long()    q_tensor = T. LongTensor([self. vocab. get_token2idx(word)                for word in q_tokenized])    a_tensor = T. LongTensor([self. vocab. get_token2idx(word)                for word in a_tokenized])	q[:q_len] = q_tensor 	a[:a_len] = a_tensor  	return q, aIn text pre-processing, we need to convert the text to index of given vocabulary to understand, because computer actually doesn’t know what the sentence means if we don’t covert. First, q_tokenized is tokenizing given sentence by morpheme unit. For example, 나는 한국어를 공부해 will be ['나', '는', '한국어', '를', '공부', '해'] T. ones(self. max_len). long() is for text padding such as zero-padding of computer vision. Each given length of sentence is various. Some of sentence could be 128, or 64, or 48, and so on. So, we need to define maximum length of sentence with argument of initiating function. In this post, maximum length of sentence is 128. T. ones(self. max_len). long() returns $[1 \times \text{maximum length}]$ shape which contains only 1. The reason I called T. ones function, index of &lt;pad&gt;token is 1. q_tensor is just storing sentence coverted from tokenized word to following vocabulary index. Shape of q_tensor is $[1 \times \text{sentence length}]$. Length of sentence could equal to maximum length which we define luckily, but it’s highly unlikely. q[:q_len] = q_tensor, this statement solve above problem. it returns like [4, 5, 6, 7, 8, 9, 1, 1, . . . , 1] and it equals to ['나', '는', '한국어', '를', '공부', '해', &lt;pad&gt;, &lt;pad&gt;, . . . , &lt;pad&gt;]. Pre-processing is done! Now, all we need to write is return q.  You can do the same process with the above method for pre-processing answer.  def __len__(self) -&gt; intIt returns lengths of whole data. I usually use assert statement which means, training data and label usually have same length. def __len__(self) -&gt; int: 	assert len(self. question) == len(self. answer)   return len(self. question)The benefit of using assert statement is when initiating class and call, we can protect ourselves from potential issue. Because, given data format has ground truth: one question - one answer. So, if we have 1200 questions, then it must have 1200 answers. it’s kids stuff right? 4. Initiating DataLoader using Custom DatasetDataLoader is simple, powerful method to bring the batch data automatically. Let’s see the code as: def get_loader(question: list,         answer: list,         vocab: Vocabulary,         max_len:int,         batch_size: int,         shuffle: bool) -&gt; DataLoader: 	dataset = ConversationDataset(question, answer, vocab, max_len)   return DataLoader(dataset, batch_size=batch_size, shuffle=shuffle)First, we need to initiate dataset class as mentioned at section 3. Then, we have dataset variable in function. All we left is initiating dataloader class following as: return DataLoader(dataset, batch_size=batch_size, shuffle=shuffle)5. SummaryIn this post, we figured out how to write custom dataset class in PyTorch, and using dataloader class. It’s very convenient, powerful method. It reduces code complexity which means easy to understand. "
    }, {
    "id": 15,
    "url": "https://JudePark96.github.io/2020/03/22/BLEU-Score-Reasonable.html",
    "title": "BLEU (Bilingual Evaluation Understudy) Score",
    "body": "2020/03/22 -  연구 주제에 맞게 읽을 논문을 추천해주신 카카오의 이동엽 형에게 감사드립니다! :) 최근, 연구 주제를 정하며 대화형 데이터에 대한 evaluation metric에 대하여 생각해볼 필요가 있어짐에 따라 BLEU Score에 대하여 찾아보게 되었다. BLEU에 대한 설명과 어떠한 문제점을 내포하고 있는지 간단하게 서술해본다. BLEU 란 evaluation metric 으로서 주어진 데이터 X 가 순서성을 가진 단어로, Y 또한 X 와 마찬가지로 이루어진 경우에 사용되며 번역, 요약과 같은 과업에 사용된다.  $n$-gram overlap 을 통하여 얼마나 겹치는지 문장 길이에 대한 과적합 보정 같은 단어가 연속적으로 나올 때 과적합되는 것을 보정Is It Really Reasonable?BLEU 의 수식을 간단히 요약하자면 Target Sentence 와 Predicted Sentence 사이의 $n$-gram overlap 을 통하여 문장의 유사성을 살펴보는 것이다. 그렇다면, 이는 과연 합리적인 evaluation metric 인지 고심해봐야한다. 기존의 방법론에 대하여 문제 제기를 한 첫 논문은 RUBER[1] 이며 이를 바탕으로 BERT 와 같은 Contextualized Embedding 을 이용하여 제안한 것이 [2] 이다. 이 글에서는 [2]의 논문의 예시를 인용하였다. [2] Dialogue ContextSpeaker 1: Hey! What are you doing here?Speaker 2: I'm just shopping. Query: What are you shopping for?Generated Response: Some new clothesReference Response: I want buy gift for my mom!위의 대화 예시는 발화자 1이 “야! 너 여기서 뭐해?”라는 질문에 발화자 2가 “난 그냥 쇼핑하지. ” 라는 대화이다. 그리고 다음 발화인 “쇼핑 뭐 하는데?” 라는 말에 응답 문장으로서 “그냥 새 옷 조금”라는 생성된 문장과 “어머니를 위해 옷을 사고 싶어!”라는 정답 문장이다. 각자가 evaluator 가 되어 human evaluation 을 해본다면 정답 문장과 생성 문장, 모두 자연스러움을 느낄 수 있을 것이다. 하지만, 위의 대화 예시를 BLEU score 로 계산해본다면 zero-score 를 받는다. 이는 $n$-gram overlap 을 이용한 평가가 human judgement 와는 correlation이 떨어진다는 것을 의미하며 evaluation stage 에서 semantic methodology 가 고려되야한다는 것을 알 수 있다. Reference[1]. RUBER: An Unsupervised Method for Automatic Evaluation of Open-Domain Dialog Systems [2]. Better Automatic Evaluation of Open-Domain Dialogue Systems with Contextualized Embeddings "
    }, {
    "id": 16,
    "url": "https://JudePark96.github.io/algorithm/python/2020/03/09/Rotating-2D-Array-90-Degrees-In-Python.html",
    "title": "Rotating 2D Array 90 Degrees In Python",
    "body": "2020/03/09 - Sometimes, we have to rotate the given 2d array to solve the algorithm. For example, in this coding test, Question 3. In this post, I will show you how to rotate given 2d array in simple way. ConceptAbove given matrix is $N \times N$. What if we rotate 90 degrees above matrix? Result is above matrix. I think if i have to write in Java or C, it would be bothering me. So, Python.  Steps :     First of all, we have to reverse the given matrix.    Second of all, zip(python) it   CodeFirst, we need to define the matrix like as follows: matrix = [[1, 2, 3],    [4, 5, 6],    [7, 8, 9]]As I mentioned, first we have to reverse the matrix. So, matrix[::-1] # Reverse!Last step is zipping it. matrix = list(zip(*matrix[::-1]))Result is as follows: [(7, 4, 1), (8, 5, 2), (9, 6, 3)]"
    }, {
    "id": 17,
    "url": "https://JudePark96.github.io/mecab/nlp/2020/02/29/Mac-OS-X-%EC%97%90%EC%84%9C-MeCab-%EC%84%A4%EC%B9%98-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0.html",
    "title": "Mac OS X 에서 MeCab 설치 에러 해결",
    "body": "2020/02/29 - 소개: 자연어처리 데이터를 전처리할 때 필수적으로 필요한 것은 형태소 분석기를 통하여 토큰화(tokenization)을 하는 것이다. 한국어의 경우, MeCab이나 꼬꼬마 형태소 분석기 또는 카카오에서 만든 형태소 분석기 등을 사용한다. 필자의 개발 환경은 Mac OS X 인데, 이 환경에서 설치할 때 약간의 에러가 발생한다. 이 글에서는 이 에러를 어떻게 해결하는지 알아본다. 에러 해결: 에러는 크게 3가지가 발생한다.    ldconfig: command not found          sudo update_dyld_shared_cache             error: command 'gcc' failed with exit status[1]          export MACOSX_DEPLOYMENT_TARGET=10. 10CFLAGS='-stdlib=libc++' pip install konlpy             mecab install error          bash &lt;(curl -s https://raw. githubusercontent. com/konlpy/konlpy/master/scripts/mecab. sh)          위의 명령어를 수행하면 정상적으로 설치가 진행된다. Reference: [1]. Mac OS konlpy 설치오류 #224 "
    }, {
    "id": 18,
    "url": "https://JudePark96.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter : Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts : put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair : Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown :       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips :       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips :       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables : You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images : Local Images : You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images : Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs : Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions : You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:There was a 'Bad Request' error fetching URL: 'https://twitter. com/jakevdp/status/1204765621767901185?s=20' Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 19,
    "url": "https://JudePark96.github.io/2018/03/22/Bidirectional-LSTM-CRF-Models-for-Sequence-Tagging.html",
    "title": "Bidirectional LSTM-CRF Models for Sequence Tagging",
    "body": "2018/03/22 - 1. Overview:  Long Short-term Memory (LSTM) based models for sequence tagging.      Part of Speech tagging   Named Entity Recognition    Compare the performance of aforementioned models on NLP tagging data sets.      Convolutional CRF Network, etc …    This paper proposed A Bidirectional LSTM-CRF Model. 2. Tagging: Basically, there’s named entity recognition system in which each word is tagged with other (O) or one of four entity types: Person (PER), Location (LOC), Organization (ORG), and Miscellaneous (MISC). 3. Recurrent Neural Network: Traditionally, Recurrent Neural Network(RNN) introduced the connection between the previous hidden state and current hidden state. If input sequence is getting longer and longer, this is the reason of vanishing gradient. As a result, LSTM came out. Basically, it is the same as RNNs except that the hidden layer updates replaces by purpose-built memory cells. As a result, they may be better at finding and exploiting long range dependencies in data.  But, unfortunately, LSTM is not perfect solution as always we were. 4. Bi-Directional LSTM: Generally, LSTM only does forward pass. But, Bi-LSTM does forward pass and backward pass, exactly both. It means, we calculate forward state and backward state. 5. Conditional Random Field: There are two different ways to make useof neighbor tag information in predicting current tags. The first is to predict a distribution oftags for each time step and then use beam-like decoding to find optimal tag sequences. The second one is to focus on sentencelevel instead of individual positions. The inputs and outputs are directly connected. That is the difference between LSTM, CRF. 6. Training Procedure - LSTM:  All models used in this paper share a generic Stochastic Gradient Descent.  Batch size set 100     It means, each sentence’s total length is no greater than 100.     As a result, we get the output score for all tags at all positions. 7. Training Procedure - CRF:  Run CRF layer forward and backward pass to compute gradients for network output and state transition edges.  Back-propagate the errors from the output to input     includes the both forward and backward states of LSTM    Update the network parameters     Includes state transition matrix, bi-LSTM parameters   8. Dataset:  Penn TreeBankPOS Tagging CoNLL 2000 Chunking CoNLL 2003 named entity tagging9. Features:    Word embedding          Senna embedding                       where is the GloVe, Word2Vec.                         Spelling features      Where start with a capital letter   letters only.       Context features      Uni-gram, bi-gram, tri-gram …   10. Conclusion: Conv-CRF model relies on Senna embedding to get good tagging accuracy. But, Bi-LSTM doesn’t rely on embedding also it got a good tagging accuracy. 11. Reference: [Bidirectional LSTM-CRF Models for Sequence Tagging] https://arxiv. org/abs/1508. 01991 "
    }, {
    "id": 20,
    "url": "https://JudePark96.github.io/startup/refactoring/android/2016/10/04/%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8C%85-%EC%A0%90%EC%8B%AC-%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%9F%B0%EC%B9%AD-%ED%9A%8C%EA%B3%A0.html",
    "title": "플레이팅 점심 서비스",
    "body": "2016/10/04 - 1. 플레이팅은?: 플레이팅은 셰프들의 음식을 만들고 사용자들에게 배달해주는 서비스로서 나는 이 서비스 회사의 개발자로 근무하고 있다. 우리 회사는 저녁 서비스만을 사용자에게 제공하고 있었는데 이번에 점심 서비스를 런칭하기로 결정하였다. 그런데 문제는 일정이 매우 촉박했다는 것이었다. 약 5일 간의 일정으로 모든 플랫폼의 클라이언트와 서비스 서버를 개발해야하는 것이었다. 나는 안드로이드 클라이언트 작업을 단독으로 맡아서 진행하게 되었다. 2. 고비의 시작 …: 기존의 작성되어져있던 레거시 코드를 크게 살펴볼 일이 없어서 일단 코드를 파악하는 것부터 시작하였다. 레거시 코드의 문제는 다음과 같았다.  의미가 중복되어있는, 하지만 다른 이름의 함수로 되어있는 코드가 여러 곳의 분포되어있었다.  객체 지향 설계 원칙에 맞지 않는 코드가 존재하였다.      가장 큰 예시로, 한 객체에서 다양한 기능이 구현되어있었다. (The Single Responsibility Principle, SRP)         덧붙이자면, 본인은 Rest Client 단과 UI단의 코드의 결합을 피하고 싶었다. UI 단에서 Rest Client의 API를 콜하고, onSuccess(JSONObject object) 에서 처리하도록 바꾸었다.      즉, 기존 코드에서는 Rest Client 에서 UI 처리까지 담당하였다.            다양한 변수 선언 스타일이 공존하였었다.      이는, 곧 내게 혼란을 주었다.          작업을 할 때, 변수 선언 하나하나에 신경을 쓰려고 노력하는 나로서는 이해할 수 없는 것들이었기 때문이다.            힘들었던 QA 작업1번 같은 경우, 코드의 사용 유무를 일일히 검색하며 삭제하거나 하면 되지만 일정상의 문제로 넘어가도록 하였다. 3번 또한 일정 문제로 넘어가도록 하였다. 이 회고글에서는 2번과 4번을 목차로 나누어 다루어보도록 한다.  1번은 분명 쉘로 쉽게 할 수 있을텐데 … 2. 1. 어떻게 코드를 바꾸었을까?: public static void getMenuList(final Context context, RequestQueue requestQueue) {    JsonArrayRequest request = new JsonArrayRequest(        Request. Method. GET,        URL,        new Response. Listener&lt;JSONArray&gt;() {          @Override          public void onResponse(JSONArray response) {            ArrayList&lt;DailyMenu&gt; dailyMenuArrayList = convertJsonToDailyMenuArrayList(response);            ((DailyMenuListActivity) context). getMenuListFromServer_Callback(dailyMenuArrayList);          }        },        new Response. ErrorListener() {          @Override          public void onErrorResponse(VolleyError error) {          	error. printStackTrace();          }        }    );    requestQueue. add(request);  }다음은 네트워크 통신을 통하여 서버의 API를 콜하는 코드이다. 이를 Rest Client라고 부를 것이다. 이 코드는 UI 단과 분리되어있지만 onResponse의 코드를 보면 UI 단의 역할 또한 담당하여 하고 있다. 이러한 코드는 UI 단의 코드를 수정할 때 어느정도의 헷갈림을 줄 수 있고 객체의 역할을 분리하는 것이 나중에 다른 개발자 분께서 작업을 이어받아서 진행할 때 더 수월할 것이라고 생각한다. 일단, 어느정도 코드의 방식을 수정하는 방향으로 가지만 위의 1절에서 언급했듯이 일정이 촉박하기 때문에 2절의 3번은 포기하도록 하고 코드를 수정해보도록 한다. public abstract class APIResult {  private String LOG_TAG = this. getClass(). getSimpleName();  public void onSuccess(JSONObject object) throws JSONException {}  public void onSuccess(JSONArray array) {}  public void onFail(JSONException e) {    Log. d(LOG_TAG, e. toString());  }  public void onFail(VolleyError e) {    Log. d(LOG_TAG, e. toString());  }}일단, APIResult 라는 Abstract Class 를 생성하도록 한다. 본 코드에 있는 onFail을 이용하면 더 이상 예외 처리 과정에서 사용되는 불필요한 로깅(logging) 코드를 작성할 필요가 없을 것이다. 즉, UI 단에서 예외 처리를 할 때, 더 이상 로깅을 하지 않고 순수하게 UI 코드를 작성할 수 있다는 의미가 된다.  onFail을 Override하여 Toast. makeText(context, “네트워크 연결이 불안정합니다. ”, Toast. LENGTH_SHORT). show(); 와 같은 코드만 작성해도 된다. 그리고 모든 API 의 Response 는 onSuccess를 통하여 가지고 오게 된다. public static void getMenuList(APIResult result) {  VolleySingleton. getInstance(). getRequestQueue(). add(new JsonArrayRequest(      Request. Method. GET,      getRequestUrl(),      result::onSuccess,      result::onFail  ));}기존의 서버 API 콜하는 Rest Client 를 새롭게 수정한 모습이다. 본 코드는 말 그대로 서버 API 콜만을 담당한다. getMenuList(new APIResult() {	@Override	public void onSuccess(JSONArray array) {		// TODO -&gt; UI Implementation	}});본 코드와 같이, UI 의 통제는 getMenuList(APIResult result) 메서드를 콜하는 UI 단의 클래스에서 하면 된다. 사실, 기존의 코드의 흐름대로 작성해도 문제는 없었겠지만 개발을 진행하면서 꼬여있는 실타래를 풀지는 못할 지언정 더 꼬이도록 하는 것을 도저히 견딜 수 없었다. 실제로 이러한 수정 이후에 수월하게 개발할 수 있었다. 2. 2. 힘들었던 QA 작업: 서버에 API 테스트가 있다면 클라이언트에는 QA(Quality assurance) 가 존재한다. 소비자가 요구하는 품질이 충분히 만족되어 있음을 보증하기 위해서 생산자가 행하는 체계적인 활동이다. – 일본공업규격의 정의위의 말대로 해보면 말 그대로 클라이언트에서 사용자가 앱을 삭제하지 않을 정도의 품질을 위한 활동인 것이다. 기존의 QA 작업은 체계적으로 이루어져있지 않았기 때문에 회사의 다른 개발자 분께서 QA 로그를 만드셔서 전해주셨고 나는 해당 문서를 바탕으로 QA 를 진행하였다. 2. 2. 1. 무엇이 문제였는가?: 일단, QA 작업이 매우 힘들었다. (매우라고 써놓고 존나라고 읽는다. ) 본인은 이것이 테스트의 자동화가 이루어져있지 않았기 때문이라고 생각한다. 이전에 기존의 클라이언트 작업에서 QA 로그를 바탕으로 한 테스트 코드가 작성되어있다면 힘들진 않았을 것이라고 생각한다. 일정 상의 문제가 있어, 테스트 코드를 작성하진 못하였지만 이건 언젠가는 꼭 하리라 다짐하는 부분이다. 3. 글을 마치며 …: 오랜만의 회고였다. 작성 히스토리를 보니까 무려 약 3개월 전 … 많이 바빠짐과 동시에 나태해짐을 느꼈다. 본인은 최선을 다하여 개발하면서도 “일정 안에 맞추기 힘들 것 같은데 …?” 라는 의문을 가지고 있었다. 게다가, 아직 규모가 큰 개발팀은 아니었기 때문에 단독으로 안드로이드 클라이언트를 맡아서 진행한다는 것이 큰 부담으로 작용하고 있었다. 하지만, 런칭 전날 새벽에 QA 를 통과하고 디플로이를 함으로서 큰 성취감을 느꼈고 2. 1과 같은 과정을 거치며 성장했음을 느낄 수 있었다. 이 과정에서 레거시 코드를 어떻게 효율적으로 활용할 지에 대한 경험도 쌓게 되어서 좋았다. 물론, 몇 일 동안, 학교를 다니면서 잠을 제대로 못 잤을 뿐만 아니라 밥 먹고 자는 시간을 제외하고 모두 개발했기 때문에 몸 건강이 안 좋았지만 그래도 뿌듯했다. 이 과정을 마치고 2일 휴가를 즐기며 휴가 마지막 날, 무려 20~21시간을 자며 나는 또 다시 행복함을 느낄 수 있었다. 역시, 학교보다는 회사일 때가 조금 더 재밌고 유쾌한 것 같다. 학교는 주입식인데 회사는 자기주도식이니까.    본인의 취미는 잠자기다. 자기 전, 몽롱한 느낌으로 폰으로 인터넷하는 걸 즐긴다. 그래서 일정에 따라 일어날 때는 일어나지만, 자는 과정에서 누군가 깨우면 굉장히 불쾌해한다. (내 잠을 돌려내, 이런 나쁜 아이야. 라며 …)  2. 1의 과정이 굉장히 뿌듯하였지만 현실은 이 과정을 하면서도 머릿 속에서는 열심히 일정에 대한 계산을 하고 있었다. (…)  이번 개발 과정을 느끼면서 1월에는 꼭 휴가를 내고 해외에서 머리를 식혀야겠다는 결심을 하게 되었다.   이번 개발 과정에서 많은 야식을 먹어서 행복했지만 살은 크게 늘지 않았다. (ㅋㅋ) "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}