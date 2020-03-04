import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-benzohistory',
  templateUrl: './benzohistory.component.html',
  styleUrls: ['../../../common.css', './benzohistory.component.css']
})
export class BenzohistoryComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;
  currentURL: string;

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta,public titleService: Title) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)
    this.titleService.setTitle('ベンゾジアゼピンの歴史');
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピンの歴史'})
    this.meta.updateTag({name: 'description',content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,歴史,ロッシュ,レオ・スターンバック,バルビツール,リブリウム,スイス,製薬会社,トランキライザー,ジアゼパム,Valium,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/benzohistory'})
    this.meta.updateTag({property: 'og:title', content: 'ベンゾジアゼピンの歴史'})
    this.meta.updateTag({property: 'og:description', content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/ValiumAd-benzohistory.jpg'})       
   }

  ngOnInit() {
    this.title = 'ベンゾジアゼピンの歴史';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }


}
