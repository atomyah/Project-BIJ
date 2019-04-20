import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from '../../../class/patients';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」

@Component({
  selector: 'app-patients-top',
  templateUrl: './patients-top.component.html',
  styleUrls: ['../../../common.css', './patients-top.component.css']
})
export class PatientsTopComponent implements OnInit {
  
    /* コレクション名：patientsarticles
       インターフェース名：PatientsArticles
      　DI名：patientsarticles
    */

  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;

  title: string;　// このページのタイトル. ngOnInit()にて設定

  constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles'); 
    this.patientsarticles = this.patientsarticlesRef.valueChanges();
   }

  ngOnInit() {
    this.title = '患者(被害者)の方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}
