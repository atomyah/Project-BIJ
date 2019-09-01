import { Component, AfterViewInit, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-introduction-eng',
  templateUrl: './introduction-eng.component.html',
  styleUrls: ['../../common.css', './introduction-eng.component.css']
})
export class IntroductionEngComponent implements AfterViewInit, OnInit {
  title: string;
  currentURL: string;

  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)     
  }

  // ngOnInit()の中でいいのかわからないがValueSharedService.childTitleにこのページのタイトルを渡す。  
  ngOnInit() {
    this.title = 'summary of benzodiazepine';
    this.valueSharedService.currentTitle = this.title;
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
  element.setAttribute('data-hashtags',"benzodiazepine,benzo");
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