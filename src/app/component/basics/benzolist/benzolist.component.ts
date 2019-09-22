import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';


@Component({
  selector: 'app-benzolist',
  templateUrl: './benzolist.component.html',
  styleUrls: ['../../../common.css', './benzolist.component.css']
})
export class BenzolistComponent implements OnInit {
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
      this.meta.updateTag({name: 'title', content: 'ジアゼパム換算一覧表'})
      this.meta.updateTag({name: 'description',content: '睡眠薬、抗不安薬（ベンゾジアゼピン薬剤）すべてのジアゼパム換算一覧表です'})
      this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,ジアゼパム換算,アルプラゾラム,ソラナックス,デパス,エチゾラム,リーゼ,クロチアゼパム,ジアゼパム,セルシン,ブロマゼパム,レキソタン,ロフラゼプ酸エチル,メイラックス,ロラゼパム,ワイパックス,エスタゾラム,ユーロジン,クアゼパム,ドラール,ゾルピデム,マイスリー,ニトラゼパム,ベンザリン,フルニトラゼパム,サイレース,ロヒプノール,ブロチゾラム,レンドルミン,ロルメタゼパム,エバミール,リボトリール,ランドセン'})
	    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
	    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
	    this.meta.updateTag({name: 'twitter:title', content: 'ベンゾジアゼピン薬剤ジアゼパム換算一覧'})
	    this.meta.updateTag({name: 'twitter:description', content: '日本における処方可能なベンゾジアゼピン系薬一覧およびジアゼパム換算値'})
	    this.meta.updateTag({name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/picts/mict2.jpg'})
  }

  ngOnInit() {
    this.title = 'ベンゾジアゼピン薬剤一覧 - ジアゼパム換算表';
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
  element.setAttribute('data-hashtags',"ベンゾジアゼピン,ベンゾ");
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
