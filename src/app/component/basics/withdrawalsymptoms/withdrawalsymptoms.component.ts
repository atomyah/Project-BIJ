import { Component, OnInit } from '@angular/core';
import { BASICSDATA } from '../../../class/basicschildren';
import {Router} from '@angular/router';
// ValueSharedServiceをインポート
import { ValueSharedService } from '../../../service/value-shared.service';
import {Meta,Title} from '@angular/platform-browser';

  export interface SymptomElement {
    SymptomNameJ: string;
    SymptomNameE: string;
  }
  const ELEMENT_DATA: SymptomElement[] = [
    {SymptomNameJ: '関節痛', SymptomNameE: 'Aching joints'},
    {SymptomNameJ: '筋肉痛', SymptomNameE: 'aching muscles'},
    {SymptomNameJ: '急性過興奮状態', SymptomNameE: 'Acute hyper excited state'},
    {SymptomNameJ: '躁行動', SymptomNameE: 'Aggressive behaviour'},
    {SymptomNameJ: '視覚過敏', SymptomNameE: 'Agitated sight'},
    {SymptomNameJ: '広場恐怖症', SymptomNameE: 'Agoraphobia'},
    {SymptomNameJ: 'アレルギー反応', SymptomNameE: 'Allergic reactions'},
    {SymptomNameJ: '以前は問題なかった食品に対するアレルギー反応', SymptomNameE: 'Allergic reactions to foods previously tolerated'},
    {SymptomNameJ: 'アレルギーと鼻炎の悪化', SymptomNameE: 'Allergy & nasal symptoms exacerbated'},
    {SymptomNameJ: '怒り', SymptomNameE: 'Anger'},
    {SymptomNameJ: '視覚過敏', SymptomNameE: 'Agitated sight'},
    {SymptomNameJ: '不安', SymptomNameE: 'Anxiety'},
    {SymptomNameJ: '無関心', SymptomNameE: 'Apathy'},
    {SymptomNameJ: '食欲不振、または食欲過剰', SymptomNameE: 'Appetite - either loss of, or voracious appetite with constant desire to eat'},
    {SymptomNameJ: '腕と脚が体から離れているように感じる', SymptomNameE: 'Arms and legs feel detached from body'},
    {SymptomNameJ: '運動失調 - 筋肉の動きを調整できない', SymptomNameE: 'Ataxia - cant coordinate muscle movement'},
    {SymptomNameJ: '背中の痛み', SymptomNameE: 'Back pain'},
    {SymptomNameJ: '頭の周りを締め付けられるような頭痛(孫悟空の頭輪)', SymptomNameE: 'band around head'},
    {SymptomNameJ: '失禁', SymptomNameE: 'Bladder incontinence'},
    {SymptomNameJ: '膀胱刺激 - 感染または膀胱炎があるという感覚', SymptomNameE: 'Bladder irritation - feeling of having an infection or cystitis'},
    {SymptomNameJ: '月経周期間の出血', SymptomNameE: 'Bleeding between menstrual cycles'},
    {SymptomNameJ: '鼻血', SymptomNameE: 'Bleeding from the nose'},
    {SymptomNameJ: '眼瞼痙攣', SymptomNameE: 'Blepharospasm - eye twitches'},
    {SymptomNameJ: '腹部の肥大、腹部の膨満(ベンゾベリー)', SymptomNameE: 'Bloated stomach, distended abdomen (benzo belly)'},
    {SymptomNameJ: '下痢、便秘', SymptomNameE: 'diarrhea, constipation'},
    {SymptomNameJ: '血圧変動', SymptomNameE: 'Blood pressure fluctuations'},
    {SymptomNameJ: 'ぼやけた視界', SymptomNameE: 'Blurred vision'},
    {SymptomNameJ: 'ゼリーのように感じる体', SymptomNameE: 'Body feels like jelly'},
    {SymptomNameJ: '体臭 - 臭い汗', SymptomNameE: 'Body odour - stinking sweat'},
    {SymptomNameJ: '体温変動', SymptomNameE: 'Body temperature fluctuations'},
    {SymptomNameJ: '徐脈 - 心拍数/脈拍が遅い', SymptomNameE: 'Brachycardia - slow heartbeat/pulse'},
    {SymptomNameJ: '乳房 - 重く、過敏になり、腫れ、痛みを伴う', SymptomNameE: 'Breasts - heavy, over-sensitive, swollen, enlarged, painful'},
    {SymptomNameJ: '呼吸困難', SymptomNameE: 'Breathing difficulties'},
    {SymptomNameJ: '息切れ', SymptomNameE: 'Breathlessness'},
    {SymptomNameJ: '歯ぎしり', SymptomNameE: 'Bruxism (teeth grinding)'},
    {SymptomNameJ: '建物が傾いているように見える', SymptomNameE: 'Buildings appear to be leaning'},
    {SymptomNameJ: '背骨に沿って燃えるような痛み', SymptomNameE: 'Burning along the spine'},
    {SymptomNameJ: '口の周りの灼熱感', SymptomNameE: 'Burning sensation around the mouth'},
    {SymptomNameJ: '手足がチクチクする、灼熱感', SymptomNameE: 'Buzzing, burning, tingling limbs'},
    {SymptomNameJ: '知覚の変化（物体がゆがんで動く）', SymptomNameE: 'Changes in perception (faces distorting and inanimate objects moving)'},
    {SymptomNameJ: '肌の色、色調、質感の変化', SymptomNameE: 'Changes in skin colour, tone, texture'},
    {SymptomNameJ: '化学物質過敏性', SymptomNameE: 'Chemical sensitivities'},
    {SymptomNameJ: '胸の圧迫感', SymptomNameE: 'Chest tightness'},
    {SymptomNameJ: '悪寒', SymptomNameE: 'Chills'},
    {SymptomNameJ: '窒息', SymptomNameE: 'Choking'},
    {SymptomNameJ: '閉所恐怖症', SymptomNameE: 'Claustrophobia'},
    {SymptomNameJ: '不器用になる', SymptomNameE: 'Clumsiness'},
    {SymptomNameJ: '認知障害', SymptomNameE: 'Cognitive impairment'},
    {SymptomNameJ: '咳喘息', SymptomNameE: 'Cough asthma'},
    {SymptomNameJ: '唇のひび割れと痛み', SymptomNameE: 'Cracked and sore lips'},
    {SymptomNameJ: '泣き続ける', SymptomNameE: 'Crying jags'},
    {SymptomNameJ: '切り傷や擦り傷が治るのに数週間かかる', SymptomNameE: 'Cuts and abrasions take weeks to heal'},
    {SymptomNameJ: '目の下が黒ずむ', SymptomNameE: 'Dark circles under the eyes'},
    {SymptomNameJ: '虫歯や歯茎の劣化', SymptomNameE: 'Decaying teeth and gums'},
    {SymptomNameJ: '脱水', SymptomNameE: 'Dehydration'},
    {SymptomNameJ: 'せん妄', SymptomNameE: 'Delirium'},
    {SymptomNameJ: '歯痛', SymptomNameE: 'Dental pain'},
    {SymptomNameJ: '自我欠乏（自分が誰であるかを認識できない感覚）', SymptomNameE: 'Depersonalisation (a feeling of not knowing who you are)'},
    {SymptomNameJ: 'うつ病', SymptomNameE: 'Depression'},
    {SymptomNameJ: '離人感', SymptomNameE: 'Derealization'},
    {SymptomNameJ: 'ゆっくり書くのが難しい', SymptomNameE: 'Difficulty in writing slowly'},
    {SymptomNameJ: '嚥下困難', SymptomNameE: 'Difficulty swallowing'},
    {SymptomNameJ: '筋力低下のため、フォークやペンを保持することが困難', SymptomNameE: 'Difficulty writing or holding a fork, due to muscle weakness'},
    {SymptomNameJ: '歪みや幻覚', SymptomNameE: 'Distortions or hallucinations'},
    {SymptomNameJ: 'めまい - 落ちていくような感覚', SymptomNameE: 'Dizziness - in general, or a feeling like you are falling off the couch/chair/bed'},
    {SymptomNameJ: '口渇', SymptomNameE: 'Dry mouth'},
    {SymptomNameJ: '喉の乾燥、舌の痛み', SymptomNameE: 'Dry throat, sore tongue, and thrush'},
    {SymptomNameJ: 'かゆい肌', SymptomNameE: 'Dry, itchy skin'},
    {SymptomNameJ: '乾燥した咳', SymptomNameE: 'Dry, tickly cough'},
    {SymptomNameJ: '低温性湿疹乾癬', SymptomNameE: 'Dyshidrotic eczema flairs'},
    {SymptomNameJ: '消化不良', SymptomNameE: 'Dyspepsia (indigestion)'},
    {SymptomNameJ: '耳痛、副鼻腔の問題', SymptomNameE: 'earache, and sinus problems'},
    {SymptomNameJ: '感情的な鈍化', SymptomNameE: 'Emotional blunting - cant receive or give'},
    {SymptomNameJ: '便失禁', SymptomNameE: 'Encopressia'},
    {SymptomNameJ: '食道痙攣', SymptomNameE: 'Oesophageal spasms'},
    {SymptomNameJ: '極度の無気力', SymptomNameE: 'Extreme lethargy'},
    {SymptomNameJ: '非常に緊張してびくびくする', SymptomNameE: 'Extremely nervous and jumpy'},
    {SymptomNameJ: '抜毛', SymptomNameE: 'Falling hair'},
    {SymptomNameJ: '疲労、ひどい倦怠感', SymptomNameE: 'Fatigue, leaden heaviness'},
    {SymptomNameJ: '一人でいることへの恐怖', SymptomNameE: 'Fear of being alone'},
    {SymptomNameJ: '狂気', SymptomNameE: 'insanity'},
    {SymptomNameJ: 'コントロールを失うことへの恐怖', SymptomNameE: 'Fear of losing control'},
    {SymptomNameJ: '切迫した気持ち', SymptomNameE: 'Feeling of impending doom'},
    {SymptomNameJ: '脆弱性', SymptomNameE: 'Feeling of vulnerability'},
    {SymptomNameJ: '精神が体と同期していないという感情', SymptomNameE: 'Feelings of the spirit being out of synchronization with the body'},
    {SymptomNameJ: '非現実的な感情', SymptomNameE: 'Feelings of unreality'},
    {SymptomNameJ: '頭皮の下に虫がはっている感覚', SymptomNameE: 'feelings of worms under scalp'},
    {SymptomNameJ: '爪の問題 - 爪の中央部のジストロフィー（中央の線/尾根）', SymptomNameE: 'Fingernail problems - median nail dystrophy (line/ridge down the centre)'},
    {SymptomNameJ: 'フラッシュバック', SymptomNameE: 'Flashbacks'},
    {SymptomNameJ: 'インフルエンザ様症状', SymptomNameE: 'Flu-like symptoms'},
    {SymptomNameJ: '皮膚を這う虫の感覚', SymptomNameE: 'Formication (sensations of bugs crawling on skin)'},
    {SymptomNameJ: '歩行障害 - まっすぐに歩きにくい', SymptomNameE: 'Gait disturbance - hard to walk straight'},
    {SymptomNameJ: '胃炎', SymptomNameE: 'Gastritis'},
    {SymptomNameJ: '生殖器ヘルペス', SymptomNameE: 'Genital herpes'},
    {SymptomNameJ: '幻覚（聴覚および視覚）', SymptomNameE: 'Hallucinations (auditory and visual)'},
    {SymptomNameJ: '頭痛', SymptomNameE: 'Headaches'},
    {SymptomNameJ: '気温21℃以上に耐えられない', SymptomNameE: 'Heat intolerance. cannot tolerate anything over 70°F'},
    {SymptomNameJ: '不整脈、動悸', SymptomNameE: 'Heart arrhythmia, palpitations'},
    {SymptomNameJ: '動悸、心拍数上昇', SymptomNameE: 'Heart palpitations, pounding or racing heart'},
    {SymptomNameJ: '胸焼け', SymptomNameE: 'Heartburn'},
    {SymptomNameJ: '敵意', SymptomNameE: 'Hostility'},
    {SymptomNameJ: 'ほてり', SymptomNameE: 'Hot flashes'},
    {SymptomNameJ: '車のシートベルト、服を着るのが辛い', SymptomNameE: 'Hurts to wear clothes, a car seatbelt'},
    {SymptomNameJ: 'ニュースを見ること、映画を見ること、新聞を読むことができない', SymptomNameE: 'Hyper sensitive (unable to watch the news, see films, read the newspaper)'},
    {SymptomNameJ: '多動', SymptomNameE: 'Hyperactivity'},
    {SymptomNameJ: '反射亢進（「びびり」）', SymptomNameE: 'Hyperreflexia (‘jumpiness’)'},
    {SymptomNameJ: '光、音、その他の刺激に対する過敏症', SymptomNameE: 'Hypersensitivity to light, sound, and other stimuli'},
    {SymptomNameJ: 'ストレスに対する過敏性', SymptomNameE: 'Hypersensitivity to stress'},
    {SymptomNameJ: '過呼吸', SymptomNameE: 'Hyperventilation'},
    {SymptomNameJ: '夢遊病', SymptomNameE: 'Hypnologic'},
    {SymptomNameJ: 'ヒステリックで不適切な笑い', SymptomNameE: 'Hysterical and inappropriate laughter'},
    {SymptomNameJ: 'IBS  - 過敏性腸症候群）', SymptomNameE: 'IBS - irritable bowel syndrome'},
    {SymptomNameJ: 'インポテンツ', SymptomNameE: 'Impotence'},
    {SymptomNameJ: 'マルチタスクが不可能', SymptomNameE: 'inability to cope with a lot of information'},
    {SymptomNameJ: '息が浅い。そして深呼吸できない', SymptomNameE: 'Inability to draw a satisfying breath'},
    {SymptomNameJ: 'ビタミン、サプリメント、ほか医薬品が飲めない。小容量でも奇異反応または精神疾患症状をもたらす', SymptomNameE: 'Inability to tolerate any vitamins, supplements or medications. paradoxical reactions and even episodes of psychosis'},
    {SymptomNameJ: '頻尿、およびトイレまで我慢できない。または尿意があっても尿が出ない', SymptomNameE: 'Incontinence, frequent or urgent need to urinate, unable to hold or pass urine'},
    {SymptomNameJ: '不眠症', SymptomNameE: 'Insomnia'},
    {SymptomNameJ: '脳が濃霧の中にある感覚(ブレインフォグ)', SymptomNameE: 'Intense fuzzy feeling in the head'},
    {SymptomNameJ: '強烈なアドレナリンラッシュ', SymptomNameE: 'intense adrenaline rushes'},
    {SymptomNameJ: '激しい顎の痛み', SymptomNameE: 'Intense jaw pain'},
    {SymptomNameJ: '邪悪な考え', SymptomNameE: 'Intrusive thoughts'},
    {SymptomNameJ: '黄疸', SymptomNameE: 'Jaundice'},
    {SymptomNameJ: '顎が固定され動かない', SymptomNameE: 'Jaws clamped together'},
    {SymptomNameJ: '腕、足、指の震え', SymptomNameE: 'Jerks in arms, legs fingers'},
    {SymptomNameJ: '寂寥感', SymptomNameE: 'Joylessness'},
    {SymptomNameJ: '左右に体が勝手に動く', SymptomNameE: 'Left/Right-sided symptoms'},
    {SymptomNameJ: '記憶喪失', SymptomNameE: 'Loss of memory'},
    {SymptomNameJ: '自尊心の喪失', SymptomNameE: 'Loss of self respect'},
    {SymptomNameJ: '味覚障害。金属のような味覚', SymptomNameE: 'Loss of taste or metallic taste'},
    {SymptomNameJ: '肺の痛み', SymptomNameE: 'Lung pain'},
    {SymptomNameJ: '月経障害', SymptomNameE: 'Menstrual problems'},
    {SymptomNameJ: '筋肉のけいれん', SymptomNameE: 'Muscle spasms'},
    {SymptomNameJ: '筋肉減少', SymptomNameE: 'Muscle weakness'},
    {SymptomNameJ: '筋硬直', SymptomNameE: 'muscular rigidity'},
    {SymptomNameJ: '夜間無呼吸症', SymptomNameE: 'Night apnea'},
    {SymptomNameJ: '寝汗', SymptomNameE: 'Night sweats'},
    {SymptomNameJ: '悪夢', SymptomNameE: 'Nightmares'},
    {SymptomNameJ: '強迫観念', SymptomNameE: 'Obsessions'},
    {SymptomNameJ: '浮腫 - 特に顔や足首', SymptomNameE: 'Oedema - especially face or ankles'},
    {SymptomNameJ: 'パニック発作', SymptomNameE: 'Panic attacks'},
    {SymptomNameJ: 'パラノイア', SymptomNameE: 'Paranoia'},
    {SymptomNameJ: '不快な思い出の侵襲', SymptomNameE: 'Persistent, unpleasant memories'},
    {SymptomNameJ: '多汗', SymptomNameE: 'Perspiring'},
    {SymptomNameJ: 'ピンや針が刺さる感覚', SymptomNameE: 'Pins and needles'},
    {SymptomNameJ: '心的外傷後ストレス障害（PTSD)', SymptomNameE: 'Post Traumatic Stress Disorder'},
    {SymptomNameJ: '更年期障害様症状', SymptomNameE: 'menopause syndorome'},
    {SymptomNameJ: '瞳が細かくなる', SymptomNameE: 'Pupils of eyes become minute'},
    {SymptomNameJ: '止まらない思考', SymptomNameE: 'Racing thoughts,'},
    {SymptomNameJ: '体温の急激な変化', SymptomNameE: 'Rapid changes in body temperature'},
    {SymptomNameJ: '急激な身体的老化', SymptomNameE: 'Rapid physical aging'},
    {SymptomNameJ: '急激な体重減少', SymptomNameE: 'Rapid weight loss'},
    {SymptomNameJ: 'むずむず脚症候群', SymptomNameE: 'Restless legs'},
    {SymptomNameJ: '頭皮の焼きつき感', SymptomNameE: 'Scalp pain and burning'},
    {SymptomNameJ: '目がねじ込まれる感じ', SymptomNameE: 'Screwing up of the eyes'},
    {SymptomNameJ: '発作', SymptomNameE: 'Seizures'},
    {SymptomNameJ: '震え - 極端な寒さや暑さ', SymptomNameE: 'Shivering - feelings of extreme cold or hot'},
    {SymptomNameJ: '匂いの問題 - すべてに悪臭を感じる', SymptomNameE: 'Smell problems - everything smells bad'},
    {SymptomNameJ: '疲れ目、眼精疲労', SymptomNameE: 'Sore and tired eyes, Eye strain'},
    {SymptomNameJ: '吃音', SymptomNameE: 'Stuttering'},
    {SymptomNameJ: '希死念慮', SymptomNameE: 'Suicidal feelings'},
    {SymptomNameJ: '目と目の間の張り', SymptomNameE: 'Tension between eyes'},
    {SymptomNameJ: 'ツグミ感染症様症状', SymptomNameE: 'Thrush-like symptoms'},
    {SymptomNameJ: '触感ー柔らかい衣服でさえサンドペーパーかガラスの破片でこすられるように感じる', SymptomNameE: 'Touch –　Even just soft clothing　feels like sandpaper or shards of broken glass'},
    {SymptomNameJ: '甲状腺障害', SymptomNameE: 'Thyroid disturbances'},
    {SymptomNameJ: '足首の周りが強烈に締められる', SymptomNameE: 'Tight band around the legs and ankles'},
    {SymptomNameJ: '胸の圧迫感', SymptomNameE: 'Tightness in the chest'},
    {SymptomNameJ: '耳鳴り（または脳鳴り）', SymptomNameE: 'Tinnitus (buzzing or ringing in the ears)'},
    {SymptomNameJ: '舌 - 痛み、焼け付き', SymptomNameE: 'Tongue - sore, burning'},
    {SymptomNameJ: '体内部の振動感、バイブレーション', SymptomNameE: 'Tremor or feeling of inner vibration'},
    {SymptomNameJ: 'ヘモクロマトーシスは陰性にもかかわらず鉄分を処理できない', SymptomNameE: 'unable to process iron　without having markers for hemochromatosis'},
    {SymptomNameJ: '非常に多い膣分泌物、または非常に乾いた膣', SymptomNameE: 'Vaginal discharge, or extremely dry or wet vagina'},
    {SymptomNameJ: 'めまい', SymptomNameE: 'Vertigo'},
    {SymptomNameJ: '嘔吐', SymptomNameE: 'Vomiting'},
    {SymptomNameJ: '舌の上が黄色くなる（歯を黄色く着色するほど）', SymptomNameE: 'Yellow coating on the tongue (which can yellow the teeth)'},
  ];


@Component({
  selector: 'app-withdrawalsymptoms',
  templateUrl: './withdrawalsymptoms.component.html',
  styleUrls: ['../../../common.css','./withdrawalsymptoms.component.css']
})
export class WithdrawalsymptomsComponent implements OnInit {
  basicsdata = BASICSDATA;
  currentURL: string; 
  title: string;

  displayedColumns: string[] = ['SymptomNameJ', 'SymptomNameE'];
  dataSource = ELEMENT_DATA;

  constructor(public router: Router, private valueSharedService: ValueSharedService,private meta: Meta,public titleService: Title) {
    // 現在のURLを取得（Twitterシェアボタン設置に使用）
    // this.currentURL = this.router.snapshot.url[0].path; // 'introduction'を返す
    this.currentURL = location.href; // 'http://localhost:4200/introduction'を返す
    console.log('■■■■' + this.currentURL)
    this.titleService.setTitle('ベンゾジアゼピン離脱症状一覧 - Benzodiazepine Withdrawal Symptoms');
    this.meta.updateTag({name: 'title', content: 'ベンゾジアゼピン離脱症状一覧'})
    this.meta.updateTag({name: 'description',content: 'ベンゾジアゼピン離脱症状一覧になります。ひとによりどの症状を発症するかは異なります'})
    this.meta.updateTag({name: 'keywords', content: 'ベンゾ,ベンゾジアゼピン,睡眠薬,抗不安薬,離脱症状,関節痛,Aching joints,筋肉痛,aching muscles,急性過興奮状態,Acute hyper excited state,躁行動,Aggressive behaviour,視覚過敏,Agitated sight,広場恐怖症,Agoraphobia,アレルギー反応,Allergic reactions,以前は問題なかった食品に対するアレルギー反応,Allergic reactions to foods previously tolerated,アレルギーと鼻炎の悪化,Allergy & nasal symptoms exacerbated,怒り,Anger,視覚過敏,Agitated sight,不安,Anxiety,無関心,Apathy,食欲不振、または食欲過剰,Appetite - either loss of, or voracious appetite with constant desire to eat,腕と脚が体から離れているように感じる,Arms and legs feel detached from body,運動失調 - 筋肉の動きを調整できない,Ataxia - cant coordinate muscle movement,背中の痛み,Back pain,頭の周りを締め付けられるような頭痛(孫悟空の頭輪),band around head,失禁,Bladder incontinence,膀胱刺激 - 感染または膀胱炎があるという感覚,Bladder irritation - feeling of having an infection or cystitis,月経周期間の出血,Bleeding between menstrual cycles,鼻血,Bleeding from the nose,眼瞼痙攣,Blepharospasm - eye twitches,腹部の肥大、腹部の膨満(ベンゾベリー),Bloated stomach, distended abdomen (benzo belly),下痢、便秘,diarrhea, constipation,血圧変動,Blood pressure fluctuations,ぼやけた視界,Blurred vision,ゼリーのように感じる体,Body feels like jelly,体臭 - 臭い汗,Body odour - stinking sweat,体温変動,Body temperature fluctuations,徐脈 - 心拍数/脈拍が遅い,Brachycardia - slow heartbeat/pulse,乳房 - 重く、過敏になり、腫れ、痛みを伴う,Breasts - heavy, over-sensitive, swollen, enlarged, painful,呼吸困難,Breathing difficulties,息切れ,Breathlessness,歯ぎしり,Bruxism (teeth grinding),建物が傾いているように見える,Buildings appear to be leaning,背骨に沿って燃えるような痛み,Burning along the spine,口の周りの灼熱感,Burning sensation around the mouth,手足がチクチクする、灼熱感,Buzzing, burning, tingling limbs,知覚の変化（物体がゆがんで動く）,Changes in perception (faces distorting and inanimate objects moving),肌の色、色調、質感の変化,Changes in skin colour, tone, texture,化学物質過敏性,Chemical sensitivities,胸の圧迫感,Chest tightness,悪寒,Chills,窒息,Choking,閉所恐怖症,Claustrophobia,不器用になる,Clumsiness,認知障害,Cognitive impairment,唇のひび割れと痛み,Cracked and sore lips,泣き続ける,Crying jags,切り傷や擦り傷が治るのに数週間かかる,Cuts and abrasions take weeks to heal,目の下が黒ずむ,Dark circles under the eyes,虫歯や歯茎の劣化,Decaying teeth and gums,脱水,Dehydration,せん妄,Delirium,歯痛,Dental pain,自我欠乏（自分が誰であるかを認識できない感覚）,Depersonalisation (a feeling of not knowing who you are),うつ病,Depression,離人感,Derealization,ゆっくり書くのが難しい,Difficulty in writing slowly,嚥下困難,Difficulty swallowing,筋力低下のため、フォークやペンを保持することが困難,Difficulty writing or holding a fork, due to muscle weakness,歪みや幻覚,Distortions or hallucinations,めまい - 落ちていくような感覚,Dizziness - in general, or a feeling like you are falling off the couch/chair/bed,口渇,Dry mouth,喉の乾燥、舌の痛み,Dry throat, sore tongue, and thrush,かゆい肌,Dry, itchy skin,乾燥した咳,Dry, tickly cough,低温性湿疹乾癬,Dyshidrotic eczema flairs,消化不良,Dyspepsia (indigestion),耳痛、副鼻腔の問題,earache, and sinus problems,感情的な鈍化,Emotional blunting - cant receive or give,便失禁,Encopressia,食道痙攣,Oesophageal spasms,極度の無気力,Extreme lethargy,非常に緊張してびくびくする,Extremely nervous and jumpy,抜毛,Falling hair,疲労、ひどい倦怠感,Fatigue, leaden heaviness,一人でいることへの恐怖,Fear of being alone,狂気,insanity,コントロールを失うことへの恐怖,Fear of losing control,切迫した気持ち,Feeling of impending doom,脆弱性,Feeling of vulnerability,精神が体と同期していないという感情,Feelings of the spirit being out of synchronization with the body,非現実的な感情,Feelings of unreality,頭皮の下に虫がはっている感覚,feelings of worms under scalp,爪の問題 - 爪の中央部のジストロフィー（中央の線/尾根）,Fingernail problems - median nail dystrophy (line/ridge down the centre),フラッシュバック,Flashbacks,インフルエンザ様症状,Flu-like symptoms,皮膚を這う虫の感覚,Formication (sensations of bugs crawling on skin),歩行障害 - まっすぐに歩きにくい,Gait disturbance - hard to walk straight,胃炎,Gastritis,生殖器ヘルペス,Genital herpes,幻覚（聴覚および視覚）,Hallucinations (auditory and visual),頭痛,Headaches,気温21℃以上に耐えられない,Heat intolerance. cannot tolerate anything over 70°F,不整脈、動悸,Heart arrhythmia, palpitations,動悸、心拍数上昇,Heart palpitations, pounding or racing heart,胸焼け,Heartburn,敵意,Hostility,ほてり,Hot flashes,車のシートベルト、服を着るのが辛い,Hurts to wear clothes, a car seatbelt,ニュースを見ること、映画を見ること、新聞を読むことができない,Hyper sensitive (unable to watch the news, see films, read the newspaper),多動,Hyperactivity,反射亢進（「びびり」）,Hyperreflexia (‘jumpiness’),光、音、その他の刺激に対する過敏症,Hypersensitivity to light, sound, and other stimuli,ストレスに対する過敏性,Hypersensitivity to stress,過呼吸,Hyperventilation,夢遊病,Hypnologic,ヒステリックで不適切な笑い,Hysterical and inappropriate laughter,IBS  - 過敏性腸症候群）,IBS - irritable bowel syndrome,インポテンツ,Impotence,マルチタスクが不可能,inability to cope with a lot of information,息が浅い。そして深呼吸できない,Inability to draw a satisfying breath,ビタミン、サプリメント、ほか医薬品が飲めない。小容量でも奇異反応または精神疾患症状をもたらす,Inability to tolerate any vitamins, supplements or medications. paradoxical reactions and even episodes of psychosis,頻尿、およびトイレまで我慢できない。または尿意があっても尿が出ない,Incontinence, frequent or urgent need to urinate, unable to hold or pass urine,不眠症,Insomnia,脳が濃霧の中にある感覚(ブレインフォグ),Intense fuzzy feeling in the head,強烈なアドレナリンラッシュ,intense adrenaline rushes,激しい顎の痛み,Intense jaw pain,邪悪な考え,Intrusive thoughts,黄疸,Jaundice,顎が固定され動かない,Jaws clamped together,腕、足、指の震え,Jerks in arms, legs fingers,寂寥感,Joylessness,左右に体が勝手に動く,Left/Right-sided symptoms,記憶喪失,Loss of memory,自尊心の喪失,Loss of self respect,味覚障害。金属のような味覚,Loss of taste or metallic taste,肺の痛み,Lung pain,月経障害,Menstrual problems,筋肉のけいれん,Muscle spasms,筋肉減少,Muscle weakness,筋硬直,muscular rigidity,夜間無呼吸症,Night apnea,寝汗,Night sweats,悪夢,Nightmares,強迫観念,Obsessions,浮腫 - 特に顔や足首,Oedema - especially face or ankles,パニック発作,Panic attacks,パラノイア,Paranoia,不快な思い出の侵襲,Persistent, unpleasant memories,多汗,Perspiring,ピンや針が刺さる感覚,Pins and needles,心的外傷後ストレス障害（PTSD),Post Traumatic Stress Disorder,更年期障害様症状,menopause syndorome,瞳が細かくなる,Pupils of eyes become minute,止まらない思考,Racing thoughts,,体温の急激な変化,Rapid changes in body temperature,急激な身体的老化,Rapid physical aging,急激な体重減少,Rapid weight loss,むずむず脚症候群,Restless legs,頭皮の焼きつき感,Scalp pain and burning,目がねじ込まれる感じ,Screwing up of the eyes,発作,Seizures,震え - 極端な寒さや暑さ,Shivering - feelings of extreme cold or hot,匂いの問題 - すべてに悪臭を感じる,Smell problems - everything smells bad,疲れ目、眼精疲労,Sore and tired eyes, Eye strain,吃音,Stuttering,希死念慮,Suicidal feelings,目と目の間の張り,Tension between eyes,ツグミ感染症様症状,Thrush-like symptoms,触感ー柔らかい衣服でさえサンドペーパーかガラスの破片でこすられるように感じる,Touch –　Even just soft clothing　feels like sandpaper or shards of broken glass,甲状腺障害,Thyroid disturbances,足首の周りが強烈に締められる,Tight band around the legs and ankles,胸の圧迫感,Tightness in the chest,耳鳴り（または脳鳴り）,Tinnitus (buzzing or ringing in the ears),舌 - 痛み、焼け付き,Tongue - sore, burning,体内部の振動感、バイブレーション,Tremor or feeling of inner vibration,ヘモクロマトーシスは陰性にもかかわらず鉄分を処理できない,unable to process iron　without having markers for hemochromatosis,非常に多い膣分泌物、または非常に乾いた膣,Vaginal discharge, or extremely dry or wet vagina,めまい,Vertigo,嘔吐,Vomiting,舌の上が黄色くなる（歯を黄色く着色するほど）,Yellow coating on the tongue (which can yellow the teeth)'})
    this.meta.updateTag({name: 'twitter:card', content: 'summary'})
    this.meta.updateTag({name: 'twitter:site', content: '@benzoinfojapan'})
    this.meta.updateTag({property: 'og:url', content: 'https://benzoinfojapan.org/withdrawalsymptoms'})
    this.meta.updateTag({property: 'og:title', content: 'ベンゾジアゼピン離脱症状一覧'})
    this.meta.updateTag({property: 'og:description', content: 'ベンゾジアゼピン離脱症状一覧になります。ひとによりどの症状を発症するかは異なります'})
    this.meta.updateTag({property: 'og:image', content: 'https://benzoinfojapan.org/assets/images/ValiumAd-benzohistory.jpg'}) 
   }

  ngOnInit() {
    this.title = 'ベンゾ離脱症状一覧';
    this.valueSharedService.currentTitle = this.title;
    this.valueSharedService.basicsdata = this.basicsdata;
  }


}
