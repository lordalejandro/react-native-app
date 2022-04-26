import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.small
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 130, height: 30 }}
        />

        <View style={{ width: 50, height: 50 }}>
          <Image 
            source={assets.person01}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.large, color: COLORS.white }}>
          Hello, Kanye! 👋
        </Text>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Let's find the next Bored Ape NFT!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            placeholder="Search NFTs"
            style={{ flex: 1, color: COLORS.white}}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader