import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-benzolist-eng',
  templateUrl: './benzolist-eng.component.html',
  styleUrls: ['../../../common.css', './benzolist-eng.component.css']
})
export class BenzolistEngComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;
  currentURL: string;  

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)
      // ［2］メタ情報を追加
      this.meta.updateTag({name: 'title', content: 'Benzodiazepines List and Equivalents'})
      this.meta.updateTag({name: 'description',content: 'Benzodiazepines(hypnotics and anxiolytics) List and Equivalents'})
      this.meta.updateTag({name: 'keywords', content: 'sleeping pill,hypnotics,anxiolytics,benzodiazepine,benzo,alprazolam,xanax,klonopin,diazepam,valium,flunitrazepam,lorazepam,ativan,temazepam,zolpidem,ambien'})
      this.meta.updateTag({name: 'twitter:card', content: 'summary'})
      this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
      this.meta.updateTag({name: 'twitter:title', content: 'Benzodiazepines List and Equivalents'})
      this.meta.updateTag({name: 'twitter:description', content: 'Benzodiazepines(hypnotics and anxiolytics) List and Equivalents'})
      this.meta.updateTag({name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/picts/mict2.jpg'})
  }

  ngOnInit() {
    this.title = 'Benzodiazepines List and Equivalents';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

    // twitterシェアボタンの置き方。以下の通りAfterViewInit()で後から
 // 以下のようなタグを作ってインサートする。
 //<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
 ngAfterViewInit(){
  var element = document.createElement('a');//aタグを作ります
  element.setAttribute('href',"https://twitter.com/share?ref_src=twsrc%5Etfw");
  element.setAttribute('class',"twitter-share-button");
  element.setAttribute('data-size',"large");
  element.setAttribute('data-text', this.title);
  element.setAttribute('data-url',this.currentURL);
  element.setAttribute('data-hashtags',"sleeping pill,hypnotics,anxiolytics,benzodiazepine,benzo");
  element.setAttribute('data-show-count',"true");

  var script = document.createElement('script');//scriptタグを作ります
  script.async = true;
  script.setAttribute('src',"https://platform.twitter.com/widgets.js");
  script.setAttribute('charset','utf-8');

  var td = document.createElement('td'); //<table>の<td>タグを作ります.これは同じ<tr>要素の中に各シェアボタンをいれて横並びにするため
  td.setAttribute('id', "TwitterSharebutton")

  //aタグ、scriptタグの順で設置します
  var div = document.getElementById("beforeTwitterSharebutton");//ボタンを置きたい場所の手前の要素を取得
  div.parentNode.insertBefore(td, div.nextSibling);//ボタンを置きたい場所にtdタグを追加
  div.parentNode.insertBefore(element,div.nextSibling);//ボタンを置きたい場所にaタグを追加
  div.parentNode.insertBefore(script,div.nextSibling);//scriptタグを追加してJSを実行し、aタグをボタンに変身させる
  }

}
