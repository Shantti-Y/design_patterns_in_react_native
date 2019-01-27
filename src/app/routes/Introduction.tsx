import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
export default class IntroductionList extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScrollView style={styles.container }>
        <View style={ styles.pageTitleView }>
          <Text style={ styles.pageTitleText }>題材について</Text>
        </View>
        <Image style={styles.bookImage} source={ require('$images/main-book.jpg') } />
        <View style={ styles.bookTitleView }>
          <Text style={styles.bookTitleText}>Head Firstデザインパターン ―頭とからだで覚えるデザインパターンの基本</Text>
        </View>
        <View style={ styles.bookInfoView }>
          <Text style={styles.bookInfoTextFromOfficialHeader }>内容紹介(Amazonの内容紹介より): </Text>
          <Text style={styles.bookInfoTextFromOfficial}>初めて学ぶ方、過去に挫折した経験のある方、知識を確固たるものにしたい方を対象に、イラストや写真を使ってやさしく楽しく解説する人気のHead Firstシリーズのデザインパターン編。</Text>
          <Text style={styles.bookInfoTextFromOfficial}>刺激的なレイアウト、思わず膝を叩く見事なたとえ、引き込まれる小話、楽しいクイズやパズルで飽きることなく読み進むことができます。複雑難解なデザインパターンの概念が面白いほどよくわかる、目からウロコの画期的な書籍です。</Text>
          <Text style={styles.bookInfoTextFromOfficialHeader}>著者略歴(Amazonの内容紹介より): </Text>
          <Text style={styles.bookInfoTextFromOfficial}>佐藤/直生</Text>
          <Text style={styles.bookInfoTextFromOfficial}>1974年生まれ。1999年、日本オラクル株式会社に入社。現在はJ2EEやWebサービスに関するテクノロジ・エバンジェリストとして活動中</Text>
          <Text style={styles.bookInfoTextFromOfficial}>木下/哲也</Text>
          <Text style={styles.bookInfoTextFromOfficial}>1967年、川崎市生まれ。早稲田大学理工学部卒業。1991年、松下電器産業株式会社に入社。全文検索技術とその技術を利用したWebアプリケーション、VoIPによるネットワークシステムなどの研究開発に従事。2000年に退社し、オーストラリアのブリスベンに移住。移住後は、主にIT関連の技術書の翻訳、監訳に従事(本データはこの書籍が刊行された当時に掲載されていたものです)</Text>
        </View>
      </ScrollView>
    );
  }
}

const externalLinUrlToAmazon = 'https://www.amazon.co.jp/Head-First%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-%E2%80%95%E9%A0%AD%E3%81%A8%E3%81%8B%E3%82%89%E3%81%A0%E3%81%A7%E8%A6%9A%E3%81%88%E3%82%8B%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%AE%E5%9F%BA%E6%9C%AC-Eric-Freeman/dp/4873112494';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 30
  },
  pageTitleView: {
    width: '100%',
    height: 50,
    marginTop: 30,
    marginLeft: 30
  },
  pageTitleText: {
    fontSize: 34,
    fontWeight: '300'
  },
  bookImage: {
    width: 200,
    height: 240,
    alignSelf: 'center'
  },
  bookTitleView: {
    marginTop: 30,
    marginHorizontal: 25,
  },
  bookTitleText: {
    fontSize: 22,
    fontWeight: '300',
    marginVertical: 4,
  },
  bookInfoView: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  bookInfoTextFromOfficial: {
    lineHeight: 18
  },
  bookInfoTextFromOfficialHeader: {
    fontSize: 18,
    fontWeight: '200',
    marginVertical: 10
  }
});

/*
  1. ヘッダのナビゲーションを外す
  2. 写真を載せる
  3. スタイリングを極める
  4. アマゾンリンクを張る 


*/