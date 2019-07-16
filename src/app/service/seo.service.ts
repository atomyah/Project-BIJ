import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTagsHome() {
    this.meta.updateTag({ name: 'title', content: '【最大薬害】睡眠薬・抗不安薬依存 ー ホーム'});
    this.meta.updateTag({ name: 'description', content: '睡眠薬、抗不安薬のほとんどはベンゾジゼアピン系薬剤に分類されます。ベンゾジアゼピンは決められた処方量を守っても重篤な障害を引き起こします。日本だけでなく世界中で蔓延処方され約10人にひとりが服用しています'});
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
    this.meta.updateTag({ name: 'twitter:title', content: '【最大薬害】睡眠薬・抗不安薬依存 ー ホーム' });
    this.meta.updateTag({ name: 'twitter:description', content: '睡眠薬、抗不安薬のほとんどはベンゾジゼアピン系薬剤に分類されます。ベンゾジアゼピンは決められた処方量を守っても重篤な障害を引き起こします。日本だけでなく世界中で蔓延処方され約10人にひとりが服用しています' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/images/logo.png' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'benzoinfojapan' });
    this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピンについて' });
    this.meta.updateTag({ property: 'og:description', content: 'ベンゾジアゼピンに関する様々な医療文献を紹介しています' });
    this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/doctors_2_TaperingSolution.png' });
    this.meta.updateTag({ property: 'og:url', content: `https://benzoinfojapan.org/` });
  }

  generateTagsIntroduction() {
    this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピン概略'});
    this.meta.updateTag({ name: 'description', content: '日本のS-DDD値は世界9位の消費率です。米国の場合絶対量では世界最大の2200万錠以上／1日になります。ワースト１、２のフィンランド、アイルランドはものすごいことになっています。'});
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
    this.meta.updateTag({ name: 'twitter:title', content: 'ベンゾジアゼピン概略' });
    this.meta.updateTag({ name: 'twitter:description', content: '日本のS-DDD値は世界9位の消費率です。米国の場合絶対量では世界最大の2200万錠以上／1日になります。ワースト１、２のフィンランド、アイルランドはものすごいことになっています。' });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://benzoinfojapan.org/assets/images/introduction3.png' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'benzoinfojapan' });
    this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピン概略' });
    this.meta.updateTag({ property: 'og:description', content: 'ベンゾジアゼピンに関する様々な医療文献を紹介しています' });
    this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/introduction3.png' });
    this.meta.updateTag({ property: 'og:url', content: `https://benzoinfojapan.org/introduction` });    
  }

}


