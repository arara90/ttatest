# TTA Test

URL : [http://ttatest.ga/](http://ttatest.ga/)



정보처리기사와 ncs를 공부하는 학생 및 취준생을 위한 정보통신용어 사전 퀴즈.

최신 3개년의 신기술 정보통신용어 사전을 수집하여  퀴즈 형식으로 제공합니다.



데이터 출처 : https://www.tta.or.kr/



## TTATEST Ver 1.

### UI 

#### MAIN , TEST, RESULT 페이지

![main](https://github.com/arara90/images/blob/master/ttatest/tta01.png?raw=true)



#### REVIEW(문제 다시 보기) 와 DARK-MODE

![review](https://github.com/arara90/images/blob/master/ttatest/tta04.png?raw=true)



#### 반응형

![responsive](https://github.com/arara90/images/blob/master/ttatest/tta06.png?raw=true)



### 데이터 크롤링

- Python(Selenium, Pandas) 사용 -- ( *[Lumos](https://github.com/lumos9x/Lumos_ver1) 변형 )
- 코드보기 >> [SearchCrawling.py](https://github.com/arara90/ttatest/blob/master/crawling-python/SearchCrawling.py)

-- --

### 일정 - 20.8.9(일) ~ 20.8.15(토) ,총 7일

##### Day 1. 20.8.9

* webpack 및 환경 구성

##### Day 2. 20.8.10

* styled-component의 theme, global style 적용
* Atomic Design 적용을 위한 UI template 적용

##### Day 3.  20.8.11

* data upload 및 변형 작업

##### Day 4.   20.8.12

* redux 구성 및 redux에 data 연결

##### Day 5.  20.8.13

* data 활용하여 test UI 구현 완료

##### Day 6.  20.8.14

* test 결과 완료
* Test Review 완료

##### Day 7.  20.8.15

* Context 활용한 darkMode 적용
* TTATest ver1 완료.

----------------------------------

### Features

##### 1. Atomic Design

![Atomic Design](https://github.com/arara90/images/blob/master/ttatest/tta07.png?raw=true)

- simetime을 만들면서 애매했던 Atomic Design에 대한 정리.  
- https://github.com/diegohaz/arc 참고
  


##### 2. styled-component의 theme과 GlobalStyle 적용.

* theme으로 DarkMode를 구현. (+react Context)
* GlobalStyle 이용 전체 components의 기본값 통일하고, html 태그에 너비에 따른 font-size를 지정하여 반응형 개발시 rem 활용.



##### 3. redux 사용한 상태 관리

![Atomic Design](https://github.com/arara90/images/blob/master/ttatest/tta08.png?raw=true)

![Atomic Design](https://github.com/arara90/images/blob/master/ttatest/tta09.png?raw=true)

![Atomic Design](https://github.com/arara90/images/blob/master/ttatest/tta10.png?raw=true)

----------------------------------

### NEXT

##### 1. 기능 추가

1. animation 적용해서 동적인 화면 만들기.

2. *AWS에 올리기. --> git page로 대체(완료)*

3. '전체 랜덤' 기능 만들기

4. 기본 alert 수정하기(modal 또는 react-alert로)

5. *2020 추가(완료)*

   
##### 2. 개선 사항

1. home 누르면 다크모드 지워지는 것 수정하기

2. *데이터 크롤링해서 다시 가져오고, 2문장 까지만 보여주기.   (완료)*
   
   * *대신 전체보기 기능 추가 필요 (완료)*

   * *문제 내에 정답 단어 포함 시 안보여주기(완료)*
   
   * (**추가**) 단순히 split(".")으로 문장을 잘라낸 결과, 0.5% 또는 IEEE8.5와 같은 소수점도 문장으로 인식함. 이거 수정해야함(정규식?)
   
     ![problem](https://github.com/arara90/images/blob/master/ttatest/tta11.png?raw=true)
   
3. 시맨틱 고려하기.

   
##### 3. 최종목표?
1. 유저별로 문제 저장하기.



