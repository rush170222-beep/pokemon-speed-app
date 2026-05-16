const POKEMON_DATA = [
  {
    "name": "メガフーディン",
    "speed": 150
  },
  {
    "name": "メガプテラ",
    "speed": 150
  },
  {
    "name": "メガスピアー",
    "speed": 145
  },
  {
    "name": "ドラパルト",
    "speed": 142
  },
  {
    "name": "メガゲッコウガ",
    "speed": 142
  },
  {
    "name": "メガミミロップ",
    "speed": 135
  },
  {
    "name": "メガライボルト",
    "speed": 135
  },
  {
    "name": "メガマフォクシー",
    "speed": 134
  },
  {
    "name": "メガケケンカニ",
    "speed": 132
  },
  {
    "name": "サンダース",
    "speed": 130
  },
  {
    "name": "プテラ",
    "speed": 130
  },
  {
    "name": "メガゲンガー",
    "speed": 130
  },
  {
    "name": "ファイアロー",
    "speed": 126
  },
  {
    "name": "マニューラ",
    "speed": 125
  },
  {
    "name": "メガニャオニクス",
    "speed": 124
  },
  {
    "name": "オンバーン",
    "speed": 123
  },
  {
    "name": "マスカーニャ",
    "speed": 123
  },
  {
    "name": "ゲッコウガ",
    "speed": 122
  },
  {
    "name": "メガピジョット",
    "speed": 121
  },
  {
    "name": "オオニューラ",
    "speed": 120
  },
  {
    "name": "フーディン",
    "speed": 120
  },
  {
    "name": "メガスターミー",
    "speed": 120
  },
  {
    "name": "メガユキメノコ",
    "speed": 120
  },
  {
    "name": "メガルチャブル",
    "speed": 118
  },
  {
    "name": "ルチャブル",
    "speed": 118
  },
  {
    "name": "エンニュート",
    "speed": 117
  },
  {
    "name": "エルフーン",
    "speed": 116
  },
  {
    "name": "スターミー",
    "speed": 115
  },
  {
    "name": "メガアブソル",
    "speed": 115
  },
  {
    "name": "メガヘルガー",
    "speed": 115
  },
  {
    "name": "ジャローダ",
    "speed": 113
  },
  {
    "name": "メガルカリオ",
    "speed": 112
  },
  {
    "name": "ルガルガン(まひるのすがた)",
    "speed": 112
  },
  {
    "name": "イッカネズミ",
    "speed": 111
  },
  {
    "name": "アローラライチュウ",
    "speed": 110
  },
  {
    "name": "エーフィ",
    "speed": 110
  },
  {
    "name": "ケンタロス",
    "speed": 110
  },
  {
    "name": "ゲンガー",
    "speed": 110
  },
  {
    "name": "ヒスイゾロアーク",
    "speed": 110
  },
  {
    "name": "メガエアームド",
    "speed": 110
  },
  {
    "name": "メガエルレイド",
    "speed": 110
  },
  {
    "name": "ユキメノコ",
    "speed": 110
  },
  {
    "name": "ライチュウ",
    "speed": 110
  },
  {
    "name": "ルガルガン(たそがれのすがた)",
    "speed": 110
  },
  {
    "name": "アローラキュウコン",
    "speed": 109
  },
  {
    "name": "エレザード",
    "speed": 109
  },
  {
    "name": "ゴウカザル",
    "speed": 108
  },
  {
    "name": "レパルダス",
    "speed": 106
  },
  {
    "name": "クエスパトラ",
    "speed": 105
  },
  {
    "name": "ゾロアーク",
    "speed": 105
  },
  {
    "name": "ミミロップ",
    "speed": 105
  },
  {
    "name": "メガカイロス",
    "speed": 105
  },
  {
    "name": "メガサメハダー",
    "speed": 105
  },
  {
    "name": "ライボルト",
    "speed": 105
  },
  {
    "name": "ニャオニクス♀",
    "speed": 104
  },
  {
    "name": "ニャオニクス♂",
    "speed": 104
  },
  {
    "name": "マフォクシー",
    "speed": 104
  },
  {
    "name": "エモンガ",
    "speed": 103
  },
  {
    "name": "メガドリュウズ",
    "speed": 103
  },
  {
    "name": "ガブリアス",
    "speed": 102
  },
  {
    "name": "トリミアン",
    "speed": 102
  },
  {
    "name": "メガフラエッテ",
    "speed": 102
  },
  {
    "name": "デデンネ",
    "speed": 101
  },
  {
    "name": "バオッキー",
    "speed": 101
  },
  {
    "name": "ヒヤッキー",
    "speed": 101
  },
  {
    "name": "ピジョット",
    "speed": 101
  },
  {
    "name": "メガキラフロル",
    "speed": 101
  },
  {
    "name": "ヤナッキー",
    "speed": 101
  },
  {
    "name": "イルカマン(ナイーブフォルム)",
    "speed": 100
  },
  {
    "name": "イルカマン(マイティフォルム)",
    "speed": 100
  },
  {
    "name": "ウルガモス",
    "speed": 100
  },
  {
    "name": "キュウコン",
    "speed": 100
  },
  {
    "name": "バクフーン",
    "speed": 100
  },
  {
    "name": "パルデアケンタロス",
    "speed": 100
  },
  {
    "name": "パルデアケンタロス(水)",
    "speed": 100
  },
  {
    "name": "パルデアケンタロス(炎)",
    "speed": 100
  },
  {
    "name": "メガオニゴーリ",
    "speed": 100
  },
  {
    "name": "メガカイリュー",
    "speed": 100
  },
  {
    "name": "メガガルーラ",
    "speed": 100
  },
  {
    "name": "メガサーナイト",
    "speed": 100
  },
  {
    "name": "メガチャーレム",
    "speed": 100
  },
  {
    "name": "メガリザードンX",
    "speed": 100
  },
  {
    "name": "メガリザードンY",
    "speed": 100
  },
  {
    "name": "リザードン",
    "speed": 100
  },
  {
    "name": "パンプジン(ちいさいサイズ)",
    "speed": 99
  },
  {
    "name": "サザンドラ",
    "speed": 98
  },
  {
    "name": "モルペコ(まんぷくもよう)",
    "speed": 97
  },
  {
    "name": "ミミッキュ",
    "speed": 96
  },
  {
    "name": "ウインディ",
    "speed": 95
  },
  {
    "name": "グライオン",
    "speed": 95
  },
  {
    "name": "サメハダー",
    "speed": 95
  },
  {
    "name": "ヒスイバクフーン",
    "speed": 95
  },
  {
    "name": "ヘルガー",
    "speed": 95
  },
  {
    "name": "リーフィア",
    "speed": 95
  },
  {
    "name": "デカヌチャン",
    "speed": 94
  },
  {
    "name": "フラエッテ(えいえんのはな)",
    "speed": 92
  },
  {
    "name": "メガガブリアス",
    "speed": 92
  },
  {
    "name": "ワルビアル",
    "speed": 92
  },
  {
    "name": "ロトム",
    "speed": 91
  },
  {
    "name": "ガルーラ",
    "speed": 90
  },
  {
    "name": "ヒスイウインディ",
    "speed": 90
  },
  {
    "name": "ピカチュウ",
    "speed": 90
  },
  {
    "name": "メガシャンデラ",
    "speed": 90
  },
  {
    "name": "ルカリオ",
    "speed": 90
  },
  {
    "name": "ロズレイド",
    "speed": 90
  },
  {
    "name": "ビビヨン",
    "speed": 89
  },
  {
    "name": "ドリュウズ",
    "speed": 88
  },
  {
    "name": "ウォッシュロトム",
    "speed": 86
  },
  {
    "name": "カットロトム",
    "speed": 86
  },
  {
    "name": "キラフロル",
    "speed": 86
  },
  {
    "name": "スピンロトム",
    "speed": 86
  },
  {
    "name": "ヒートロトム",
    "speed": 86
  },
  {
    "name": "フロストロトム",
    "speed": 86
  },
  {
    "name": "ウェーニバル",
    "speed": 85
  },
  {
    "name": "カイロス",
    "speed": 85
  },
  {
    "name": "ジャラランガ",
    "speed": 85
  },
  {
    "name": "ソウブレイズ",
    "speed": 85
  },
  {
    "name": "ドクロッグ",
    "speed": 85
  },
  {
    "name": "バサギリ",
    "speed": 85
  },
  {
    "name": "ヒスイダイケンキ",
    "speed": 85
  },
  {
    "name": "ブリジュラス",
    "speed": 85
  },
  {
    "name": "ヘラクロス",
    "speed": 85
  },
  {
    "name": "パンプジン(ふつうのサイズ)",
    "speed": 84
  },
  {
    "name": "ルガルガン(まよなかのすがた)",
    "speed": 82
  },
  {
    "name": "ギャラドス",
    "speed": 81
  },
  {
    "name": "ミロカロス",
    "speed": 81
  },
  {
    "name": "メガギャラドス",
    "speed": 81
  },
  {
    "name": "アーボック",
    "speed": 80
  },
  {
    "name": "エルレイド",
    "speed": 80
  },
  {
    "name": "オニゴーリ",
    "speed": 80
  },
  {
    "name": "カイリュー",
    "speed": 80
  },
  {
    "name": "サーナイト",
    "speed": 80
  },
  {
    "name": "シャンデラ",
    "speed": 80
  },
  {
    "name": "チャーレム",
    "speed": 80
  },
  {
    "name": "チルタリス",
    "speed": 80
  },
  {
    "name": "ナゲツケサル",
    "speed": 80
  },
  {
    "name": "ヌメルゴン",
    "speed": 80
  },
  {
    "name": "フシギバナ",
    "speed": 80
  },
  {
    "name": "マンムー",
    "speed": 80
  },
  {
    "name": "メガチルタリス",
    "speed": 80
  },
  {
    "name": "メガニウム",
    "speed": 80
  },
  {
    "name": "メガフシギバナ",
    "speed": 80
  },
  {
    "name": "メガメガニウム",
    "speed": 80
  },
  {
    "name": "バイバニラ",
    "speed": 79
  },
  {
    "name": "イダイトウ♀",
    "speed": 78
  },
  {
    "name": "イダイトウ♂",
    "speed": 78
  },
  {
    "name": "オーダイル",
    "speed": 78
  },
  {
    "name": "カメックス",
    "speed": 78
  },
  {
    "name": "ホルード",
    "speed": 78
  },
  {
    "name": "メガオーダイル",
    "speed": 78
  },
  {
    "name": "メガカメックス",
    "speed": 78
  },
  {
    "name": "ミルホッグ",
    "speed": 77
  },
  {
    "name": "アブソル",
    "speed": 75
  },
  {
    "name": "クレッフィ",
    "speed": 75
  },
  {
    "name": "グレンアルマ",
    "speed": 75
  },
  {
    "name": "スコヴィラン",
    "speed": 75
  },
  {
    "name": "スピアー",
    "speed": 75
  },
  {
    "name": "ダストダス",
    "speed": 75
  },
  {
    "name": "フラージェス",
    "speed": 75
  },
  {
    "name": "メガエンブオー",
    "speed": 75
  },
  {
    "name": "メガジュペッタ",
    "speed": 75
  },
  {
    "name": "メガスコヴィラン",
    "speed": 75
  },
  {
    "name": "メガハッサム",
    "speed": 75
  },
  {
    "name": "メガヘラクロス",
    "speed": 75
  },
  {
    "name": "アマージョ",
    "speed": 72
  },
  {
    "name": "ペロリーム",
    "speed": 72
  },
  {
    "name": "ガチゴラス",
    "speed": 71
  },
  {
    "name": "サダイジャ",
    "speed": 71
  },
  {
    "name": "メガバンギラス",
    "speed": 71
  },
  {
    "name": "アップリュー",
    "speed": 70
  },
  {
    "name": "ウツボット",
    "speed": 70
  },
  {
    "name": "エアームド",
    "speed": 70
  },
  {
    "name": "ジュナイパー",
    "speed": 70
  },
  {
    "name": "ダイケンキ",
    "speed": 70
  },
  {
    "name": "ニョロトノ",
    "speed": 70
  },
  {
    "name": "バリコオル",
    "speed": 70
  },
  {
    "name": "ポットデス",
    "speed": 70
  },
  {
    "name": "ポワルン",
    "speed": 70
  },
  {
    "name": "メガウツボット",
    "speed": 70
  },
  {
    "name": "メガピクシー",
    "speed": 70
  },
  {
    "name": "ヤバソチャ",
    "speed": 70
  },
  {
    "name": "レントラー",
    "speed": 70
  },
  {
    "name": "パンプジン(おおきいサイズ)",
    "speed": 69
  },
  {
    "name": "アーマーガア",
    "speed": 67
  },
  {
    "name": "ラウドボーン",
    "speed": 66
  },
  {
    "name": "アヤシシ",
    "speed": 65
  },
  {
    "name": "エンブオー",
    "speed": 65
  },
  {
    "name": "グレイシア",
    "speed": 65
  },
  {
    "name": "シャワーズ",
    "speed": 65
  },
  {
    "name": "ジュペッタ",
    "speed": 65
  },
  {
    "name": "チリーン",
    "speed": 65
  },
  {
    "name": "ハッサム",
    "speed": 65
  },
  {
    "name": "ブラッキー",
    "speed": 65
  },
  {
    "name": "ブースター",
    "speed": 65
  },
  {
    "name": "ペリッパー",
    "speed": 65
  },
  {
    "name": "ミミズズ",
    "speed": 65
  },
  {
    "name": "メガチリーン",
    "speed": 65
  },
  {
    "name": "ブリガロン",
    "speed": 64
  },
  {
    "name": "マホイップ",
    "speed": 64
  },
  {
    "name": "バンギラス",
    "speed": 61
  },
  {
    "name": "アシレーヌ",
    "speed": 60
  },
  {
    "name": "エンペルト",
    "speed": 60
  },
  {
    "name": "ガオガエン",
    "speed": 60
  },
  {
    "name": "ギルガルド(シールドフォルム)",
    "speed": 60
  },
  {
    "name": "ドデカバシ",
    "speed": 60
  },
  {
    "name": "ニンフィア",
    "speed": 60
  },
  {
    "name": "ヒスイジュナイパー",
    "speed": 60
  },
  {
    "name": "ヒスイヌメルゴン",
    "speed": 60
  },
  {
    "name": "ピクシー",
    "speed": 60
  },
  {
    "name": "ヤレユータン",
    "speed": 60
  },
  {
    "name": "ユキノオー",
    "speed": 60
  },
  {
    "name": "リキキリン",
    "speed": 60
  },
  {
    "name": "ブロスター",
    "speed": 59
  },
  {
    "name": "アマルルガ",
    "speed": 58
  },
  {
    "name": "ゴロンダ",
    "speed": 58
  },
  {
    "name": "ラムパルド",
    "speed": 58
  },
  {
    "name": "オーロット",
    "speed": 56
  },
  {
    "name": "ドダイトス",
    "speed": 56
  },
  {
    "name": "カイリキー",
    "speed": 55
  },
  {
    "name": "ゴルーグ",
    "speed": 55
  },
  {
    "name": "デンリュウ",
    "speed": 55
  },
  {
    "name": "メガゴルーグ",
    "speed": 55
  },
  {
    "name": "パンプジン(とくだいサイズ)",
    "speed": 54
  },
  {
    "name": "タブンネ",
    "speed": 50
  },
  {
    "name": "ツンベアー",
    "speed": 50
  },
  {
    "name": "ドドゲザン",
    "speed": 50
  },
  {
    "name": "ボスゴドラ",
    "speed": 50
  },
  {
    "name": "マリルリ",
    "speed": 50
  },
  {
    "name": "メガタブンネ",
    "speed": 50
  },
  {
    "name": "メガボスゴドラ",
    "speed": 50
  },
  {
    "name": "ヤミラミ",
    "speed": 50
  },
  {
    "name": "メタモン",
    "speed": 48
  },
  {
    "name": "カバルドン",
    "speed": 47
  },
  {
    "name": "ハラバリー",
    "speed": 45
  },
  {
    "name": "メガデンリュウ",
    "speed": 45
  },
  {
    "name": "ローブシン",
    "speed": 45
  },
  {
    "name": "カミツオロチ",
    "speed": 44
  },
  {
    "name": "メガブリガロン",
    "speed": 44
  },
  {
    "name": "ケケンカニ",
    "speed": 43
  },
  {
    "name": "オニシズクモ",
    "speed": 42
  },
  {
    "name": "アリアドス",
    "speed": 40
  },
  {
    "name": "ドサイドン",
    "speed": 40
  },
  {
    "name": "バクーダ",
    "speed": 40
  },
  {
    "name": "フォレトス",
    "speed": 40
  },
  {
    "name": "ヒスイクレベース",
    "speed": 38
  },
  {
    "name": "ジジーロン",
    "speed": 36
  },
  {
    "name": "メガジジーロン",
    "speed": 36
  },
  {
    "name": "キョジオーン",
    "speed": 35
  },
  {
    "name": "ドヒドイデ",
    "speed": 35
  },
  {
    "name": "バンバドロ",
    "speed": 35
  },
  {
    "name": "ミカルゲ",
    "speed": 35
  },
  {
    "name": "ガラルマッギョ",
    "speed": 32
  },
  {
    "name": "マッギョ",
    "speed": 32
  },
  {
    "name": "カビゴン",
    "speed": 30
  },
  {
    "name": "ガラルヤドキング",
    "speed": 30
  },
  {
    "name": "ガラルヤドラン",
    "speed": 30
  },
  {
    "name": "タルップル",
    "speed": 30
  },
  {
    "name": "デスカーン",
    "speed": 30
  },
  {
    "name": "デスバーン",
    "speed": 30
  },
  {
    "name": "トリデプス",
    "speed": 30
  },
  {
    "name": "ハガネール",
    "speed": 30
  },
  {
    "name": "メガハガネール",
    "speed": 30
  },
  {
    "name": "メガヤドラン",
    "speed": 30
  },
  {
    "name": "メガユキノオー",
    "speed": 30
  },
  {
    "name": "ヤドキング",
    "speed": 30
  },
  {
    "name": "ヤドラン",
    "speed": 30
  },
  {
    "name": "ランクルス",
    "speed": 30
  },
  {
    "name": "フレフワン",
    "speed": 29
  },
  {
    "name": "ブリムオン",
    "speed": 29
  },
  {
    "name": "クレベース",
    "speed": 28
  },
  {
    "name": "コータス",
    "speed": 20
  },
  {
    "name": "メガバクーダ",
    "speed": 20
  },
  {
    "name": "メガヤミラミ",
    "speed": 20
  }
];
