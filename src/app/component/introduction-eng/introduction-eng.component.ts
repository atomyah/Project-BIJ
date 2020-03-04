import { Component, OnInit } from '@angular/core';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../service/value-shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-introduction-eng',
  templateUrl: './introduction-eng.component.html',
  styleUrls: ['../../common.css', './introduction-eng.component.css']
})
export class IntroductionEngComponent implements OnInit {
  title: string;
  currentURL: string;

  constructor(public router: ActivatedRoute, private valueSharedService: ValueSharedService,private meta: Meta,public titleService: Title) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)
    this.titleService.setTitle('Summary of Benzodiazepine');
    this.meta.updateTag({name: 'title', content: 'Summary of Benzodiazepine'})
    this.meta.updateTag({name: 'description',content: 'Even if a small amount of benzo is used for a long time, it becomes very difficult to stop it. This is clearly not “addiction” but “central nervous system injury”'})
    this.meta.updateTag({name: 'keywords', content: 'sleeping pill,hypnotics,anxiolytics,drug,addiction,withdraw,withdrawal symptoms,Ashton Manual,insomnia,anxiety,fibromyalgia,tapering,PWS,benzodiazepine,benzo,alprazolam,xanax,klonopin,diazepam,valium,flunitrazepam,lorazepam,ativan,temazepam,zolpidem,ambien'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/introductioneng'})
    this.meta.updateTag({property: 'og:title', content: 'Summary of Benzodiazepine'})
    this.meta.updateTag({property: 'og:description', content: 'Even if a small amount of benzo is used for a long time, it becomes very difficult to stop it. This is clearly not “addiction” but “central nervous system injury”'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/imagestwitcard_introduction.png'}) 

  }

  // ngOnInit()の中でいいのかわからないがValueSharedService.childTitleにこのページのタイトルを渡す。  
  ngOnInit() {
    this.title = 'summary of benzodiazepine';
    this.valueSharedService.currentTitle = this.title;
  }

}
