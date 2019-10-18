import { Component, OnInit, AfterViewInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
 import { Router, ActivatedRoute } from '@angular/router';
 // ValueSharedServiceをインポート
 import { ValueSharedService } from '../../../service/value-shared.service';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { MediasArticles } from '../../../class/medias';  // Patientsデータタイプインターフェース
 import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
 import { map } from "rxjs/operators"; // 追加
 import { SeoService } from '../../../service/seo.service';

@Component({
  selector: 'app-medias-articles',
  templateUrl: './medias-articles.component.html',
  styleUrls: ['../../../common.css', './medias-articles.component.css']
})
export class MediasArticlesComponent implements OnInit, AfterViewInit {

  mediasarticlesRef: AngularFirestoreCollection<MediasArticles>;
  mediasarticles: Observable<MediasArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定
  currentURL: string; // Twitterシェアボタン設置に使用
  articlenum: string; // articleのid番号をarticleid変数に格納

  constructor(private route: Router, public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore, private seo: SeoService) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.mediasarticlesRef = this.db.collection<MediasArticles>('mediasarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.mediasarticles = this.mediasarticlesRef.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as MediasArticles;
        const id = action.payload.doc.id;
        const num = action.payload.doc.data().num;
        this.title = data.title;        // Firestoreから記事のタイトルを取ってきてngOnInitでtitleタグ設定
        return { id,num,  ...data };
        });
      }));   
  
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
   }

  ngOnInit() {
    this.seo.titleService.setTitle(this.title);
    this.seo.generateTagsMediasArticles(this.articlenum);
  }
  
// twitterシェアボタンの置き方。以下の通りAfterViewInit()で後から
 // 以下のようなタグを作ってインサートする。
 //<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
 ngAfterViewInit(){
  // !!!!!!!articleではngAfterViewInit()だと表示しない…(T_T)!!!!!!!!!!
  // !!!!!!!articleではngAfterViewChecked()だと2回表示する…(T_T)!!!!!!!!!!
  // !!!!!!!articleではngAfterViewInit()にsetTimeout()を設定し3秒待機…(^_^;)!!!!!!!!!!
  setTimeout(() => {
  console.log("@@@ngAfterViewInit");
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
}, 3000);
}
}
