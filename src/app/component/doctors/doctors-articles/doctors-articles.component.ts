import { Component, OnInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
 import { Router, ActivatedRoute } from '@angular/router';
 // ValueSharedServiceをインポート
 import { ValueSharedService } from '../../../service/value-shared.service';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
 import { DoctorsArticles } from '../../../class/doctors';  // Patientsデータタイプインターフェース
 import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」

@Component({
  selector: 'app-doctors-articles',
  templateUrl: './doctors-articles.component.html',
  styleUrls: ['../../../common.css', './doctors-articles.component.css']
})
export class DoctorsArticlesComponent implements OnInit {

  doctorsarticlesRef: AngularFirestoreCollection<DoctorsArticles>;
  doctorsarticles: Observable<DoctorsArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定

  articlenum: string; // articleのid番号をarticleid変数に格納

  // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.doctorsarticlesRef = this.db.collection<DoctorsArticles>('doctorsarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.doctorsarticles = this.doctorsarticlesRef.valueChanges();
   }

  ngOnInit() {
    this.title = 'ドクターの方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}
