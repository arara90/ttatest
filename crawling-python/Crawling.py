## 신규 갱신 용어 전체 크롤링
# #tta
import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

import pandas as pd
import os
import io
import sys

# sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
# sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')


# This version of ChromeDriver supports Chrome version 76
driver = webdriver.Chrome('./chromedriver.exe')
class WordCrawling:


    def tta_word(self):
        numPages = 100  # 세트 하나당 page수
        page, words, words_eng, descs  = 1, [], [],[]

        # 1. driver setting: This version of ChromeDriver supports Chrome version 76
        driver_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'chromedriver.exe')
        driver = webdriver.Chrome(driver_path)
        driver.get('http://terms.tta.or.kr/dictionary/dictionaryNewWordList.do')
        wait = WebDriverWait(driver, 30)

        select = Select(driver.find_element_by_class_name('sel_gray2'))
        select.select_by_visible_text(str(numPages))
        count = driver.find_element_by_id("btnCount")
        count.click()


        # 3. 마지막 페이지 num 저장
        btn = driver.find_element_by_css_selector("#m_content > div > div > span.last > a")
        btn.click()

        btn_list =wait.until(expected_conditions.presence_of_element_located((By.ID, "m_content")))
        selector = "#m_content > div > div > span.on"
        last_page_num = driver.find_element_by_css_selector(selector).text
        print(last_page_num)

        driver.back()

        
        #.3. Crawling
        while( True ):
            cs_list = wait.until( expected_conditions.visibility_of_all_elements_located((By.TAG_NAME, "dl")))
            
            if(len(cs_list) < numPages ):
                numPages = len(cs_list)

            for i in range(numPages):
                print(i)
                #get List 
                try:
                    cs_list = wait.until( expected_conditions.visibility_of_all_elements_located((By.TAG_NAME, "dl")))
                    staleness = driver.find_element_by_class_name("result")

                     
                except TimeoutException:
                    print("content 페이지에 dl 태그가 존재하지 않거나, 해당 페이지가 20초 안에 열리지 않았습니다.")

                print(len(cs_list))
                data = cs_list[i]
                word = data.find_element_by_tag_name('dt > a > b').text
                # wordArray = word.split(",")
                wordArray = [w.strip() for w in word.split(',')]
                #click to get detail (Link to detail page)
                href = data.find_element_by_tag_name('a')
                href.click()
                driver.implicitly_wait(5)

                #detail Content
                try:
                    wait.until(expected_conditions.staleness_of(staleness))
                    wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "result")))
                    element =  driver.find_element_by_class_name("result")
                    staleness = driver.find_element_by_class_name("result")
                    
                except TimeoutException:
                    print("content 페이지에 detail_box가 존재하지 않거나, 해당 페이지가 20초 안에 열리지 않았습니다.")

   
                # #링크 내용 parsing
                content = driver.find_elements_by_class_name('no_css')


                if(len(content)>1):
                    same = (content[0].text).replace("동의어 : ", "")

                    wordArray.append(same)
                    desc = content[1].text
                    
                else:
                     desc = content[0].text
                    
                    
                descs.append(desc)
                words.append(wordArray[0])
                words_eng.append(wordArray)

                print(words)
                print(words_eng)
                driver.back()

                # print(word_eng, desc[0:100])


            # 3-2. Move to the next page
            try:
                wait.until( expected_conditions.presence_of_element_located((By.CLASS_NAME, "paging")))
            except TimeoutException:
                print("content 페이지에 paging  존재하지 않거나, 해당 페이지가 20초 안에 열리지 않았습니다.")


            page = page + 1
            page_mod = page % numPages  
            print(page_mod)

            print('page/lastpagenum', page, last_page_num )

            if(page > int(last_page_num)):
                break
            else:
                if page_mod == 1: #다음 페이지가 새로운 묶음이면
                    print("newPage")
                    try:
                        element = driver.find_element_by_id("m_content")
                        driver.find_element_by_class_name('next').click()
                        wait.until(expected_conditions.staleness_of(element)) # returns False if the element is still attached to the DOM, true otherwise.

                    except:
                        print("except : ")
                        break

                else:
                    numOfChild =  page_mod + 2
                    nextPage = '#m_content > div > div > span:nth-child(' + str(numOfChild) + ') > a'
                
                    try :
                        print('nextPage',  nextPage)
                        driver.find_element_by_css_selector(nextPage).click()
                    
                    except:
                        print("bip")
                        break

        driver.close() # 드라이버 닫아주기

        df_data = {'국문표제어': words,
                    '영문표제어': words_eng,
                    '내용': descs }


        print(len(words), len(words_eng), len(descs))
        res_df = pd.DataFrame(df_data)
        print(res_df)
        
        # 4. *************** 중간 결과 저장 (좌표변환이 느리므로 저장해두자!) *******************
        # res_df.to_csv("tta_words.csv", mode='w', encoding='utf-8')
        res_df.to_csv("tta_words.csv", mode='w', index=False)


        # 데이터 전처리
        
        return res_df


## 저장소에 연결/저장 코드 추가 필요
if __name__ == '__main__':
    cr = WordCrawling()
    print(cr.tta_word())