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
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/2' })
        this.meta.updateTag({ property: 'og:title', content: 'ベンゾジアゼピンテーパリング戦略とソリューション' });
        this.meta.updateTag({ property: 'og:description', content: '10数人のメディカルアドバイザーを抱える米国のNPO団体Benzodiazepine Information Coalition（https://www.benzoinfo.com）により2017年に作成されたベンゾジアゼピン減薬ガイドラインです。ドクターによる臨床経験とベンゾジアゼピンテーパリングを成功裡にやり遂げた何千人もの生存者によって開発されました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict2.png' });
        break;
      case '3':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
        this.meta.updateTag({ name: 'title', content: 'カサンドラの遺書「メディカルメッセージ」：双極性障害治療がなぜ私を自殺に追い込んだか'});
        this.meta.updateTag({ name: 'description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました'});
        this.meta.updateTag({ name: 'keywords', content: '減薬,断薬,脳損傷,離脱症状,ベンゾジアゼピン,睡眠薬,抗不安薬,インフルエンザ,アシュトンマニュアル,遷延性離脱症候群,PAWS,ガイドライン,brain injury,アディクション,アルコール,依存症,退薬方法,テーパリング,生殖器ヘルペス,感覚過敏,耳鳴り,逆説的反応,記憶障害,パラノイア,離人感,パニック障害,うつ病,双極性障害,胃酸逆流,ヒステリー球,痙攣,振戦,不整脈,動悸,目眩,頭痛,脱毛,乾癬,不眠,ヘモクロマトーシス,幻覚,パラノイア,キンドリング,Xanax,アルプラゾラム,ソラナックス,クロナゼパム,klonopin,リボトリール,ランドセン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/3' })
        this.meta.updateTag({ property: 'og:title', content: 'カサンドラの遺書「メディカルメッセージ」：双極性障害治療がなぜ私を自殺に追い込んだか' });
        this.meta.updateTag({ property: 'og:description', content: '2018年8月23日木曜日、カサンドラ・ナーバーグ（Cass Narburgh）というアメリカ人女性が処方量内ベンゾによってベンゾジアゼピン離脱症状に陥り、1年半耐えたものの自殺しました。彼女は２つの遺書、「メディカルメッセージ」と「友人へのメッセージ」を残しました' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict3.png' });
        break;
      case '4':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
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
        this.meta.updateTag({ name: 'title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死'});
        this.meta.updateTag({ name: 'description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,ベンゾ,末梢神経,一気断薬,Cold Turky,アシュトンマニュアル,遷延性離脱症候群,甲状腺機能亢進症,インフォームドコンセント,希死念慮,羞明,解毒,全般性不安障害,退薬方法,線維筋痛症,甲状腺摘出手術,アカシジア,クリスチャン,ワイパックス,ロラゼパム,Ativan' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/5' })
        this.meta.updateTag({ property: 'og:title', content: 'クリスティーンの場合： ロラゼパム離脱～アカシジア、そして自死' });
        this.meta.updateTag({ property: 'og:description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）による記事、長い離脱症状との闘いの末に2017年6月16日に自死したクリスティーン アン ナーロックの物語' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict5.jpg' });
        break;
      case '6':
        console.log('◆◆◆◆◆generateTagsPatientsArticles()の引数articlenumは、' + this.doctorsarticlenum)
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
        this.meta.updateTag({ name: 'title', content: '論文：どのようにしてベンゾがHPA AXIS障害を引き起こすか'});
        this.meta.updateTag({ name: 'description', content: '自身もベンゾ依存に陥った神経学者Perseveranceによる記事です。内容もさることながら、あまたの引用文献の専門性から十分論文として通用するものですが匿名では公式発表できないのでベンゾバディに投稿しているようです'});
        this.meta.updateTag({ name: 'keywords', content: '睡眠薬,離脱症状,ベンゾジアゼピン,視床下部,下垂体,副腎,HPA,PVN,Paraventricular Nucleus,ペプチドアルギニンバソプレシン,コルチコトロピン放出因子,アシュトンマニュアル,グルココルチコイド,ミネラルコルチコイド,Benzo,Hypnotics,アンドロステンジオン,性腺,リバウンド,概日リズム,カテコールアミン,ドーパミン,アドレナリン,ノルエピネフリン,ステロイド,ヒドロコルチゾンクリーム,プロゲステロン,有酸素運動,ホルモン' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@benzoinfojapan' });
        this.meta.updateTag({ property: 'og:url', content: 'https://benzoinfojapan.org/doctors-article/13' })
        this.meta.updateTag({ property: 'og:title', content: '論文：どのようにしてベンゾがHPA AXIS障害を引き起こすか' });
        this.meta.updateTag({ property: 'og:description', content: 'クリスティーハーフ医師（心臓病学者。ベンゾジアゼピンインフォメーションコーリションディレクター）自身の離脱症状体験記になります。彼女は3年2か月の減薬期間を経て、2019年3月に断薬済みです' });
        this.meta.updateTag({ property: 'og:image', content: 'https://benzoinfojapan.org/assets/picts/dict13.jpg' });
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


