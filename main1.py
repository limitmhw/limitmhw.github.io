#!/usr/bin/python
# -*- coding: utf-8 -*-
import requests
import time
from bs4 import BeautifulSoup
# import handle_model_db as db
# import config

parse_model="html5lib"
def mget(url):
    my_head = {
        'Cookie':'_octo=GH1.1.615000498.1571304136; _ga=GA1.2.1358136232.1571304138; _device_id=4fb011b0e7473a89e5c3396fbd012f84; user_session=cxZiRUgF5KaFdufRGyit4a5nAwpvbd_dnuPP15PSzINKHSTE; __Host-user_session_same_site=cxZiRUgF5KaFdufRGyit4a5nAwpvbd_dnuPP15PSzINKHSTE; logged_in=yes; dotcom_user=limitmhw; tz=Asia%2FShanghai; has_recent_activity=1; _gat=1; _gh_sess=OHpCZzlaNVh2RUpZZWs1akVwVEdYNFlHMnBvN2xRK1l5LzVhaUZFRGtCUnhod2hFbThXYjI0WmtyMzBhQ1RXQ2JibjRjRjVjMUtTakJKclVmcG0rSG9qWitWOEZrWTBYdnVFWHVjeENmdzFFR3g5Tlp0YXBIZTBDQSt2Z2UvU2M5VFRONkYzZDYzNmdLZ01oaDA4S1dlWkREdm5rMm9qbUIrc3k0TVl1YWc2OXBuWW1XUG1ycE5PYTNNbFVDcnhJdFJvSGdFMlpidEV6MCtoSkxXaDYrUWc4RVFyM0IrRGRrTUY5ZzF6d1d0bTMvcXpwNzJ2R1pPYlZOU3FDc2ptY2E2YW91cWphdVloQUFrNlVuc0pBTEE9PS0tN09DdCtHYzRvT3dzUU8rTkY3ekgvZz09--e03e4b53a3a3b4546ae43062520f1551d119fa71',

    }
    return requests.get(url,headers=my_head)
def get_model_index(url):
    '''获取页面的模型地址图片地址'''
    ret=[]
    
    r = mget(url)
    html_doc=r.text
    # print(html_doc)
    soup = BeautifulSoup(html_doc,parse_model)
    model_item= soup.find_all("li", class_="Box-row py-2 clearfix")

    for i in range(0,len(model_item)):
        projectName = model_item[i].a['href']
        projectName=projectName[1:]
        # print(projectName)
        taglanguage = get_project_language(projectName)
        strdata ='{tag: ["'+taglanguage+'"],	name:"'+projectName+'",detail:"https://github.com/'+projectName+'"}'
        ret.append(strdata)

    return ret

def get_project_language(project):
    ret = ""
    try:
        url = 'https://github.com/search?q='+project
        r = mget(url)
        html_doc=r.text
        soup = BeautifulSoup(html_doc,parse_model)
        model_item= soup.find_all("li", class_="repo-list-item hx_hit-repo d-flex flex-justify-start py-4 public source")

        for i in model_item[0].span:
            if 'programmingLanguage' in str(i):
                ret = (i.string)
    except:
        pass
        
    return ret
                         
if __name__ == "__main__":

    parse_model="html5lib"
    html_url_base='https://github.com/watching?page='
    allIdxUrl=[]
    for i in range(30):
        max_range= get_model_index(html_url_base+str(i))
        allIdxUrl=allIdxUrl+max_range
        print("page:",i)
    print(allIdxUrl)

    

