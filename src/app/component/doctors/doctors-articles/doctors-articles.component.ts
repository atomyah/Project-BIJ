import { Component, OnInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
 import { Router, ActivatedRoute } from '@angular/router';
 // ValueSharedServiceをインポート
 import { ValueSharedService } from '../../../service/value-shared.service';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { DoctorsArticles } from '../../../class/doctors';  // Patientsデータタイプインターフェース
 import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」
 import { map } from "rxjs/operators"; // 追加
 import { SeoService } from '../../../service/seo.service';

@Component({
  selector: 'app-doctors-articles',
  templateUrl: './doctors-articles.component.html',
  styleUrls: ['../../../common.css', './doctors-articles.component.css']
})
export class DoctorsArticlesComponent implements OnInit {

  doctorsarticlesRef: AngularFirestoreCollection<DoctorsArticles>;
  doctorsarticles: Observable<DoctorsArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定
  currentURL: string; // Twitterシェアボタン設置に使用
  articlenum: string; // articleのid番号をarticleid変数に格納

  // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
  constructor(private route: Router, public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore, private seo: SeoService) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.doctorsarticlesRef = this.db.collection<DoctorsArticles>('doctorsarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.doctorsarticles = this.doctorsarticlesRef.snapshotChanges().pipe
    (map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as DoctorsArticles;
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
    this.seo.generateTagsDoctorsArticles(this.articlenum);
  }

}
