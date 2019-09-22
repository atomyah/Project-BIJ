import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-benzowords',
  templateUrl: './benzowords.component.html',
  styleUrls: ['../../../common.css', './benzowords.component.css']
})
export class BenzowordsComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta) {
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピン用語集'})
    this.meta.updateTag({name: 'description',content: '遷延性離脱症状、マイクロテーパリング減薬、ジアゼパム換算、キンドリングなどについて簡単に説明しています'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,遷延性離脱症状,テーパリング,ジアゼパム換算,非ベンゾ,非ベンゾジアゼピン,力価,半減期,キンドリング,水溶液タイトレーション,アシュトンマニュアル,離脱症状,副作用'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({name: 'twitter:title', content: 'ベンゾジアゼピン用語集'})
    this.meta.updateTag({name: 'twitter:description', content: '遷延性離脱症状、マイクロテーパリング減薬、ジアゼパム換算、キンドリングなどについて簡単に説明しています'})
    this.meta.updateTag({name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/image/twitcard.jpg'})    
   }

  ngOnInit() {
    this.title = '用語集';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }

}
