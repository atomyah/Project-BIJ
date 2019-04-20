import { Component, OnInit } from '@angular/core';
 // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from '../../../class/patients';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」



@Component({
  selector: 'app-patients-ariticles',
  templateUrl: './patients-ariticles.component.html',
  styleUrls: ['../../../common.css', './patients-ariticles.component.css']
})
export class PatientsAriticlesComponent implements OnInit {

  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定

  articlenum: string; // articleのid番号をarticleid変数に格納


  // 現在ユーザーが表示しているURLやそのパラメータを参照するにはActivatedRouteが必要
  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.articlenum = this.router.snapshot.paramMap.get('num');
    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles', ref =>  // where検索文
    ref.where('num', '==', this.articlenum));
    this.patientsarticles = this.patientsarticlesRef.valueChanges();
   }


  ngOnInit() {    
    this.title = '患者(被害者)の方へ';
    this.valueSharedService.currentTitle = this.title;
  }


}
