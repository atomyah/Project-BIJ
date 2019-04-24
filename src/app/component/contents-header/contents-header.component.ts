import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ValueSharedService } from '../../service/value-shared.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { PatientsArticles } from './../../class/patients';  // Patientsデータタイプインターフェース
import { Observable } from 'rxjs'; // 正式名称「Reactive Extensions for JavaScript」


@Component({
  selector: 'app-contents-header',
  templateUrl: './contents-header.component.html',
  styleUrls: ['./contents-header.component.css']
})
export class ContentsHeaderComponent implements OnInit {
  title: string;
  basicsdata: object; // basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト

  patientsarticlesRef: AngularFirestoreCollection<PatientsArticles>;
  patientsarticles: Observable<PatientsArticles[]>;

// コンテンツヘッダーのバーガーメニューを作成するためにデータベースオブジェクトを取ってくる必要あり
  constructor(public route: Router,private valueSharedService: ValueSharedService, private db: AngularFirestore) {
    this.patientsarticlesRef = this.db.collection<PatientsArticles>('patientsarticles'); 
    this.patientsarticles = this.patientsarticlesRef.valueChanges();
  }

// 「患者（被害者）の方へ」の各ページに飛ばすメソッド
//（HTMLの方でrouterLink="/patients-article/{{ item.num }}" だとURLは変わるけどページ遷移しない
  async goAnother(item: PatientsArticles) {
    await this.route.navigate(["/patients-article/" + item.num]);
    location.reload();
  }


  ngOnInit() {
    this.title = this.valueSharedService.currentTitle;
    this.basicsdata = this.valueSharedService.basicsdata;// basicsdataはベンゾ一般知識でのみ使用するデータオブジェクト
  }

}




 



