import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DoctorsArticles } from '../../../class/doctors';
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」

@Component({
  selector: 'app-doctors-top',
  templateUrl: './doctors-top.component.html',
  styleUrls: ['../../../common.css', './doctors-top.component.css']
})
export class DoctorsTopComponent implements OnInit {

    /* コレクション名：doctorsarticles
       DoctorsArticles
      　DI名：doctorsarticles
    */

   doctorsarticlesRef: AngularFirestoreCollection<DoctorsArticles>;
   doctorsarticles: Observable<DoctorsArticles[]>;
 
   title: string;　// このページのタイトル. ngOnInit()にて設定
   
 
   constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
     this.doctorsarticlesRef = this.db.collection<DoctorsArticles>('doctorsarticles'); 
     this.doctorsarticles = this.doctorsarticlesRef.valueChanges();
    }
 
   ngOnInit() {
     this.title = 'ドクターの方へ';
     this.valueSharedService.currentTitle = this.title;
   }

}
