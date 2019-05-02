import { Component, OnInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
 import { Router, ActivatedRoute } from '@angular/router';
 // ValueSharedServiceをインポート
 import { ValueSharedService } from '../../../service/value-shared.service';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { MediasArticles } from '../../../class/medias';  // Patientsデータタイプインターフェース
 import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」

@Component({
  selector: 'app-medias-articles',
  templateUrl: './medias-articles.component.html',
  styleUrls: ['../../../common.css', './medias-articles.component.css']
})
export class MediasArticlesComponent implements OnInit {

  mediasarticlesRef: AngularFirestoreCollection<MediasArticles>;
  mediasarticles: Observable<MediasArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定

  articlenum: string; // articleのid番号をarticleid変数に格納

  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.mediasarticlesRef = this.db.collection<MediasArticles>('mediasarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.mediasarticles = this.mediasarticlesRef.valueChanges();
   }

  ngOnInit() {
    this.title = 'メディアの方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}
