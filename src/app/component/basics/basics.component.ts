import { Component, OnInit } from '@angular/core';
// basicschildren.tsからエキスポートされたBASICSDATAをimport.
import { BASICSDATA } from '../../class/basicschildren';
import {Router,ActivatedRoute} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['../../common.css', './basics.component.css']
})
export class BasicsComponent implements OnInit {
/*
basicsdataにbasics配下のチャイルドコンポーネントの要約がJSON形式で格納されている.
class/basicschildren.tsを見るように.
    ＜こんな形＞
    export const BASICSDATA: Basics[] = [
    id: number;
    title: string;
    date: string;
    url: string;
    picture: string;
    feature: string;
    ]
*/
    basicsdata = BASICSDATA;　// basicschildren.tsからエキスポートされたBASICSDATA

    title: string;
    currentURL: string;
    

// コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService,private meta: Meta) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'ベンゾ一般知識'})
    this.meta.updateTag({name: 'description',content: 'ベンゾジアゼピン（睡眠薬、抗不安薬）に関する一般的なナレッジです'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/basics'})
    this.meta.updateTag({property: 'og:title', content: 'ベンゾ一般知識'})
    this.meta.updateTag({property: 'og:description', content: 'ベンゾジアゼピン（睡眠薬、抗不安薬）に関する一般的なナレッジです'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard.png'})     
   }

// service/value-shared.service経由でこのページのタイトルと
// チャイルドコンポーネントの要約(basicsdata)を渡す。
// valueSharedServiceからcontent-header.component.tsへと渡る。
// 'ベンゾ一般知識'配下のチャイルド達、「ベンゾ歴史」、「薬剤一覧」、「用語集」の各コンポーネントも同様。
  ngOnInit() {
    this.title = 'ベンゾ一般知識';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}


