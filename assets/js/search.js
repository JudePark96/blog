
var documents = [{
    "id": 0,
    "url": "https://JudePark96.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://JudePark96.github.io/about/",
    "title": "About Me",
    "body": "Eunhwan Park Seoul, Republic of Korea. judepark@kookmin. ac. kr RESEARCH INTERESTS: Language Understanding, Dialogue System, Recommendation System, Graph Representaiton, Knowledge Distillation, etc EDUCATION:  BS in Computer Science, 2015 ~ 2016 – Hanbat National University BS in Computer Science, 2016 ~ present – Kookmin UniversityWork Experience:  Backend Engineer, Plating Co, 2015 ~ 2016 Backend Engineer, Sellmate Co, 2018 ~ 2019 Backend Engineer, FreeLancer, 2019PUBLICATIONS: Domestic Conference  Comparison of Varient BERT Model on Korean, Roje Lee, Eunhwan Park, Jaekoo Lee. KICS Winter Conference 2020TEACHING EXPERIENCE:  Daily Mentor, Galmae Middle School     Introducing Software Engineering   HONORS / AWARDS:  Software Maestro 6th, 2015.  Summer Innovation Program - University of California, Irvine"
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
    "url": "https://JudePark96.github.io/algorithm/python/2020/03/09/Rotating-2D-Array-90-Degrees-In-Python.html",
    "title": "Rotating 2D Array 90 Degrees In Python",
    "body": "2020/03/09 - Sometimes, we have to rotate the given 2d array to solve the algorithm. For example, in this coding test, Question 3. In this post, I will show you how to rotate given 2d array in simple way. ConceptAbove given matrix is $N \times N$. What if we rotate 90 degrees above matrix? Result is above matrix. I think if i have to write in Java or C, it would be bothering me. So, Python.  Steps :     First of all, we have to reverse the given matrix.    Second of all, zip(python) it   CodeFirst, we need to define the matrix like as follows: matrix = [[1, 2, 3],    [4, 5, 6],    [7, 8, 9]]As I mentioned, first we have to reverse the matrix. So, matrix[::-1] # Reverse!Last step is zipping it. matrix = list(zip(*matrix[::-1]))Result is as follows: [(7, 4, 1), (8, 5, 2), (9, 6, 3)]"
    }, {
    "id": 5,
    "url": "https://JudePark96.github.io/mecab/nlp/2020/02/29/Mac-OS-X-%EC%97%90%EC%84%9C-MeCab-%EC%84%A4%EC%B9%98-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0.html",
    "title": "Mac OS X 에서 MeCab 설치 에러 해결",
    "body": "2020/02/29 - 소개: 자연어처리 데이터를 전처리할 때 필수적으로 필요한 것은 형태소 분석기를 통하여 토큰화(tokenization)을 하는 것이다. 한국어의 경우, MeCab이나 꼬꼬마 형태소 분석기 또는 카카오에서 만든 형태소 분석기 등을 사용한다. 필자의 개발 환경은 Mac OS X 인데, 이 환경에서 설치할 때 약간의 에러가 발생한다. 이 글에서는 이 에러를 어떻게 해결하는지 알아본다. 에러 해결: 에러는 크게 2가지가 발생한다.    ldconfig: command not found          sudo update_dyld_shared_cache             error: command 'gcc' failed with exit status[1]          export MACOSX_DEPLOYMENT_TARGET=10. 10CFLAGS='-stdlib=libc++' pip install konlpy             mecab install error          bash &lt;(curl -s https://raw. githubusercontent. com/konlpy/konlpy/master/scripts/mecab. sh)          위의 명령어를 수행하면 정상적으로 설치가 진행된다. Reference: [1]. Mac OS konlpy 설치오류 #224 "
    }, {
    "id": 6,
    "url": "https://JudePark96.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter : Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts : put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse flag at the top of any cell if you want to hide that cell by default, but stil have it be visible to the reader:              #collapseimport pandas as pdimport altair as alt       put a #collapse_show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse_showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair : Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown :       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips :       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips :       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables : You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images : Local Images : You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images : Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs : Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions : You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements Tweetcards : Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:There was a 'Bad Request' error fetching URL: 'https://twitter. com/jakevdp/status/1204765621767901185?s=20' Youtube Videos : Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts : Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }, {
    "id": 7,
    "url": "https://JudePark96.github.io/2018/03/22/Bidirectional-LSTM-CRF-Models-for-Sequence-Tagging.html",
    "title": "Bidirectional LSTM-CRF Models for Sequence Tagging",
    "body": "2018/03/22 - 1. Overview:  Long Short-term Memory (LSTM) based models for sequence tagging.      Part of Speech tagging   Named Entity Recognition    Compare the performance of aforementioned models on NLP tagging data sets.      Convolutional CRF Network, etc …    This paper proposed A Bidirectional LSTM-CRF Model. 2. Tagging: Basically, there’s named entity recognition system in which each word is tagged with other (O) or one of four entity types: Person (PER), Location (LOC), Organization (ORG), and Miscellaneous (MISC). 3. Recurrent Neural Network: Traditionally, Recurrent Neural Network(RNN) introduced the connection between the previous hidden state and current hidden state. If input sequence is getting longer and longer, this is the reason of vanishing gradient. As a result, LSTM came out. Basically, it is the same as RNNs except that the hidden layer updates replaces by purpose-built memory cells. As a result, they may be better at finding and exploiting long range dependencies in data.  But, unfortunately, LSTM is not perfect solution as always we were. 4. Bi-Directional LSTM: Generally, LSTM only does forward pass. But, Bi-LSTM does forward pass and backward pass, exactly both. It means, we calculate forward state and backward state. 5. Conditional Random Field: There are two different ways to make useof neighbor tag information in predicting current tags. The first is to predict a distribution oftags for each time step and then use beam-like decoding to find optimal tag sequences. The second one is to focus on sentencelevel instead of individual positions. The inputs and outputs are directly connected. That is the difference between LSTM, CRF. 6. Training Procedure - LSTM:  All models used in this paper share a generic Stochastic Gradient Descent.  Batch size set 100     It means, each sentence’s total length is no greater than 100.     As a result, we get the output score for all tags at all positions. 7. Training Procedure - CRF:  Run CRF layer forward and backward pass to compute gradients for network output and state transition edges.  Back-propagate the errors from the output to input     includes the both forward and backward states of LSTM    Update the network parameters     Includes state transition matrix, bi-LSTM parameters   8. Dataset:  Penn TreeBankPOS Tagging CoNLL 2000 Chunking CoNLL 2003 named entity tagging9. Features:    Word embedding          Senna embedding                       where is the GloVe, Word2Vec.                         Spelling features      Where start with a capital letter   letters only.       Context features      Uni-gram, bi-gram, tri-gram …   10. Conclusion: Conv-CRF model relies on Senna embedding to get good tagging accuracy. But, Bi-LSTM doesn’t rely on embedding also it got a good tagging accuracy. 11. Reference: [Bidirectional LSTM-CRF Models for Sequence Tagging] https://arxiv. org/abs/1508. 01991 "
    }, {
    "id": 8,
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