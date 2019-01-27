import React, { Component } from 'react';
import { Card, Subtitle, Caption, Image, View } from '@shoutem/ui';
import { AppLoading } from 'expo';
import loadRubikFonts from '@/lib/LoadRubikFonts';
export default class Profile extends Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {

    await loadRubikFonts();
    this.setState({ fontsAreLoaded: true });
  } 
  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Card>
        <Image
          styleName="medium-wide"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
        />
        <View styleName="content">
          <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
          <Caption>21 hours ago</Caption>
        </View>
      </Card>
    );
  }
}