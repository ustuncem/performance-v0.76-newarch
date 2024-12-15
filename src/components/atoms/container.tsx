import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

import { StyleSheet } from 'react-native-unistyles';

interface ContainerProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * A wrapper around the View component that applies the default styles to the container.
 * @param {ContainerProps} props - The props for the Container component.
 * @returns {React.ReactNode} - The Container component.
 */
export default function Container({
  children,
  style,
  testID = 'container',
  ...props
}: ContainerProps) {
  return (
    <View style={[styles.container, style]} {...props} testID={testID}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  container: {
    paddingHorizontal: theme.spacing[4],
  },
}));
