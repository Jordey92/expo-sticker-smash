import { Pressable, StyleSheet, View, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  const primaryViewStyles = theme === "primary" ? { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 } : {};
  const primaryPressableStyles = theme === "primary" ? { backgroundColor: '#fff' } : {};
  const primaryTextStyles = theme === "primary" ? { color: '#25292e' } : {};
  return (
    <View
      style={[
        styles.buttonContainer,
        primaryViewStyles,
      ]}>
      <Pressable
        style={[styles.button, primaryPressableStyles]}
        onPress={onPress}>
        {theme === "primary" && <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />}
        <Text style={[styles.buttonLabel, primaryTextStyles]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});