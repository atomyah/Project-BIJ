import { Component, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['../../common.css', './introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  title: string;
  currentURL: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService,private meta: Meta) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピン(睡眠薬、抗不安薬)概要'})
    this.meta.updateTag({name: 'description',content: 'ベンゾ被害は日本だけでなく世界中で同様です。詳細のデータをもとにこれを人類史上最悪の薬害と位置づけました。米・欧・オセアニア・アジア・・中東・インド・南米、国境を越えて対峙していきましょう'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/introduction'})
    this.meta.updateTag({property: 'og:title', content: 'ベンゾジアゼピン(睡眠薬、抗不安薬)概要'})
    this.meta.updateTag({property: 'og:description', content: 'ベンゾ被害は日本だけでなく世界中で同様です。詳細のデータをもとにこれを人類史上最悪の薬害と位置づけました。米・欧・オセアニア・アジア・・中東・インド・南米、国境を越えて対峙していきましょう'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard_introduction.png'})    
   }
  

  // ngOnInit()の中でいいのかわからないがValueSharedService.childTitleにこのページのタイトルを渡す。  
  ngOnInit() {
    this.title = 'ベンゾジアゼピン概略';
    this.valueSharedService.currentTitle = this.title;
  }



}