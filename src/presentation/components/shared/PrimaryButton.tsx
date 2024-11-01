import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {globalStyles} from '../../theme/Theme';

type btnStyle = 'primary' | 'secondary';

interface Props {
  onPressFunc?: () => void;
  lblText: string;
  btnStyle?: btnStyle;
}

export default function PrimaryButton({
  onPressFunc,
  lblText,
  btnStyle = 'primary',
}: Props) {
  const btnTypeStyle = () => {
    switch (btnStyle) {
      case 'primary':
        return globalStyles.primaryButton;

      // case 'secondary':
      //   return globalStyles.secondaryButton;

      default:
        break;
    }
  };

  return (
    <View style={{marginBottom: 10}}>
      <Pressable onPress={onPressFunc} style={btnTypeStyle}>
        <Text style={globalStyles.buttonText}>{lblText}</Text>
      </Pressable>
    </View>
  );
}
