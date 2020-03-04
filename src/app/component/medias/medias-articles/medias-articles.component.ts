import { Component, OnInit } from '@angular/core';
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
export class MediasArticlesComponent implements OnInit {

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
    this.seo.generateTagsMediasArticles(this.articlenum);
  }
  
}
