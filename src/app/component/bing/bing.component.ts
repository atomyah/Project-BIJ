import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

/*
class bing {
  name: string;
  url: string;
  displayUrl; string;
  snippet: string;
  dateLastCrawled: string;
}
*/

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['../../common.css','./bing.component.css']
})

export class BingComponent implements OnInit {

/*
  bingObservable: Observable<bing[]>;

  subscriptionKey = ''; //'YOUR-SUBSCRIPTION-KEY' Azure Portalのキー
  customConfigId = ''; //'YOUR-CUSTOM-CONFIG-ID'; Bing Custom Search(https://www.customsearch.ai/)のProductionのページ
  searchTerm = '';

  url = 'https://bij.cognitiveservices.azure.com/bingcustomsearch/v7.0/search?' + 
  'q=' + this.searchTerm + '&' + 'customconfig=' + this.customConfigId + '&' + 'mkt=ja-JP';

  options = {
    headers: new HttpHeaders().append("Ocp-Apim-Subscription-Key", this.subscriptionKey),
    params: new HttpParams().append("url", this.url)
  }

  loadBing() {
    this.bingObservable = this.http.get<bing[]>(this.url, this.options);
    console.log('◆' + this.bingObservable)
  }
*/
  constructor() {
  }

  ngOnInit() {
  
    const script = document.createElement('script');
    script.async = true;
    script.type="text/javascript";
    script.src = 'https://ui.customsearch.ai/api/ux/rendering-js?customConfig=fcb3c3a3-6f6c-464a-9676-ee74f5a516c2&market=ja-JP&version=latest&q=';
    script.id = 'bcs_js_snippet';

    const div = document.getElementById('script');
    div.insertAdjacentElement('afterend', script);
  
  }

    // サーチクリア関数
    reset() {
      location.reload();
    }
}

