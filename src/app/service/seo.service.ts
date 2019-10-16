import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  patinentsarticlenum: string;
  doctorsarticlenum: string;
  mediasarticlenum: string;

  constructor(public meta: Meta, public titleService: Title) { }

  generateTagsPatientsArticles(e: any) {
    this.patinentsarticlenum = e;
    switch(this.patinentsarticlenum) {
      case '1':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾ処方量依存者が依存専門施設に行ってはいけない理由'});
        this.meta.updateTag({ name: 'description', content: 'この記事は、ベンゾ処方量依存者がアルコール依存症や違法薬物依存者のための依存専門病院に行ってはいけない５つの理由について述べています'});
        this.meta.updateTag({ name: 'keywords', content: '麻薬,離脱症状,依存専門施設,依存専門病院,ナルコノン,身体依存,中毒,デトックス,12のステップ,薬物依存,ベンゾジアゼピン,マルコム・レーダー博士,アディクション' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/1' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ処方量依存者が依存専門施設に行ってはいけない理由' });
        this.meta.updateTag({ property: 'og:description', content: 'この記事は、ベンゾ処方量依存者がアルコール依存症や違法薬物依存者のための依存専門病院に行ってはいけない５つの理由について述べています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict1.png' });
        break;
      case '2':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾ離脱中に脳の中で何が起きているか'});
        this.meta.updateTag({ name: 'description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事です。2012年に投稿され、以降、世界中の被害者および医療関係者に読まれ現在30万ビューに達します'});
        this.meta.updateTag({ name: 'keywords', content: '脳卒中,Parker,神経細胞学,離脱症状,生理学,脳,GABA,グルタミン酸,セロトニン,中枢神経,脳障害,耐性,扁桃体,amygdala,海馬,Hippocampus,視床下部,Hypothalamus,前頭葉,Frontal Lobe,後頭葉,Occipital Lobe,前庭系,Vestibular System,側頭葉,Temporal Lobe,アカシジア' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/2' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ離脱中に脳の中で何が起きているか' });
        this.meta.updateTag({ property: 'og:description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事です。2012年に投稿され、以降、世界中の被害者および医療関係者に読まれ現在30万ビューに達します' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict15.jpg' });
        break;
      case '3':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'パーカーが勧めるサプリメント'});
        this.meta.updateTag({ name: 'description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事「ベンゾ離脱中に脳の中で何が起きているか」の著者Parkerによる追記記事です。回復に役立つサプリメントについて非常に詳しく述べられています'});
        this.meta.updateTag({ name: 'keywords', content: 'サプリメント,Parker,脳損傷,離脱症状,生理学,神経学,脳,GABA,グルタミン酸,セロトニン,中枢神経,てんかん,うつ病,不安障害,オメガ3,魚油,マグネシウム,ビタミンD,亜鉛,ビタミンB,ミネラル,プロバイオティクス,ミヤリサン,フィッシュオイル,ナイアシン,オーソモレキュラー,プロテイン,依存,アカシジア' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/3' })
        this.meta.updateTag({ property: 'og:title', content: 'パーカーが勧めるサプリメント' });
        this.meta.updateTag({ property: 'og:description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事「ベンゾ離脱中に脳の中で何が起きているか」の著者Parkerによる追記記事です。回復に役立つサプリメントについて非常に詳しく述べられています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict3.png' });
        break;
      case '4':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾ専門医の見つけ方：ベンゾ断薬10のヒント'});
        this.meta.updateTag({ name: 'description', content: 'この記事は、米国のNPO団体Benzodiazepine Information Coalitionの創立者ジャニスカールによるベンゾ減薬・断薬の心構えやアプローチ方法が書かれています'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,ベンゾ,医者,製薬会社,アシュトンマニュアル,専門医,テーパリング,水溶液タイトレーション,アディクション,依存専門病院,ジアゼパム換算,オーバードーズ,FDA,遷延性離脱症状,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス,スペクトル,フルニトラゼパム,サイレース,ロヒプノール,12ステップ' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/4' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ専門医の見つけ方：ベンゾ断薬10のヒント' });
        this.meta.updateTag({ property: 'og:description', content: 'この記事は、米国のNPO団体Benzodiazepine Information Coalitionの創立者ジャニスカールによるベンゾ減薬・断薬の心構えやアプローチ方法が書かれています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict4.png' });
        break;
      case '5':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: '水溶液タイトレーションの方法'});
        this.meta.updateTag({ name: 'description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつである水溶液タイトレーションについて、そのやり方を図解したものです'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,マイクロテーパリング,離脱症状,ベンゾジアゼピン,ベンゾ,テーパリング,ビーカー,アシュトンマニュアル,シリンジ,テーパリング,水溶液タイトレーション,フルニトラゼパム,調剤薬局,ジアゼパム換算,サイレース,ロヒプノール,麻薬,ヤスリ,ドライカット,細粉法,頭痛,ステイ,電子天秤,スケール,秤,米国,デートレイプ,豪州' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/5' })
        this.meta.updateTag({ property: 'og:title', content: '水溶液タイトレーションの方法' });
        this.meta.updateTag({ property: 'og:description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつである水溶液タイトレーションについて、そのやり方を図解したものです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict5.jpg' });
        break;
      case '6':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: '水溶液タイトレーション方法つづき：具体的例'});
        this.meta.updateTag({ name: 'description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつである水溶液タイトレーションについて、そのやり方を図解したものです'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,マイクロテーパリング,離脱症状,ベンゾジアゼピン,ベンゾ,テーパリング,ビーカー,アシュトンマニュアル,シリンジ,テーパリング,水溶液タイトレーション,フルニトラゼパム,調剤薬局,ジアゼパム換算,サイレース,ロヒプノール,麻薬,ヤスリ,ドライカット,細粉法,頭痛,ステイ,電子天秤,スケール,秤,米国,デートレイプ,豪州' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/6' })
        this.meta.updateTag({ property: 'og:title', content: '水溶液タイトレーション方法つづき：具体的例' });
        this.meta.updateTag({ property: 'og:description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつである水溶液タイトレーションについて、そのやり方を図解したものです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict6.png' });
        break;
      case '7':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾ減薬FAQ'});
        this.meta.updateTag({ name: 'description', content: '減薬の相談をいくつか受けてきたなかで、代表的なご質問と管理人であるわたしなりの考えを掲載したものです【免責事項：ここで申し上げることはすべて身体的依存に陥っている被害者に対してであり、中毒やアディクションの兆候を示す方に対してではありません】'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,マイクロテーパリング,離脱症状,ベンゾジアゼピン,ベンゾ,テーパリング,置換,アシュトンマニュアル,ジアゼパム換算,アルプラゾラム,水溶液タイトレーション,フルニトラゼパム,ソラナックス,ジアゼパム換算,サイレース,ロヒプノール,クロナゼパム,コンスタン,ニトラゼパム,ベンザリン,リボトリール,ハルシオン,GABA受容体,クエチアピン,ミルタザピン,ベルソムラ,SSRI,SNRI,サインバルタ,抗うつ薬,デパス,メイラックス,アルコール,抗生物質,キノロン,ミノマイシン,クラリス,セフカペン,アジスロマイシン,再服薬' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/7' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ減薬FAQ' });
        this.meta.updateTag({ property: 'og:description', content: '減薬の相談をいくつか受けてきたなかで、代表的なご質問と管理人であるわたしなりの考えを掲載したものです【免責事項：ここで申し上げることはすべて身体的依存に陥っている被害者に対してであり、中毒やアディクションの兆候を示す方に対してではありません】' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/flower-avatar.jpg' });
        break;        
    }
  }

  generateTagsDoctorsArticles(e: any) {
    this.doctorsarticlenum = e;
    switch(this.doctorsarticlenum) {
      case '1':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ドクターのみなさまへ'});
        this.meta.updateTag({ name: 'description', content: 'ドクターのみなさまへ。まずはこちらをお読みください。10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）を紹介しそのミッションステートメント訳文を掲載しました'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,ベンゾ,医者,製薬会社,アシュトンマニュアル,イギリス,モーズレイ,ガイドライン,Dependency,addiction,アディクション,依存症,退薬方法,テーパリング,水溶液タイトレーション,アディクション,アルコール依存,ジアゼパム換算,医療,覚せい剤,ジアゼパム,Valium,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/1' })
        this.meta.updateTag({ property: 'og:title', content: 'ドクターのみなさまへ' });
        this.meta.updateTag({ property: 'og:description', content: 'ドクターのみなさまへ。まずはこちらをお読みください。10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）を紹介しそのミッションステートメント訳文を掲載しました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict1.png' });
        break;
      case '2':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピンテーパリング戦略とソリューション'});
        this.meta.updateTag({ name: 'description', content: '10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）により2017年に作成されたベンゾジアゼピン減薬ガイドラインです。ドクターによる臨床経験とベンゾジアゼピンテーパリングを成功裡にやり遂げた何千人もの生存者によって開発されました'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,ベンゾ,抗不安薬,ヘロイン,アシュトンマニュアル,遷延性離脱症候群,PAWS,ガイドライン,FDA,RoxaneLaboratories,薬物療法,依存症,退薬方法,テーパリング,水溶液タイトレーション,薬剤師,interdose,ジアゼパム換算,医療,半減期,ジアゼパム,Valium,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/1' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピンテーパリング戦略とソリューション' });
        this.meta.updateTag({ property: 'og:description', content: '10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）により2017年に作成されたベンゾジアゼピン減薬ガイドラインです。ドクターによる臨床経験とベンゾジアゼピンテーパリングを成功裡にやり遂げた何千人もの生存者によって開発されました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict2.png' });
        break;

    }
  }

  generateTagsMediasArticles(e: any) {
    this.mediasarticlenum = e;
    switch(this.mediasarticlenum) {
      case '1':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
        this.meta.updateTag({ name: 'title', content: 'ベンゾ処方量依存者が依存専門施設に行ってはいけない理由'});
        this.meta.updateTag({ name: 'description', content: 'この記事は、ベンゾ処方量依存者がアルコール依存症や違法薬物依存者のための依存専門病院に行ってはいけない５つの理由について述べています'});
        this.meta.updateTag({ name: 'keywords', content: '麻薬,離脱症状,依存専門施設,依存専門病院,ナルコノン,身体依存,中毒,デトックス,12のステップ,薬物依存,ベンゾジアゼピン,マルコム・レーダー博士,アディクション' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/1' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ処方量依存者が依存専門施設に行ってはいけない理由' });
        this.meta.updateTag({ property: 'og:description', content: 'この記事は、ベンゾ処方量依存者がアルコール依存症や違法薬物依存者のための依存専門病院に行ってはいけない５つの理由について述べています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict1.png' });
        break;
      case '2':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.meta.updateTag({ name: 'title', content: 'ベンゾ離脱中に脳の中で何が起きているか'});
          this.meta.updateTag({ name: 'description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事です。2012年に投稿され、以降、世界中の被害者および医療関係者に読まれ現在30万ビューに達します'});
          this.meta.updateTag({ name: 'keywords', content: '神経細胞学,離脱症状,生理学,脳,GABA,グルタミン酸,中枢神経,脳障害,耐性,扁桃体,amygdala,海馬,Hippocampus,視床下部,Hypothalamus,前頭葉,Frontal Lobe,後頭葉,Occipital Lobe,前庭系,Vestibular System,側頭葉,Temporal Lobe,アカシジア' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/2' })
          this.meta.updateTag({ property: 'og:title', content: 'ベンゾ離脱中に脳の中で何が起きているか' });
          this.meta.updateTag({ property: 'og:description', content: 'この記事は、世界最大ベンゾ情報掲示板ベンゾバディの投稿記事でもっとも読まれている記事です。2012年に投稿され、以降、世界中の被害者および医療関係者に読まれ現在30万ビューに達します' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict15.jpg' });

    }
  }
}


