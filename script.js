const $=id=>document.getElementById(id);
const KEY="pokemonChampionsNormalImageMapCompleteFixV1";
const SPECIAL_IMAGE_CANDIDATES={
  "ニャオニクス♀": [
    "https://play.pokemonshowdown.com/sprites/xyani/meowstic-f.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meowstic-f.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678-Female.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678-F.png"
  ],
  "ニャオニクス♂": [
    "https://play.pokemonshowdown.com/sprites/xyani/meowstic.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meowstic.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678.png"
  ],
  "イダイトウ♀": [
    "https://play.pokemonshowdown.com/sprites/xyani/basculegion-f.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/basculegion-f.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200902-Female.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200902-F.png"
  ],
  "イダイトウ♂": [
    "https://play.pokemonshowdown.com/sprites/xyani/basculegion.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/basculegion.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200902.png"
  ],
  "パルデアケンタロス": [
    "https://play.pokemonshowdown.com/sprites/xyani/tauros-paldeacombat.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldeacombat.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200128-Paldea%20Combat.png"
  ],
  "パルデアケンタロス(炎)": [
    "https://play.pokemonshowdown.com/sprites/xyani/tauros-paldeablaze.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldeablaze.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200128-Paldea%20Blaze.png"
  ],
  "パルデアケンタロス(水)": [
    "https://play.pokemonshowdown.com/sprites/xyani/tauros-paldeaaqua.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldeaaqua.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200128-Paldea%20Aqua.png"
  ],
  "イルカマン(ナイーブフォルム)": [
    "https://play.pokemonshowdown.com/sprites/xyani/palafin.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/palafin.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200964.png"
  ],
  "イルカマン(マイティフォルム)": [
    "https://play.pokemonshowdown.com/sprites/xyani/palafin-hero.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/palafin-hero.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200964-Hero.png"
  ],
  "フラエッテ(えいえんのはな)": [
    "https://play.pokemonshowdown.com/sprites/xyani/floette-eternal.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/floette-eternal.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200670-Eternal.png"
  ],
  "ロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479.png"
  ],
  "ヒートロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom-heat.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom-heat.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479-Heat.png"
  ],
  "ウォッシュロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom-wash.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom-wash.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479-Wash.png"
  ],
  "フロストロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom-frost.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom-frost.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479-Frost.png"
  ],
  "スピンロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom-fan.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom-fan.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479-Fan.png"
  ],
  "カットロトム": [
    "https://play.pokemonshowdown.com/sprites/xyani/rotom-mow.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/rotom-mow.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200479-Mow.png"
  ],
  "ガラルマッギョ": [
    "https://play.pokemonshowdown.com/sprites/xyani/stunfisk-galar.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/stunfisk-galar.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200618-Galar.png"
  ],
  "ガラルヤドラン": [
    "https://play.pokemonshowdown.com/sprites/xyani/slowbro-galar.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/slowbro-galar.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200080-Galar.png"
  ],
  "ガラルヤドキング": [
    "https://play.pokemonshowdown.com/sprites/xyani/slowking-galar.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/slowking-galar.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200199-Galar.png"
  ],
  "ヒスイウインディ": [
    "https://play.pokemonshowdown.com/sprites/xyani/arcanine-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/arcanine-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200059-Hisui.png"
  ],
  "ヒスイバクフーン": [
    "https://play.pokemonshowdown.com/sprites/xyani/typhlosion-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/typhlosion-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200157-Hisui.png"
  ],
  "ヒスイダイケンキ": [
    "https://play.pokemonshowdown.com/sprites/xyani/samurott-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/samurott-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200503-Hisui.png"
  ],
  "ヒスイゾロアーク": [
    "https://play.pokemonshowdown.com/sprites/xyani/zoroark-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/zoroark-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200571-Hisui.png"
  ],
  "ヒスイヌメルゴン": [
    "https://play.pokemonshowdown.com/sprites/xyani/goodra-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/goodra-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200706-Hisui.png"
  ],
  "ヒスイジュナイパー": [
    "https://play.pokemonshowdown.com/sprites/xyani/decidueye-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/decidueye-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200724-Hisui.png"
  ],
  "ヒスイクレベース": [
    "https://play.pokemonshowdown.com/sprites/xyani/avalugg-hisui.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/avalugg-hisui.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200713-Hisui.png"
  ],
  "アヤシシ": [
    "https://play.pokemonshowdown.com/sprites/xyani/wyrdeer.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/wyrdeer.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200899.png"
  ],
  "バサギリ": [
    "https://play.pokemonshowdown.com/sprites/xyani/kleavor.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/kleavor.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200900.png"
  ],
  "オオニューラ": [
    "https://play.pokemonshowdown.com/sprites/xyani/sneasler.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/sneasler.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200903.png"
  ],
  "メガフーディン": [
    "https://play.pokemonshowdown.com/sprites/xyani/alakazam-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/alakazam-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200065-Mega.png"
  ],
  "メガプテラ": [
    "https://play.pokemonshowdown.com/sprites/xyani/aerodactyl-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/aerodactyl-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200142-Mega.png"
  ],
  "メガスピアー": [
    "https://play.pokemonshowdown.com/sprites/xyani/beedrill-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/beedrill-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200015-Mega.png"
  ],
  "メガゲッコウガ": [
    "https://play.pokemonshowdown.com/sprites/xyani/greninja-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/greninja-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200658-Mega.png"
  ],
  "メガライボルト": [
    "https://play.pokemonshowdown.com/sprites/xyani/manectric-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/manectric-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200310-Mega.png"
  ],
  "メガミミロップ": [
    "https://play.pokemonshowdown.com/sprites/xyani/lopunny-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/lopunny-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200428-Mega.png"
  ],
  "メガマフォクシー": [
    "https://play.pokemonshowdown.com/sprites/xyani/delphox-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/delphox-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200655-Mega.png"
  ],
  "メガゲンガー": [
    "https://play.pokemonshowdown.com/sprites/xyani/gengar-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/gengar-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200094-Mega.png"
  ],
  "メガニャオニクス": [
    "https://play.pokemonshowdown.com/sprites/xyani/meowstic-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meowstic-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200678-Mega.png"
  ],
  "メガピジョット": [
    "https://play.pokemonshowdown.com/sprites/xyani/pidgeot-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/pidgeot-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200018-Mega.png"
  ],
  "メガスターミー": [
    "https://play.pokemonshowdown.com/sprites/xyani/starmie-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/starmie-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200121-Mega.png"
  ],
  "メガユキメノコ": [
    "https://play.pokemonshowdown.com/sprites/xyani/froslass-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/froslass-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200478-Mega.png"
  ],
  "メガルチャブル": [
    "https://play.pokemonshowdown.com/sprites/xyani/hawlucha-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/hawlucha-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200701-Mega.png"
  ],
  "メガヘルガー": [
    "https://play.pokemonshowdown.com/sprites/xyani/houndoom-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/houndoom-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200229-Mega.png"
  ],
  "メガアブソル": [
    "https://play.pokemonshowdown.com/sprites/xyani/absol-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/absol-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200359-Mega.png"
  ],
  "メガルカリオ": [
    "https://play.pokemonshowdown.com/sprites/xyani/lucario-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/lucario-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200448-Mega.png"
  ],
  "メガエアームド": [
    "https://play.pokemonshowdown.com/sprites/xyani/skarmory-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/skarmory-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200227-Mega.png"
  ],
  "メガエルレイド": [
    "https://play.pokemonshowdown.com/sprites/xyani/gallade-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/gallade-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200475-Mega.png"
  ],
  "メガカイロス": [
    "https://play.pokemonshowdown.com/sprites/xyani/pinsir-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/pinsir-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200127-Mega.png"
  ],
  "メガサメハダー": [
    "https://play.pokemonshowdown.com/sprites/xyani/sharpedo-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/sharpedo-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200319-Mega.png"
  ],
  "メガドリュウズ": [
    "https://play.pokemonshowdown.com/sprites/xyani/excadrill-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/excadrill-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200530-Mega.png"
  ],
  "メガフラエッテ": [
    "https://play.pokemonshowdown.com/sprites/xyani/floette-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/floette-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200670-Mega.png"
  ],
  "メガキラフロル": [
    "https://play.pokemonshowdown.com/sprites/xyani/glimmora-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/glimmora-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200970-Mega.png"
  ],
  "メガリザードンX": [
    "https://play.pokemonshowdown.com/sprites/xyani/charizard-megax.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/charizard-megax.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200006-Mega%20X.png"
  ],
  "メガリザードンY": [
    "https://play.pokemonshowdown.com/sprites/xyani/charizard-megay.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/charizard-megay.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200006-Mega%20Y.png"
  ],
  "メガガルーラ": [
    "https://play.pokemonshowdown.com/sprites/xyani/kangaskhan-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/kangaskhan-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200115-Mega.png"
  ],
  "メガカイリュー": [
    "https://play.pokemonshowdown.com/sprites/xyani/dragonite-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/dragonite-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200149-Mega.png"
  ],
  "メガサーナイト": [
    "https://play.pokemonshowdown.com/sprites/xyani/gardevoir-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/gardevoir-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200282-Mega.png"
  ],
  "メガチャーレム": [
    "https://play.pokemonshowdown.com/sprites/xyani/medicham-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/medicham-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200308-Mega.png"
  ],
  "メガオニゴーリ": [
    "https://play.pokemonshowdown.com/sprites/xyani/glalie-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/glalie-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200362-Mega.png"
  ],
  "メガガブリアス": [
    "https://play.pokemonshowdown.com/sprites/xyani/garchomp-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/garchomp-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200445-Mega.png"
  ],
  "メガシャンデラ": [
    "https://play.pokemonshowdown.com/sprites/xyani/chandelure-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/chandelure-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200609-Mega.png"
  ],
  "メガギャラドス": [
    "https://play.pokemonshowdown.com/sprites/xyani/gyarados-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/gyarados-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200130-Mega.png"
  ],
  "メガフシギバナ": [
    "https://play.pokemonshowdown.com/sprites/xyani/venusaur-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/venusaur-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200003-Mega.png"
  ],
  "メガメガニウム": [
    "https://play.pokemonshowdown.com/sprites/xyani/meganium-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meganium-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200154-Mega.png"
  ],
  "メガチルタリス": [
    "https://play.pokemonshowdown.com/sprites/xyani/altaria-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/altaria-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200334-Mega.png"
  ],
  "メガカメックス": [
    "https://play.pokemonshowdown.com/sprites/xyani/blastoise-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/blastoise-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200009-Mega.png"
  ],
  "メガオーダイル": [
    "https://play.pokemonshowdown.com/sprites/xyani/feraligatr-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/feraligatr-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200160-Mega.png"
  ],
  "メガハッサム": [
    "https://play.pokemonshowdown.com/sprites/xyani/scizor-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/scizor-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200212-Mega.png"
  ],
  "メガヘラクロス": [
    "https://play.pokemonshowdown.com/sprites/xyani/heracross-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/heracross-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200214-Mega.png"
  ],
  "メガジュペッタ": [
    "https://play.pokemonshowdown.com/sprites/xyani/banette-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/banette-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200354-Mega.png"
  ],
  "メガエンブオー": [
    "https://play.pokemonshowdown.com/sprites/xyani/emboar-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/emboar-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200500-Mega.png"
  ],
  "メガスコヴィラン": [
    "https://play.pokemonshowdown.com/sprites/xyani/scovillain-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/scovillain-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200952-Mega.png"
  ],
  "メガバンギラス": [
    "https://play.pokemonshowdown.com/sprites/xyani/tyranitar-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tyranitar-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200248-Mega.png"
  ],
  "メガピクシー": [
    "https://play.pokemonshowdown.com/sprites/xyani/clefable-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/clefable-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200036-Mega.png"
  ],
  "メガウツボット": [
    "https://play.pokemonshowdown.com/sprites/xyani/victreebel-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/victreebel-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200071-Mega.png"
  ],
  "メガチリーン": [
    "https://play.pokemonshowdown.com/sprites/xyani/chimecho-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/chimecho-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200358-Mega.png"
  ],
  "メガゴルーグ": [
    "https://play.pokemonshowdown.com/sprites/xyani/golurk-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/golurk-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200623-Mega.png"
  ],
  "メガボスゴドラ": [
    "https://play.pokemonshowdown.com/sprites/xyani/aggron-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/aggron-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200306-Mega.png"
  ],
  "メガタブンネ": [
    "https://play.pokemonshowdown.com/sprites/xyani/audino-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/audino-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200531-Mega.png"
  ],
  "メガデンリュウ": [
    "https://play.pokemonshowdown.com/sprites/xyani/ampharos-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/ampharos-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200181-Mega.png"
  ],
  "メガブリガロン": [
    "https://play.pokemonshowdown.com/sprites/xyani/chesnaught-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/chesnaught-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200652-Mega.png"
  ],
  "メガジジーロン": [
    "https://play.pokemonshowdown.com/sprites/xyani/drampa-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/drampa-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200780-Mega.png"
  ],
  "メガヤドラン": [
    "https://play.pokemonshowdown.com/sprites/xyani/slowbro-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/slowbro-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200080-Mega.png"
  ],
  "メガハガネール": [
    "https://play.pokemonshowdown.com/sprites/xyani/steelix-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/steelix-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200208-Mega.png"
  ],
  "メガユキノオー": [
    "https://play.pokemonshowdown.com/sprites/xyani/abomasnow-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/abomasnow-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200460-Mega.png"
  ],
  "メガヤミラミ": [
    "https://play.pokemonshowdown.com/sprites/xyani/sableye-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/sableye-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200302-Mega.png"
  ],
  "メガバクーダ": [
    "https://play.pokemonshowdown.com/sprites/xyani/camerupt-mega.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/camerupt-mega.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20CP%200323-Mega.png"
  ],
  "ニャオニクス ♀": [
    "https://play.pokemonshowdown.com/sprites/xyani/meowstic-f.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meowstic-f.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678-Female.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678-F.png"
  ],
  "イダイトウ ♀": [
    "https://play.pokemonshowdown.com/sprites/xyani/basculegion-f.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/basculegion-f.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200902-Female.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200902-F.png"
  ],
  "パルデアケンタロス（炎）": [
    "https://play.pokemonshowdown.com/sprites/xyani/tauros-paldeablaze.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldeablaze.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200128-Paldea%20Blaze.png"
  ],
  "パルデアケンタロス（水）": [
    "https://play.pokemonshowdown.com/sprites/xyani/tauros-paldeaaqua.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldeaaqua.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200128-Paldea%20Aqua.png"
  ]
};
let normalImageMap=JSON.parse(localStorage.getItem(KEY)||"{}");

// メガニャオニクス画像修正：画像が存在しない場合は通常ニャオニクス画像へフォールバック
if (typeof SPECIAL_IMAGE_CANDIDATES !== "undefined") {
  SPECIAL_IMAGE_CANDIDATES["メガニャオニクス"] = [
    "https://play.pokemonshowdown.com/sprites/xyani/meowstic.gif",
    "https://play.pokemonshowdown.com/sprites/gen5/meowstic.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png",
    "https://archives.bulbagarden.net/wiki/Special:FilePath/Menu%20HOME%200678.png"
  ];
}


function normalizeName(name){
  return String(name)
    .normalize("NFKC")
    .replace(/[\uFE0E\uFE0F\u200B-\u200F\u202A-\u202E]/g,"")
    .replace(/\s+/g,"")
    .replace(/（/g,"(")
    .replace(/）/g,")")
    .trim();
}

const NORMALIZED_SPECIAL={};
Object.keys(SPECIAL_IMAGE_CANDIDATES).forEach(k=>{
  NORMALIZED_SPECIAL[normalizeName(k)] = SPECIAL_IMAGE_CANDIDATES[k];
});

function baseName(n){
  return normalizeName(n)
    .replace(/^メガ/,"")
    .replace(/^アローラ/,"")
    .replace(/^ガラル/,"")
    .replace(/^ヒスイ/,"")
    .replace(/^パルデア/,"")
    .replace(/\(.+?\)/g,"")
    .replace(/X$/,"")
    .replace(/Y$/,"");
}

function getCandidates(name){
  const n=normalizeName(name);
  if(NORMALIZED_SPECIAL[n]) return NORMALIZED_SPECIAL[n];

  if(n.includes("ニャオニクス") && n.includes("♀")) return NORMALIZED_SPECIAL["ニャオニクス♀"];
  if(n.includes("イダイトウ") && n.includes("♀")) return NORMALIZED_SPECIAL["イダイトウ♀"];
  if(n==="パルデアケンタロス(炎)") return NORMALIZED_SPECIAL["パルデアケンタロス(炎)"];
  if(n==="パルデアケンタロス(水)") return NORMALIZED_SPECIAL["パルデアケンタロス(水)"];

  const normal = normalImageMap[name] || normalImageMap[n] || normalImageMap[baseName(n)];
  return normal ? [normal] : [];
}

function imageHtml(name, cls=""){
  const candidates=getCandidates(name);
  const encoded=encodeURIComponent(JSON.stringify(candidates));
  const src=candidates[0]||"";
  return `<div class="${cls||"poke-img"}">${src?`<img src="${src}" data-candidates="${encoded}" data-index="0" onerror="tryNextImage(this)" alt="">`:""}</div>`;
}

function tryNextImage(img){
  try{
    const list=JSON.parse(decodeURIComponent(img.dataset.candidates||"%5B%5D"));
    let idx=Number(img.dataset.index||0)+1;
    if(idx<list.length){
      img.dataset.index=String(idx);
      img.src=list[idx];
    }else{
      img.style.display="none";
    }
  }catch(e){ img.style.display="none"; }
}

function setMainImage(name){
  const wrap=document.querySelector(".img-wrap");
  const candidates=getCandidates(name);
  const src=candidates[0]||"";
  const img=$("myImage");
  if(!src){ img.style.display="none"; return; }
  img.style.display="block";
  img.dataset.candidates=encodeURIComponent(JSON.stringify(candidates));
  img.dataset.index="0";
  img.onerror=function(){tryNextImage(this)};
  img.src=src;
}

async function loadAllImages(){
  $("imageStatus").textContent="通常画像を取得中...";
  try{
    const list=await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1200").then(r=>r.json());
    const jaToId={};
    for(let i=0;i<list.results.length;i+=30){
      const part=list.results.slice(i,i+30);
      await Promise.all(part.map(async item=>{
        const d=await fetch(item.url).then(r=>r.json());
        const ja=d.names.find(x=>x.language.name==="ja-Hrkt"||x.language.name==="ja");
        if(ja) jaToId[normalizeName(ja.name)]=d.id;
      }));
      $("imageStatus").textContent=`通常画像取得中... ${Math.min(i+30,list.results.length)} / ${list.results.length}`;
    }
    const m={};
    POKEMON_DATA.forEach(p=>{
      if(getCandidates(p.name).length) return;
      const n=normalizeName(p.name);
      const b=baseName(n);
      const id=jaToId[n]||jaToId[b];
      if(id) m[n]=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    });
    normalImageMap=m; localStorage.setItem(KEY,JSON.stringify(m));
    $("imageStatus").textContent=`通常画像取得完了：${Object.keys(m).length}件 / 特殊画像設定済み`;
    updateSelectedPokemon(); render();
  }catch(e){console.error(e);$("imageStatus").textContent="取得失敗";alert("通常画像取得に失敗しました。");}
}

function clearImages(){localStorage.removeItem(KEY);normalImageMap={};$("imageStatus").textContent="通常画像キャッシュ削除済み / 特殊画像は残ります";updateSelectedPokemon();render();}
function rankMul(r){r=Number(r);return r>=0?(2+r)/2:2/(2-r);}
function calcSpeed(b,pt,n,r,o){let s=Math.floor((Number(b)+20+Number(pt))*Number(n));s=Math.floor(s*rankMul(r));return Math.floor(s*Number(o));}
function enemySetting(){
  const mode=$("enemyType").value;
  const customPt=Number($("enemyAbilityPt").value||0);
  const customRank=Number($("enemyRank").value||0);

  if(mode==="custom"){
    return {nature: Number($("enemyNature").value), pt: customPt, rank: customRank};
  }

  if(mode==="fast") return {nature:1.1, pt:32, rank: customRank};
  if(mode==="semi") return {nature:1, pt:32, rank: customRank};
  if(mode==="none") return {nature:1, pt:0, rank: customRank};
  return {nature:0.9, pt:0, rank: customRank};
}

function fillEnemyRank(){
  const select=$("enemyRank");
  if(!select) return;
  select.innerHTML="";
  for(let i=-6;i<=6;i++){
    const op=document.createElement("option");
    op.value=i;
    op.textContent=i>0?"+"+i:String(i);
    if(i===0) op.selected=true;
    select.appendChild(op);
  }
}

function fillRank(){for(let i=-6;i<=6;i++){const op=document.createElement("option");op.value=i;op.textContent=i>0?"+"+i:String(i);if(i===0)op.selected=true;$("rank").appendChild(op);}}

function fillEnemyPokemonSelect(){
  const kw=normalizeName($("enemySearch").value);
  const now=$("enemyPokemon").value;
  $("enemyPokemon").innerHTML="";

  POKEMON_DATA
    .filter(p=>!kw||normalizeName(p.name).includes(kw))
    .forEach(p=>{
      const op=document.createElement("option");
      op.value=p.name;
      op.textContent=`${p.name}　S${p.speed}`;
      $("enemyPokemon").appendChild(op);
    });

  if([...$("enemyPokemon").options].some(o=>o.value===now)){
    $("enemyPokemon").value=now;
  }

  render();
}

function fillPokemonSelect(){const kw=normalizeName($("mySearch").value);const now=$("myPokemon").value;$("myPokemon").innerHTML="";POKEMON_DATA.filter(p=>!kw||normalizeName(p.name).includes(kw)).forEach(p=>{const op=document.createElement("option");op.value=p.name;op.textContent=`${p.name}　S${p.speed}`;$("myPokemon").appendChild(op);});if([...$("myPokemon").options].some(o=>o.value===now))$("myPokemon").value=now;updateSelectedPokemon();}
function byName(n){return POKEMON_DATA.find(p=>p.name===n)||POKEMON_DATA[0];}
function updateSelectedPokemon(){const p=byName($("myPokemon").value);if(!p)return;$("baseSpeed").value=p.speed;$("myName").textContent=p.name;$("myBaseText").textContent=p.speed;setMainImage(p.name);render();}
function render(){
const my=calcSpeed($("baseSpeed").value,$("abilityPt").value,$("nature").value,$("rank").value,$("other").value);
$("mySpeed").textContent=my;

const e=enemySetting();
const selectedEnemy=byName($("enemyPokemon").value || $("myPokemon").value);
const enemyFinal=calcSpeed(
  selectedEnemy.speed,
  e.pt,
  e.nature,
  e.rank || 0,
  $("enemyOther").value
);
$("enemyFinalSpeed").textContent=enemyFinal;

const kw=normalizeName($("listSearch").value);let w=0,same=0,l=0;const rows=POKEMON_DATA.filter(p=>!kw||normalizeName(p.name).includes(kw)).map(p=>{const es=calcSpeed(p.speed,e.pt,e.nature,e.rank||0,$("enemyOther").value),diff=my-es;let j="抜かれる",c="lose";if(diff>0){j="抜ける";c="win";w++;}else if(diff===0){j="同速";c="same";same++;}else l++;return{...p,enemySpeed:es,diff,j,c};}).sort((a,b)=>b.enemySpeed-a.enemySpeed);$("winCount").textContent=w;$("sameCount").textContent=same;$("loseCount").textContent=l;$("resultList").innerHTML=rows.map(p=>`<div class="row">${imageHtml(p.name)}<div><div class="name">${p.name}</div><div class="sub">種族値S ${p.speed} / 相手S ${p.enemySpeed} / 差 ${p.diff}</div></div><div class="badge ${p.c}">${p.j}</div></div>`).join("");}
$("loadImages").addEventListener("click",loadAllImages);
$("clearImages").addEventListener("click",clearImages);
if(Object.keys(normalImageMap).length)$("imageStatus").textContent=`通常画像保存済み：${Object.keys(normalImageMap).length}件 / 特殊画像設定済み`;
fillRank();fillEnemyRank();fillPokemonSelect();fillEnemyPokemonSelect();
["mySearch","myPokemon","baseSpeed","abilityPt","nature","rank","other","enemyType","enemyAbilityPt","enemyNature","enemyRank","enemyOther","listSearch","enemySearch","enemyPokemon"].forEach(id=>$(id).addEventListener("input",()=>{if(id==="mySearch")fillPokemonSelect();else if(id==="enemySearch")fillEnemyPokemonSelect();else if(id==="myPokemon")updateSelectedPokemon();else render();}));


// 初回起動時、通常画像が未取得なら自動で取得する
window.addEventListener("load", () => {
  if (typeof loadAllImages === "function" && typeof normalImageMap !== "undefined") {
    if (!Object.keys(normalImageMap).length) {
      loadAllImages();
    }
  }
});
