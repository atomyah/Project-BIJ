import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MediasArticles } from '../../../class/medias';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」

@Component({
  selector: 'app-medias-top',
  templateUrl: './medias-top.component.html',
  styleUrls: ['../../../common.css', './medias-top.component.css']
})
export class MediasTopComponent implements OnInit {

    /* コレクション名：mediasarticles
       インターフェース名：MediasArticles
      　DI名：mediasarticles
    */

   mediasarticlesRef: AngularFirestoreCollection<MediasArticles>;
   mediasarticles: Observable<MediasArticles[]>;
 
   title: string;　// このページのタイトル. ngOnInit()にて設定

  constructor(public router: Router, private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.mediasarticlesRef = this.db.collection<MediasArticles>('mediasarticles'); 
    this.mediasarticles = this.mediasarticlesRef.valueChanges();
   }

  ngOnInit() {
    this.title = 'メディアの方へ';
    this.valueSharedService.currentTitle = this.title;
  }

}
