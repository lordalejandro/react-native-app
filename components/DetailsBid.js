import { View, Text, Image } from 'react-native';

import { EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DeatilsBid = ({ bid }) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48, marginRight: 25 }}
      />
      <View style={{ 
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       }}>
        <View>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}>
            Bid place by {bid.name}
          </Text>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 1,
            color: COLORS.secondary,
            marginTop: 3,
          }}>
            {bid.date}
          </Text>
        </View>
        <EthPrice price={bid.price} />
      </View>
    </View>
  )
}

export default DeatilsBid