import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import { Router, ActivatedRoute } from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-benzolist-eng',
  templateUrl: './benzolist-eng.component.html',
  styleUrls: ['../../../common.css', './benzolist-eng.component.css']
})
export class BenzolistEngComponent implements OnInit {
  basicsdata = BASICSDATA;

  title: string;
  currentURL: string;  

  // コンストラクタでValueSharedServiceを呼び出す
  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)  
    this.meta.updateTag({name: 'title', content: 'Benzodiazepines List and Equivalents'})
    this.meta.updateTag({name: 'description',content: 'Benzodiazepines(hypnotics and anxiolytics) List and Equivalents'})
    this.meta.updateTag({name: 'keywords', content: 'sleeping pill,hypnotics,anxiolytics,benzodiazepine,benzo,alprazolam,xanax,klonopin,diazepam,valium,flunitrazepam,lorazepam,ativan,temazepam,zolpidem,ambien'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/benzolisteng'})
    this.meta.updateTag({property: 'og:title', content: 'Benzodiazepines List and Equivalents'})
    this.meta.updateTag({property: 'og:description', content: 'Benzodiazepines(hypnotics and anxiolytics) List and Equivalents'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard.jpg'}) 
  }

  ngOnInit() {
    this.title = 'Benzodiazepines List and Equivalents';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }


}
