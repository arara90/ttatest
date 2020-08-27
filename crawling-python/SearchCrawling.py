# #tta
import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

import pandas as pd
import numpy as np
import os
import io
import sys


class WordSearch:

    def load_file(self, year):
        BASE_DIR = os.path.dirname(os.path.abspath(__file__))
        name =  'origin_tta'+str(year)+'.csv'
        file = os.path.join(BASE_DIR, 'data', name)
        origin_df = pd.read_csv(file, encoding='ms949', engine='python')
        return origin_df
    

    def tta_word(self, year):
        # # load file
        df = self.load_file(year)
        df.fillna('', inplace=True)
        descs = [ "" for i in range(len(df)) ]

        driver_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'chromedriver.exe')
        driver = webdriver.Chrome(driver_path)
        driver.get('http://terms.tta.or.kr/dictionary/searchList.do')
        wait = WebDriverWait(driver, 30)
        page = wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "inner")))
        
        for i in range(len(df)):
            if(df['국문표제어'][i] == '' ):
                continue

            print(df['국문표제어'][i])
            #검색조건: 완전일치
            radio = driver.find_element_by_id('searchCate1') 
            radio.click()
            
            #검색어 입력
            search_field = driver.find_element_by_id('searchTerm')
            search_field.send_keys(df['영문표제어'][i])
            time.sleep(0.5)

            #검색 버튼 클릭
            search_btn = driver.find_element_by_class_name('n_btn_search')
            search_btn.click()
            time.sleep(0.5)


            #내용 가져오기
            try:
                cs_list = wait.until( expected_conditions.presence_of_all_elements_located((By.CSS_SELECTOR, "#m_content > ul > li")))
                staleness = driver.find_element_by_class_name("result")
            except TimeoutException:
                print(  "결과가 존재하지 않거나, 해당 페이지가 30초 안에 열리지 않았습니다.")

            data = cs_list[0]
            href = data.find_element_by_tag_name('a')
            href.click()
            time.sleep(0.5)

            #detail Content
            try:
                wait.until(expected_conditions.staleness_of(staleness))
                wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "detail_box")))
                staleness = driver.find_element_by_class_name("result")
                
            except TimeoutException:
                print("content 페이지에 detail_box가 존재하지 않거나, 해당 페이지가 30초 안에 열리지 않았습니다.")

            # #링크 내용 parsing
            content = driver.find_elements_by_class_name('no_css')

            if(len(content)>1):
                desc = content[1].text
            else:
                desc = content[0].text
                
            descs[i] = desc
            df['내용'] = descs
    
        result_name = "tta"+str(year)+".csv"
        # res_df.to_csv("tta_words.csv", mode='w', encoding='utf-8')
        df.to_csv(result_name, mode='w', index=False)

        # return res_df


## 저장소에 연결/저장 코드 추가 필요
if __name__ == '__main__':
    cr = WordSearch()
    # cr.tta_word(2020)
    # cr.tta_word(2019)
    cr.tta_word(2018)
