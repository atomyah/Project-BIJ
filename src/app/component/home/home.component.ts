import { Component, Input, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../common.css','./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  currentURL: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService,private meta: Meta) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピン情報センター ー ホーム'})
    this.meta.updateTag({name: 'description',content: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,減薬,断薬,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,麻薬,神経'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/home'})
    this.meta.updateTag({property: 'og:title', content: 'ベンゾジアゼピン情報センター ー ホーム'})
    this.meta.updateTag({property: 'og:description', content: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard.png'})      
   }

  // ngOnInit()の中でいいのかわからないがValueSharedService.childTitleにこのページのタイトルを渡す。
  ngOnInit() {
    this.title = 'ホーム';
    this.valueSharedService.currentTitle = this.title;
    
          // 以下はグーグルカスタムサーチ用スクリプトタグ挿入
          let cx = '002441034172234205663:svlaurhzgs9';
          let gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
          let s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
  }

}
