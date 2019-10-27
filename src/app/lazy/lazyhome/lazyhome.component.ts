import { Component, Input, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-lazyhome',
  templateUrl: './lazyhome.component.html',
  styleUrls: ['../../common.css','./lazyhome.component.css']
})
export class LazyhomeComponent implements OnInit {
  title: string;
  currentURL: string;

  constructor(public router: ActivatedRoute,private meta: Meta,private valueSharedService: ValueSharedService) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)    
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピン情報センター ー ホーム'})
    this.meta.updateTag({name: 'description',content: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,テーパリング,ジアゼパム換算,アシュトンマニュアル,離脱症状,依存症,アルコール依存症,覚せい剤,麻薬,神経'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({name: 'twitter:title', content: 'ベンゾジアゼピン情報センター ー ホーム'})
    this.meta.updateTag({name: 'twitter:description', content: 'ベンゾジアゼピンは長期連用すると処方量依存といってやめるのが非常に難しくなります。依存症(addiction)ではなく薬剤性神経システム傷害(Injury)です。それゆえ覚せい剤やヘロインなどの麻薬とは同じ土俵で対処してはいけません'})
    this.meta.updateTag({name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/images/twitcard.png'}),
    this.meta.updateTag({url: 'https://benzoinfojapan.org/lazy/home'})    
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
