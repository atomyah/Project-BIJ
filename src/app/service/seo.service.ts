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
        this.titleService.setTitle('ベンゾ処方量依存者が依存専門施設に行ってはいけない理由');
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
        this.titleService.setTitle('ベンゾ離脱中に脳の中で何が起きているか');
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
        this.titleService.setTitle('パーカーが勧めるサプリメント');
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
        this.titleService.setTitle('ベンゾ専門医の見つけ方：ベンゾ断薬10のヒント');
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
        this.titleService.setTitle('水溶液タイトレーションの方法');
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
        this.titleService.setTitle('水溶液タイトレーション方法つづき：具体的例');
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
        this.titleService.setTitle('ベンゾ減薬FAQ');
        this.meta.updateTag({ name: 'title', content: 'ベンゾ減薬FAQ'});
        this.meta.updateTag({ name: 'description', content: '再服薬について、ジアゼパム（セルシン）への置換について、断薬後からが勝負？、他剤の活用、メイラックスへの置換、アルコールについて、非ベンゾについて、風邪と抗生物質'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,マイクロテーパリング,離脱症状,ベンゾジアゼピン,ベンゾ,テーパリング,置換,アシュトンマニュアル,ジアゼパム換算,アルプラゾラム,水溶液タイトレーション,フルニトラゼパム,ソラナックス,ジアゼパム換算,サイレース,ロヒプノール,クロナゼパム,コンスタン,ニトラゼパム,ベンザリン,リボトリール,ハルシオン,GABA受容体,クエチアピン,ミルタザピン,ベルソムラ,SSRI,SNRI,サインバルタ,抗うつ薬,デパス,メイラックス,アルコール,抗生物質,キノロン,ミノマイシン,クラリス,セフカペン,アジスロマイシン,再服薬' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/7' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ減薬FAQ' });
        this.meta.updateTag({ property: 'og:description', content: '再服薬について、ジアゼパム（セルシン）への置換について、断薬後からが勝負？、他剤の活用、メイラックスへの置換、アルコールについて、非ベンゾについて、風邪と抗生物質' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/flower-avatar.jpg' });
        break;
      case '8':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.titleService.setTitle('管理人のベンゾ減薬記録');
        this.meta.updateTag({ name: 'title', content: '管理人のベンゾ減薬記録'});
        this.meta.updateTag({ name: 'description', content: '再服薬から立て直した後の管理人のベンゾ減薬記録になります。あくまでご参考に'});
        this.meta.updateTag({ name: 'keywords', content: 'ベンゾ減薬,ベンゾ断薬,マイクロテーパリング,ベンゾ,テーパリング,置換,水溶液タイトレーション,フルニトラゼパム,ジアゼパム換算,サイレース,ロヒプノール,ジアゼパム,再服薬' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/8' })
        this.meta.updateTag({ property: 'og:title', content: '管理人のベンゾ減薬記録' });
        this.meta.updateTag({ property: 'og:description', content: '再服薬から立て直した後の管理人のベンゾ減薬記録になります。あくまでご参考に' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict8.png' });
        break;   
      case '9':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.titleService.setTitle('ドライカット(細粉法)での減薬方法');
        this.meta.updateTag({ name: 'title', content: 'ドライカット(細粉法)での減薬方法'});
        this.meta.updateTag({ name: 'description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつであるドライカット(細粉法)での減薬方法について、そのやり方を図解したものです'});
        this.meta.updateTag({ name: 'keywords', content: 'ベンゾ減薬,ベンゾ断薬,マイクロテーパリング,ベンゾ,テーパリング,置換,ドライカット,細粉法,水溶液タイトレーション,フルニトラゼパム,ジアゼパム換算,サイレース,ロヒプノール,ジアゼパム,再服薬' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/9' })
        this.meta.updateTag({ property: 'og:title', content: 'ドライカット(細粉法)での減薬方法' });
        this.meta.updateTag({ property: 'og:description', content: '管理人であるわたしが実際に行ったマイクロテーパリング減薬方法のひとつであるドライカット(細粉法)での減薬方法について、そのやり方を図解したものです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict9.png' });
        break;
      case '10':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.patinentsarticlenum)
        this.titleService.setTitle('my tapering log');
        this.meta.updateTag({ name: 'title', content: 'my tapering log'});
        this.meta.updateTag({ name: 'description', content: 'benzoinfojapan administrator tapering log, flunitrazepam done.'});
        this.meta.updateTag({ name: 'keywords', content: 'benzo, benzodiazepine, micro-tapering, tapering, liquid, flunitrazepam, Japan, withdraw, diazepam' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/patients-article/10' })
        this.meta.updateTag({ property: 'og:title', content: 'my tapering log' });
        this.meta.updateTag({ property: 'og:description', content: 'benzoinfojapan administrator tapering log, flunitrazepam done.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict9.png' });
        break;                
    }
  }

  generateTagsDoctorsArticles(e: any) {
    this.doctorsarticlenum = e;
    switch(this.doctorsarticlenum) {
      case '1':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ドクターのみなさまへ');
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
        this.titleService.setTitle('ベンゾジアゼピンテーパリング戦略とソリューション');
        this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピンテーパリング戦略とソリューション'});
        this.meta.updateTag({ name: 'description', content: '10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）により2017年に作成されたベンゾジアゼピン減薬ガイドラインです。ドクターによる臨床経験とベンゾジアゼピンテーパリングを成功裡にやり遂げた何千人もの生存者によって開発されました'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,ベンゾ,抗不安薬,ヘロイン,アシュトンマニュアル,遷延性離脱症候群,PAWS,ガイドライン,FDA,RoxaneLaboratories,薬物療法,依存症,退薬方法,テーパリング,水溶液タイトレーション,薬剤師,interdose,ジアゼパム換算,医療,半減期,ジアゼパム,Valium,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/2' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピンテーパリング戦略とソリューション' });
        this.meta.updateTag({ property: 'og:description', content: '10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）により2017年に作成されたベンゾジアゼピン減薬ガイドラインです。ドクターによる臨床経験とベンゾジアゼピンテーパリングを成功裡にやり遂げた何千人もの生存者によって開発されました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict2.png' });
        break;
      case '3':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('カサンドラの遺書「メディカルメッセージ」：双極性障害治療がなぜ私を自殺に追い込んだか');
        this.meta.updateTag({ name: 'title', content: 'カサンドラの遺書「メディカルメッセージ」：双極性障害治療がなぜ私を自殺に追い込んだか'});
        this.meta.updateTag({ name: 'description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,睡眠薬,抗不安薬,インフルエンザ,アシュトンマニュアル,遷延性離脱症候群,PAWS,ガイドライン,brain injury,アディクション,アルコール,依存症,退薬方法,テーパリング,生殖器ヘルペス,感覚過敏,耳鳴り,逆説的反応,記憶障害,パラノイア,離人感,パニック障害,うつ病,双極性障害,胃酸逆流,ヒステリー球,痙攣,振戦,不整脈,動悸,目眩,頭痛,脱毛,乾癬,不眠,ヘモクロマトーシス,幻覚,パラノイア,キンドリング,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン,自殺,心不全,呼吸停止,安楽死,フェイスブック,拡散,ニューヨーク,カリフォルニア,コロラド,ジェンダー平等,ベンゾバディ,ベンゾジアゼピンインフォメーションコーリション,BIC,GABA受容体' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/3' })
        this.meta.updateTag({ property: 'og:title', content: 'カサンドラの遺書「メディカルメッセージ」：双極性障害治療がなぜ私を自殺に追い込んだか' });
        this.meta.updateTag({ property: 'og:description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict3.png' });
        break;
      case '4':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ベンゾ依存に陥った医師による減薬方針 : 患者を救うベンゾ離脱法10の心得');
        this.meta.updateTag({ name: 'title', content: 'ベンゾ依存に陥った医師による減薬方針 : 患者を救うベンゾ離脱法10の心得'});
        this.meta.updateTag({ name: 'description', content: '記事の著者は、現役の心臓病専門医でベンゾ処方量依存になり現在減薬中のドクターです。（アイドライ症候群による激痛のため不眠にて数週間Xanax低用量を服用、Xanaxに依存形成。テーパリングにより減薬し3年2か月の減薬期間を経て2019年3月に断薬済み）'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,離脱症状,ベンゾジアゼピン,ベンゾ,抗不安薬,BenzoBuddies,ベンゾバディ,アシュトンマニュアル,遷延性離脱症候群,心臓病学者,クリスティーハーフ,解毒,依存症,退薬方法,テーパリング,ロシアンルーレット,ジアゼパム換算,アディクション,半減期,置換,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/4' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ依存に陥った医師による減薬方針 : 患者を救うベンゾ離脱法10の心得' });
        this.meta.updateTag({ property: 'og:description', content: '記事の著者は、現役の心臓病専門医でベンゾ処方量依存になり現在減薬中のドクターです。（アイドライ症候群による激痛のため不眠にて数週間Xanax低用量を服用、Xanaxに依存形成。テーパリングにより減薬し3年2か月の減薬期間を経て2019年3月に断薬済み）' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict4.png' });
        break;
      case '5':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死');
        this.meta.updateTag({ name: 'title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死'});
        this.meta.updateTag({ name: 'description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,ベンゾ,末梢神経,一気断薬,Cold Turky,アシュトンマニュアル,遷延性離脱症候群,甲状腺機能亢進症,インフォームドコンセント,希死念慮,羞明,解毒,全般性不安障害,退薬方法,線維筋痛症,甲状腺摘出手術,アカシジア,クリスチャン,ワイパックス,ロラゼパム,Ativan,依存専門病院,自殺' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/5' })
        this.meta.updateTag({ property: 'og:title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死' });
        this.meta.updateTag({ property: 'og:description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict5.jpg' });
        break;
      case '6':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('慢性疾患と似ているベンゾジアゼピン医原症状');
        this.meta.updateTag({ name: 'title', content: '慢性疾患と似ているベンゾジアゼピン医原症状'});
        this.meta.updateTag({ name: 'description', content: '米国NPO団体ベンゾジアゼピンインフォメーション協議会（https://benzoinfo.com)創立者ジャニスカールによる記事。ベンゾジアゼピン医原性の不定愁訴につけられる一般的な病名および症状を詳しく説明しています'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,橋本病,ライム病,リウマチ,高血圧,姿勢起立性頻拍症候群,頻脈,甲状腺機能亢進症,乾燥口,歯痛,羞明,クッシング病,全般性不安障害,甲状腺機能低下症,線維筋痛症,甲状腺摘出手術,胃酸逆流,過敏性腸症候群,エーラスダンロス症候群,橋本病,膀胱炎,肥満細胞活性化症候群,感染症,筋萎縮性側索硬化症,ALS,錯乱,偏頭痛,多発性硬化症,筋衰弱,筋萎縮性脳脊髄炎,慢性疲労症候群,神経痛,麻痺,硬直症候群,脳卒中,耳鳴り,めまい,聴覚過敏,ドライアイズ,眼瞼痙攣,双極性障害,境界性人格障害,カタトニア,うつ病,痴呆,解離性障害,不眠症,広場恐怖症,パニック障害,パラノイア,PTSD,勃起不全,不妊症,多発性卵巣症候群,身体表現性障害,月経不順,代替療法' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/6' })
        this.meta.updateTag({ property: 'og:title', content: '慢性疾患と似ているベンゾジアゼピン医原症状' });
        this.meta.updateTag({ property: 'og:description', content: '米国NPO団体ベンゾジアゼピンインフォメーション協議会（https://benzoinfo.com)創立者ジャニスカールによる記事。ベンゾジアゼピン医原性の不定愁訴につけられる一般的な病名および症状を詳しく説明しています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict4.png' });
        break;
      case '7':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('GABAクロライドチャンネルの構造と機能（Youtubeより）');
        this.meta.updateTag({ name: 'title', content: 'GABAクロライドチャンネルの構造と機能（Youtubeより）'});
        this.meta.updateTag({ name: 'description', content: 'エールニューヘブン病院所属のアレオサファルザデ医師の講義です。古い動画ですがGABA-A受容体の説明が短くわかりやすいので書き起こし＆翻訳をしました。耐性や離脱のことまでは触れていません'});
        this.meta.updateTag({ name: 'keywords', content: 'GABA,クロライドチャンネル,ベンゾジアゼピン,ニューロントランスミッター,イオンチャンネル,シナプス,ニューロン,活動電位,グルタミン,受容体,睡眠薬,中枢神経,バルビツール,Benzo,Hypnotics,ゾルピデム,アンビエン,マイスリー,フルマゼニル,アンタゴニスト,フルニトラゼパム,アモバン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/7' })
        this.meta.updateTag({ property: 'og:title', content: 'GABAクロライドチャンネルの構造と機能（Youtubeより）' });
        this.meta.updateTag({ property: 'og:description', content: 'エールニューヘブン病院所属のアレオサファルザデ医師の講義です。古い動画ですがGABA-A受容体の説明が短くわかりやすいので書き起こし＆翻訳をしました。耐性や離脱のことまでは触れていません' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict7.png' });
        break;
      case '8':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('なぜ“優秀な”医者が自死を選ぶのか');
        this.meta.updateTag({ name: 'title', content: 'なぜ“優秀な”医者が自死を選ぶのか'});
        this.meta.updateTag({ name: 'description', content: 'ドクターの自殺が多い状況について調査し続けた医師、パメラ・ウィブル医師による記事。医師の自殺率は通常の3倍。そのハードワークとプレッシャーにより不眠になりベンゾ系睡眠薬を服薬せざるを得ない状況をデータとともに問題提起しています'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,外科医,麻酔科医,内科,産科,婦人科,精神科,小児科,放射線科,救急,燃え尽き症候群,resilience,Benzo,Hypnotics,医療機関,ER,抗うつ薬,抗不安薬,物質使用障害,急性離脱症候群,PTSD,製薬業界,ハーバード,退役軍人,ワイパックス,ロラゼパム,Ativan,Xanax,アルプラゾラム,ソラナックス' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/8' })
        this.meta.updateTag({ property: 'og:title', content: 'なぜ“優秀な”医者が自死を選ぶのか' });
        this.meta.updateTag({ property: 'og:description', content: 'ドクターの自殺が多い状況について調査し続けた医師、パメラ・ウィブル医師による記事。医師の自殺率は通常の3倍。そのハードワークとプレッシャーにより不眠になりベンゾ系睡眠薬を服薬せざるを得ない状況をデータとともに問題提起しています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict8.jpg' });
        break;
      case '9':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ベンゾジアゼピン依存症におけるフルオロキノロン系抗菌薬のリスク');
        this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピン依存症におけるフルオロキノロン系抗菌薬のリスク'});
        this.meta.updateTag({ name: 'description', content: 'ベンゾジアゼピン依存症におけるフルオロキノロン系抗菌薬をベンゾジアゼピン服用者に使用するリスクについての医療記事です'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,フルオロキノロン,抗生物質,プロフロキサシン,オフロキサシン,ノルフロキサシン,レボフロキサシン,モキシフロキサシン,ゲミフロキサシン,神経学,末梢神経,GABA受容体,Benzo,Hypnotics,アンタゴニスト,イブプロフェン,NSAIDs,抗不安薬,CYP1A2,急性離脱症候群,振戦,フロキュレーション,神経毒性,ダウケミカル,発作,うつ病,パラノイア,Xanax,アルプラゾラム,ソラナックス' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/9' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピン依存症におけるフルオロキノロン系抗菌薬のリスク' });
        this.meta.updateTag({ property: 'og:description', content: 'ベンゾジアゼピン依存症におけるフルオロキノロン系抗菌薬をベンゾジアゼピン服用者に使用するリスクについての医療記事です' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict9.png' });
        break;
      case '10':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性');
        this.meta.updateTag({ name: 'title', content: '【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性'});
        this.meta.updateTag({ name: 'description', content: 'キャサリン・ピットマン博士（Ph.D., HSPP, 公認臨床心理学者。インディアナ州ノートルダムのセントメアリー大学の心理学教授）による2018年10月30日インディアナ州検事総長の薬物乱用シンポジウムでの講演を書き起こし＆翻訳した記事です'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,脳損傷,ストレス,知覚障害,感覚障害,機能不全,倦怠感,記憶喪失,気分障害,GABA受容体,Benzo,Hypnotics,退薬,ベンゾバディ,オピオイド,抗不安薬,アディクション,オーバードーズ,Cognitive behavioural therapy,認知行動療法,国防省,サイコセラピー,SSRI,SNRI,連邦政府,保険会社,教育機関,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/10' })
        this.meta.updateTag({ property: 'og:title', content: '【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性' });
        this.meta.updateTag({ property: 'og:description', content: 'キャサリン・ピットマン博士（Ph.D., HSPP, 公認臨床心理学者。インディアナ州ノートルダムのセントメアリー大学の心理学教授）による2018年10月30日インディアナ州検事総長の薬物乱用シンポジウムでの講演を書き起こし＆翻訳した記事です' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict10.png' });
        break;
      case '11':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('Treatment of Benzodiazepine Dependence');
        this.meta.updateTag({ name: 'title', content: 'Treatment of Benzodiazepine Dependence'});
        this.meta.updateTag({ name: 'description', content: 'ドイツの医学博士Michel Soyaka博士による2017年の論文です。ベンゾジアゼピンは1か月の連用で半数が依存形成されると結論付けています'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,物質使用障害,DSM-IV,ICD-10,依存,中毒,耐性,DSM-5,精神疾患,GABA受容体,Benzo,Hypnotics,退薬,クロルジアゼポキシド,陽電子放出断層撮影法,抗不安薬,PET,オーバードーズ,ヒドロキシル基,グルクロニド結合,アルコール依存症,ドーパミン,オピオイド,z薬,非ベンゾジアゼピン,プレガバリン,ガバペンチン,ベータブロッカー,トラゾドン,ドキセピン,ミルタザピン,トリミプラミン,ヒスタミンH1,ジフェンヒドラミン,ドキキシルアミン,ヒドロキシジン,プロメタジン,認知行動療法,睡眠障害,慢性疾患,アルコール依存症,高齢者,ジアゼパム,Valium,セルシン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/11' })
        this.meta.updateTag({ property: 'og:title', content: 'Treatment of Benzodiazepine Dependence' });
        this.meta.updateTag({ property: 'og:description', content: 'ドイツの医学博士Michel Soyaka博士による2017年の論文です。ベンゾジアゼピンは1か月の連用で半数が依存形成されると結論付けています' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/twitcard_introduction.png' });
        break;
      case '12':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('医者から処方されるベンゾジアゼピンの危険性に注意してください');
        this.meta.updateTag({ name: 'title', content: '医者から処方されるベンゾジアゼピンの危険性に注意してください'});
        this.meta.updateTag({ name: 'description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）自身の離脱症状体験記になります。彼女は3年2か月の減薬期間を経て、2019年3月に断薬済みです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,ベータブロッカー,心臓専門医,ドライアイ,依存,アシュトン教授,耐性,アシュトンマニュアル,医療機関,医師,Benzo,Hypnotics,退薬,癌,Dignitas,安楽死,自殺,乳がん,精神科医,サバイバル,カボチャ,悪夢,ジアゼパム,Valium,セルシン,Xanax,アルプラゾラム,ソラナックス,コンスタン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/12' })
        this.meta.updateTag({ property: 'og:title', content: '医者から処方されるベンゾジアゼピンの危険性に注意してください' });
        this.meta.updateTag({ property: 'og:description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）自身の離脱症状体験記になります。彼女は3年2か月の減薬期間を経て、2019年3月に断薬済みです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict4.jpg' });
        break;
      case '13':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('論文：どのようにしてベンゾがHPA AXIS障害を引き起こすか');
        this.meta.updateTag({ name: 'title', content: '論文：どのようにしてベンゾがHPA AXIS障害を引き起こすか'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,視床下部,下垂体,副腎,HPA,PVN,Paraventricular Nucleus,ペプチドアルギニンバソプレシン,コルチコトロピン放出因子,アシュトンマニュアル,グルココルチコイド,ミネラルコルチコイド,Benzo,Hypnotics,アンドロステンジオン,性腺,リバウンド,概日リズム,カテコールアミン,ドーパミン,アドレナリン,ノルエピネフリン,ステロイド,ヒドロコルチゾンクリーム,プロゲステロン,有酸素運動,ホルモン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/13' })
        this.meta.updateTag({ property: 'og:title', content: '論文：どのようにしてベンゾがHPA AXIS障害を引き起こすか' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict13.jpg' });
        break;
      case '14':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('論文：ベンゾ離脱、グルタミン酸受容体、およびLTP');
        this.meta.updateTag({ name: 'title', content: '論文：ベンゾ離脱、グルタミン酸受容体、およびLTP'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,長期増強,LTP,Long Term Potentiation,NMDA,AMPA,グルタミン酸受容体,プロテインキナーゼ,リン酸,脱リン酸化,神経適応,ヘブビアン,Benzo,Hypnotics,Hebbian LTP,非ヘブビアン,海馬,mRNA,前頭皮質,小脳,PKMζ,PKMζ阻害剤,シナプス活性化,カルシウムチャネル,GYKI-52466,AMPA拮抗薬,NMDA拮抗薬,フルラゼパム,グルタメート,キンドリング,塩化物' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/14' })
        this.meta.updateTag({ property: 'og:title', content: '論文：ベンゾ離脱、グルタミン酸受容体、およびLTP' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict15.jpg' });
        break;
      case '15':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('わかりやすいニューロン、ベンゾ、回復概論');
        this.meta.updateTag({ name: 'title', content: 'わかりやすいニューロン、ベンゾ、回復概論'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,ニューロン,中枢神経系,CNS,樹状突起,神経伝達物質,GABA受容体,GABAｰA受容体,サブユニット,イオンチャンネル,神経適応,ヘブビアン,Benzo,Hypnotics,GABA Aポジティブアロステリックモジュレーター,アルコール,ステロイド,Progesterone,バルビツレート,過分極,hyperpolarization,軸索ヒロック,Axonターミナル,カルシウムチャネル,前駆体,AMPA拮抗薬,NMDA拮抗薬,セロトニン,ドーパミン,ノルアドレナリン,アセチルコリン,5-HT,グルタメート,コルチコトロピン放出ホルモン,CRH,コルチゾール,甲状腺機能,甲状腺刺激ホルモン,TSH,甲状腺機能亢進症,視床下部,視交叉上核,SCN' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/15' })
        this.meta.updateTag({ property: 'og:title', content: 'わかりやすいニューロン、ベンゾ、回復概論' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict15.jpg' });
        break;
      case '16':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('論文：ベンゾジアゼピンと甲状腺症状');
        this.meta.updateTag({ name: 'title', content: '論文：ベンゾジアゼピンと甲状腺症状'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,甲状腺中毒症,甲状腺,クロルジアゼポキシド,リブリウム,精神障害,視床下部,下垂体,HPT AXIS,甲状腺ホルモン,HPA軸,ヘブビアン,Benzo,Hypnotics,チロトロピン放出ホルモン,ヨウ素,甲状腺機能亢進症,甲状腺癌,甲状腺機能低下症,パセドウ病,チロキシン,トリヨードチロニン,結合グロブリン,トランスサイレチン,チロキシン結合プレアルブミン,アルブミン,sluggish thyroid,抗甲状腺ペルオキシダーゼ,活性化TSH受容体抗体,TRAb,チオナミド,プロピルチオウラシル,メチマゾール,コルチコトロピン放出ホルモン,CRH,ジアゼパム,Valium,視交叉上核,ニューロペプチドコレシストキニン,脳下垂体,hypophysis,視交叉上核,コルチコステロイド,エストロゲン,テストステロン,ステロイドホルモン,コルチゾール,ミトコンドリア,ロラザパム,Ativan,アルプラゾラム,Xanax,アポトーシス,リバースT3' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/16' })
        this.meta.updateTag({ property: 'og:title', content: '論文：ベンゾジアゼピンと甲状腺症状' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict16.png' });
        break;
      case '17':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ベンゾ誘発有機性脳症候群');
        this.meta.updateTag({ name: 'title', content: 'ベンゾ誘発有機性脳症候群'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,遷延性離脱症候群,国立医学図書館,国立衛生研究所,器質性脳症候群,OBS,有機性脳症候群,アルコール,ウェルニッケ - コルサコフ症候群,メタ分析,認知作用,メタアナリシス,Benzo,Hypnotics,慢性脳障害,CBI,トラウマ,電気痙攣療法,ECT,精神薬,脳萎縮,リチウム,抗うつ薬,ポスト - コンシューシブ症候群,ドラッグ,Antipsychotic Drug CBI,Poly Psychiatric Drug CBI,Polydrug Abuse CBI,社会保障,知覚障害,思考障害,幻覚,妄想,ジアゼパム,Valium,ロラザパム,Ativan,アルプラゾラム,Xanax' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/17' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ誘発有機性脳症候群' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict15.png' });
        break;
      case '18':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ベンゾ、耳鳴り、および神経調節');
        this.meta.updateTag({ name: 'title', content: 'ベンゾ、耳鳴り、および神経調節'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,耳鳴り,聴覚皮質,振動,音波,外耳道,鼓膜,中耳,Malleus,Incus,蝸牛,聴覚神経,Benzo,Hypnotics,周波数,高周波,Primary Auditory Cortex,synchronous activity,神経同調,ニューロン活動,マスキング音,residual inhibition,音響協調リセット神経調節療法,Tinnitus,メニエール病,GABA,ニューロン,ジアゼパム,Valium,ロラザパム,Ativan,アルプラゾラム,Xanax' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/18' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ、耳鳴り、および神経調節' });
        this.meta.updateTag({ property: 'og:description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict18.png' });
        break;
      case '19':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('線維筋痛症の痛み ― グルタミン酸およびヒスタミンとの関連性');
        this.meta.updateTag({ name: 'title', content: '線維筋痛症の痛み ― グルタミン酸およびヒスタミンとの関連性'});
        this.meta.updateTag({ name: 'description', content: '神経性難病は、筋肉とその周辺組織の機能不全と考えられていました。しかしながら近年の研究によりこれは中枢神経系疾患ととらえらるようになりました。つまり脳内で痛みを感知するプロセスに障害があり、結果として“中作感作（central sensitization)”と呼ばれるものによって痛みが増幅されてしまうのです'});
        this.meta.updateTag({ name: 'keywords', content: '線維筋痛症,慢性疲労症候群,CFS,fiblo,過敏性腸症候群,頻尿,偏頭痛,悪心,ブレインフォグ,不安障害,不眠症,視覚過敏,聴覚過敏,うつ,化学物質過敏症,むずむず脚症候群,坐骨神経痛,痴呆,無気力,インポテンツ,記憶喪失,筋肉痛,関節痛,睡眠障害,睡眠薬,離脱症状,ベンゾジアゼピン,耳鳴り' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/19' })
        this.meta.updateTag({ property: 'og:title', content: '線維筋痛症の痛み ― グルタミン酸およびヒスタミンとの関連性' });
        this.meta.updateTag({ property: 'og:description', content: '神経性難病は、筋肉とその周辺組織の機能不全と考えられていました。しかしながら近年の研究によりこれは中枢神経系疾患ととらえらるようになりました。つまり脳内で痛みを感知するプロセスに障害があり、結果として“中作感作（central sensitization)”と呼ばれるものによって痛みが増幅されてしまうのです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict19.png' });
        break;
      case '20':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.titleService.setTitle('ベンゾ遷延性離脱症候群の発生メカニズム');
        this.meta.updateTag({ name: 'title', content: 'ベンゾ遷延性離脱症候群の発生メカニズム'});
        this.meta.updateTag({ name: 'description', content: '議論されるトピックとしては、GABA A受容体（GABAARs）の神経恒常性変化、グルタミン酸システムの非恒常性変化、海馬で起こるような長期増強（Long Term Potential, LTP）の形成と運用について'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,長期増強,LTP,Long Term Potentiation,NMDA,AMPA,グルタミン酸受容体,ダウンレギュレーション,リン酸,脱リン酸化,神経適応,海馬,Benzo,Hypnotics,遷延性離脱症候群,神経恒常性,mRNA,前頭皮質,小脳,PKMζ,遺伝子,シナプス活性化,カルシウムチャネル,受容体,エンドサイトーシス,リソソーム分解,フルラゼパム,グルタメート,染色体,サブユニット'});
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/20' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾ遷延性離脱症候群の発生メカニズム' });
        this.meta.updateTag({ property: 'og:description', content: '議論されるトピックとしては、GABA A受容体（GABAARs）の神経恒常性変化、グルタミン酸システムの非恒常性変化、海馬で起こるような長期増強（Long Term Potential, LTP）の形成と運用について' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict18.png' });
        break;
    }
  }

  generateTagsMediasArticles(e: any) {
    this.mediasarticlenum = e;
    switch(this.mediasarticlenum) {
      case '1':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
        this.titleService.setTitle('ベンゾジアゼピンの歴史');
        this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピンの歴史'});
        this.meta.updateTag({ name: 'description', content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました'});
        this.meta.updateTag({ name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,歴史,アシュトンマニュアル,離脱症状,依存症,歴史,バルビツール,レオ・スターンバック,ロッシュ,製薬会社' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/1' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピンの歴史' });
        this.meta.updateTag({ property: 'og:description', content: '1955年、スイスの製薬会社ロッシュの化学者（レオ・スターンバック）が最初のベンゾジアゼピンの合成に成功。同社はそれを製品名リブリウムとし、1960年に市場を席巻しました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict1.jpg' });
        break;
      case '2':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('ベンゾジアゼピン薬剤一覧 - ジアゼパム換算表');
          this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピン薬剤一覧 - ジアゼパム換算表'});
          this.meta.updateTag({ name: 'description', content: '日本で処方可能なベンゾジアゼピン薬剤一覧です。諸外国よりかなり多い34種類あります。 - そしてジアゼパム換算表です。置換の際に必須となるデータです'});
          this.meta.updateTag({ name: 'keywords', content: 'ジアゼパム換算,置換,アルプラゾラム,ソラナックス,コンスタン,デパス,エチゾラム,リーゼ,クロチアゼパム,ジアゼパム,セルシン,ブロマゼパム,レキソタン,セニラン,ロフラゼプ酸エチル,メイラックス,ロラゼパム,ワイパックス,エスタゾラム,ユーロジン,クアゼパム,ドラール,ゾルピデム,マイスリー,ゾピクロン,アモバン,ニトラゼパム,ベンザリン,ネルボン,フルニトラゼパム,サイレース,ロヒプノール,ブロチゾラム,レンドルミン,ロルメタゼパム,エバミール,クロナゼパム,リボトリール,ランドセン,トフィソパム,グランダキシン,トリアゾラム,ハルシオン,クロキサゾラム,セパゾン,クロラゼプ酸,メンドン,クロルジアゼポキシド,コントール,バランス,タンドスピロン,セディール,フルジアゼパム,エリスパン,フルタゾラム,コレミナール,フルトプラゼパム,レスタス,メキサゾラム,メレックス,メダゼパム,レスミット,エスゾピクロン,ルネスタ,ニメタゼパム,エリミン,ハロキサゾラム,ソメリン,クアゼパム,ドラール,フルラゼパム,ダルメート,ベノジール,リルマザホン,リスミー,ロルメタゼパム,エバミール,ロラメット,クロバザム,マイスタン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/2' })
          this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピン薬剤一覧 - ジアゼパム換算表' });
          this.meta.updateTag({ property: 'og:description', content: '日本で処方可能なベンゾジアゼピン薬剤一覧です。諸外国よりかなり多い34種類あります。 - そしてジアゼパム換算表です。置換の際に必須となるデータです' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict2.jpg' });
      case '3':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('“日本人は何人ベンゾを飲んでいるか”');
          this.meta.updateTag({ name: 'title', content: '“日本人は何人ベンゾを飲んでいるか”'});
          this.meta.updateTag({ name: 'description', content: '厚労省が2017年10月に公開した第二回NDBオープンデータより積算した日本における年間ベンゾジアゼピン系薬消費量、および長期服薬者一人当たりの平均服薬数から総人口1億2千万人中およそ730万人がベンゾジアゼピン系薬を服薬している結果になりました'});
          this.meta.updateTag({ name: 'keywords', content: '厚労省,中央社会保険医療協議会,中医協,向精神薬,厚生労働省,ベンゾ,ベンゾジアゼピン,睡眠薬,催眠鎮静剤,抗不安剤,抗てんかん剤,精神神経用剤,NDBオープンデータ,ニッセイ情報テクノロジー,アルプラゾラム,ソラナックス,コンスタン,デパス,エチゾラム,リーゼ,クロチアゼパム,ジアゼパム,セルシン,ブロマゼパム,レキソタン,セニラン,ロフラゼプ酸エチル,メイラックス,ロラゼパム,ワイパックス,エスタゾラム,ユーロジン,クアゼパム,ドラール,ゾルピデム,マイスリー,ゾピクロン,アモバン,ニトラゼパム,ベンザリン,ネルボン,フルニトラゼパム,サイレース,ロヒプノール,ブロチゾラム,レンドルミン,ロルメタゼパム,エバミール,クロナゼパム,リボトリール,ランドセン,トフィソパム,グランダキシン,トリアゾラム,ハルシオン,クロキサゾラム,セパゾン,クロラゼプ酸,メンドン,クロルジアゼポキシド,コントール,バランス,タンドスピロン,セディール,フルジアゼパム,エリスパン,フルタゾラム,コレミナール,フルトプラゼパム,レスタス,メキサゾラム,メレックス,メダゼパム,レスミット,エスゾピクロン,ルネスタ,ニメタゼパム,エリミン,ハロキサゾラム,ソメリン,クアゼパム,ドラール,フルラゼパム,ダルメート,ベノジール,リルマザホン,リスミー,ロルメタゼパム,エバミール,ロラメット,クロバザム,マイスタン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/3' })
          this.meta.updateTag({ property: 'og:title', content: '“日本人は何人ベンゾを飲んでいるか”' });
          this.meta.updateTag({ property: 'og:description', content: '厚労省が2017年10月に公開した第二回NDBオープンデータより積算した日本における年間ベンゾジアゼピン系薬消費量、および長期服薬者一人当たりの平均服薬数から総人口1億2千万人中およそ730万人がベンゾジアゼピン系薬を服薬している結果になりました' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict3.jpg' });
      case '4':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('トロントの男性：ベンゾ離脱3年そして自殺。遺書にて“これは殺人だ”');
          this.meta.updateTag({ name: 'title', content: 'トロントの男性：ベンゾ離脱3年そして自殺。遺書にて“これは殺人だ”'});
          this.meta.updateTag({ name: 'description', content: 'マーシャの父の人生は、ロラゼパムを処方されたために破壊されました。マーシャはBenzodiazepine Information Coallitionに連絡を取り、父親の自殺ノートを共有し、ベンゾジアゼピン処方薬の危険性に対する意識を高めたいと考えました'});
          this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,ベンゾ,睡眠薬,殺人事件,Ativan,ロラゼパム,クリスコーネル,サウンドガーデン,依存専門病院,自殺,カナダ,ワイパックス,リハビリテーションプログラム,トロント' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/4' })
          this.meta.updateTag({ property: 'og:title', content: 'トロントの男性：ベンゾ離脱3年そして自殺。遺書にて“これは殺人だ”' });
          this.meta.updateTag({ property: 'og:description', content: 'マーシャの父の人生は、ロラゼパムを処方されたために破壊されました。マーシャはBenzodiazepine Information Coallitionに連絡を取り、父親の自殺ノートを共有し、ベンゾジアゼピン処方薬の危険性に対する意識を高めたいと考えました' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict4.jpg' });
      case '5':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死');
          this.meta.updateTag({ name: 'title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死'});
          this.meta.updateTag({ name: 'description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語'});
          this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,ベンゾ,末梢神経,一気断薬,Cold Turky,アシュトンマニュアル,遷延性離脱症候群,甲状腺機能亢進症,インフォームドコンセント,希死念慮,羞明,解毒,全般性不安障害,退薬方法,線維筋痛症,甲状腺摘出手術,アカシジア,クリスチャン,ワイパックス,ロラゼパム,Ativan,依存専門病院,自殺' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/5' })
          this.meta.updateTag({ property: 'og:title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死' });
          this.meta.updateTag({ property: 'og:description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict5.jpg' });
      case '6':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('カサンドラの遺書「友人へのメッセージ」');
          this.meta.updateTag({ name: 'title', content: 'カサンドラの遺書「友人へのメッセージ」'});
          this.meta.updateTag({ name: 'description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました'});
          this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,睡眠薬,抗不安薬,インフルエンザ,アシュトンマニュアル,遷延性離脱症候群,PAWS,ガイドライン,brain injury,アディクション,アルコール,依存症,退薬方法,テーパリング,生殖器ヘルペス,感覚過敏,耳鳴り,逆説的反応,記憶障害,パラノイア,離人感,パニック障害,うつ病,双極性障害,胃酸逆流,ヒステリー球,痙攣,振戦,不整脈,動悸,目眩,頭痛,脱毛,乾癬,不眠,ヘモクロマトーシス,幻覚,パラノイア,キンドリング,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン,自殺,心不全,呼吸停止,安楽死,フェイスブック,拡散,ニューヨーク,カリフォルニア,コロラド,ジェンダー平等,ベンゾバディ,ベンゾジアゼピンインフォメーションコーリション,BIC,GABA受容体' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/6' })
          this.meta.updateTag({ property: 'og:title', content: 'カサンドラの遺書「友人へのメッセージ」' });
          this.meta.updateTag({ property: 'og:description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict5.jpg' });
      case '7':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性');
          this.meta.updateTag({ name: 'title', content: '【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性'});
          this.meta.updateTag({ name: 'description', content: 'キャサリン・ピットマン博士（Ph.D., HSPP, 公認臨床心理学者。インディアナ州ノートルダムのセントメアリー大学の心理学教授）による2018年10月30日インディアナ州検事総長の薬物乱用シンポジウムでの講演を書き起こし＆翻訳した記事です'});
          this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,脳損傷,ストレス,知覚障害,感覚障害,機能不全,倦怠感,記憶喪失,気分障害,GABA受容体,Benzo,Hypnotics,退薬,ベンゾバディ,オピオイド,抗不安薬,アディクション,オーバードーズ,Cognitive behavioural therapy,認知行動療法,国防省,サイコセラピー,SSRI,SNRI,連邦政府,保険会社,教育機関,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/7' })
          this.meta.updateTag({ property: 'og:title', content: '【講演】ベンゾジアゼピンのリスク ― 普通に処方されているが誰も気づいていないその危険性' });
          this.meta.updateTag({ property: 'og:description', content: 'キャサリン・ピットマン博士（Ph.D., HSPP, 公認臨床心理学者。インディアナ州ノートルダムのセントメアリー大学の心理学教授）による2018年10月30日インディアナ州検事総長の薬物乱用シンポジウムでの講演を書き起こし＆翻訳した記事です' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict10.png' });
      case '8':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('蔓延する薬害 ― それはオピオイドではない');
          this.meta.updateTag({ name: 'title', content: '蔓延する薬害 ― それはオピオイドではない'});
          this.meta.updateTag({ name: 'description', content: 'ヘラルドトリビューン社コラムニスト、キャリー・セッドマンによる記事。副題“ベンゾジアゼピンの危険性について ― 医療者も含め誰も ―誰もかれもベンゾについて話さないのはいったいなぜなのか？”とし、本当に蔓延している薬害(epidemic)はオピオイドではないと訴えています'});
          this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,脳損傷,オピオイド,YouTube,ジャーナリスト,サンディエゴ,健康,キャリア,人間関係,生活,Benzo,Hypnotics,ホラー,ベンゾバディ,オピオイド,抗不安薬,アディクション,BIC,w-bad.org,アシュトンマニュアル,拷問,アカシジア,フェイスブック,拡散,自己免疫疾患,幻覚,視力障害,感染症,腰痛,不眠症,マイクロテーパリング,自助会,後遺症,自殺,アカシジア,医療従事者,医療関係者,慢性疾患,マサチューセッツ州,ヘラルドトリビューン,サラソタ,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/8' })
          this.meta.updateTag({ property: 'og:title', content: '蔓延する薬害 ― それはオピオイドではない' });
          this.meta.updateTag({ property: 'og:description', content: 'ヘラルドトリビューン社コラムニスト、キャリー・セッドマンによる記事。副題“ベンゾジアゼピンの危険性について ― 医療者も含め誰も ―誰もかれもベンゾについて話さないのはいったいなぜなのか？”とし、本当に蔓延している薬害(epidemic)はオピオイドではないと訴えています' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/mict8.png' });
      case '9':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('ベンゾジアゼピン ― その氷山の一角');
          this.meta.updateTag({ name: 'title', content: 'ベンゾジアゼピン ― その氷山の一角'});
          this.meta.updateTag({ name: 'description', content: '2010年依存専門施設で致死的な一気断薬をさせられ、重篤な長期に渡る離脱症状を経験した医師補助プログラムの修士号をもつニコル．Lによる記事です。Benzodiazepine Information Coalitionのアドバイザリーボードとして啓蒙活動を行う中でのベンゾ問題の難しさを指摘しています'});
          this.meta.updateTag({ name: 'keywords', content: '氷山の一角,睡眠薬,離脱症状,ベンゾジアゼピン,減薬,断薬,脳損傷,医原性,非営利団体,ボランティア,精神科医,健康,キャリア,人間関係,生活,Benzo,Hypnotics,ヘラルドトリビューン,コラム,ヘルスケア,抗不安薬,医学教育,処方薬,イギリス,オーストラリア,離脱支援サービス,離脱アドバイザー,バージニア,医療専門大学,ストレス,抗精神薬,抗うつ薬,Zドラッグ,後遺症,自殺,ベンゾジアゼピンインフォメーション協議会,医療従事者,医療関係者,ポリファーマシー,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/9' })
          this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピン ― その氷山の一角' });
          this.meta.updateTag({ property: 'og:description', content: '2010年依存専門施設で致死的な一気断薬をさせられ、重篤な長期に渡る離脱症状を経験した医師補助プログラムの修士号をもつニコル．Lによる記事です。Benzodiazepine Information Coalitionのアドバイザリーボードとして啓蒙活動を行う中でのベンゾ問題の難しさを指摘しています' });
          this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/pict1.png' });
      case '10':
          console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.mediasarticlenum)
          this.titleService.setTitle('元NASA分析官が苦しむ遷延性ロラゼパム傷害');
          this.meta.updateTag({ name: 'title', content: '元NASA分析官が苦しむ遷延性ロラゼパム傷害'});
          this.meta.updateTag({ name: 'description', content: '元NASA分析官アーノルド・ヌーセンはバイク事故をきっかけに神経科医によってロラゼパムを処方され、そのあと急減薬を経た中止によって非常に厳しい遷延性離脱症候群になりました。シプコ博士は遷延性離脱症状を“薬物神経毒性症状(drug neurotoxicity)”と呼んでいます。'});
          this.meta.updateTag({ name: 'keywords', content: '離脱症状,ベンゾジアゼピン,減薬,断薬,心臓発作,耳鳴り,神経科医,パニック発作,睡眠障害,Benzo,Hypnotics,NASA,インフォームドコンセント,ホスピタリスト,抗不安薬,3分心療,カリフォルニア,Zドラッグ,ワイパックス,ロラゼパム,ジアゼパム,Valium,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
          this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
          this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
          this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/medias-article/10' })
          this.meta.updateTag({ property: 'og:title', content: '元NASA分析官が苦しむ遷延性ロラゼパム傷害' });
          this.meta.updateTag({ property: 'og:description', content: '元NASA分析官アーノルド・ヌーセンはバイク事故をきっかけに神経科医によってロラゼパムを処方され、そのあと急減薬を経た中止によって非常に厳しい遷延性離脱症候群になりました。シプコ博士は遷延性離脱症状を“薬物神経毒性症状(drug neurotoxicity)”と呼んでいます。' });
    }
  }



}


