import { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { Keyboard, Platform, View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Trans, useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native-unistyles';

import { BottomSheet, BottomSheetHeader, Button, ExpoLink } from '#components';
import { Text } from '#components/atoms';
import { show } from '#lib';

import OneTimeCodeInput from './one-time-code-input';

const CODE_LENGTH = 6;

interface OtpSheetProps {
  phoneNumber: string;
  submitSuccessContent: string;
  onSubmit: () => void;
}

const OtpSheet = forwardRef(
  (
    { phoneNumber, submitSuccessContent, onSubmit }: OtpSheetProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const { t } = useTranslation();
    const [oneTimeCode, setOneTimeCode] = useState('');
    const closeBottomSheet = () => (ref as React.RefObject<BottomSheetModal>).current?.close();

    const handleOneTimeCodeChange = (value: string) => setOneTimeCode(value);

    const handleSubmit = () => {
      show({ content: submitSuccessContent, type: 'success' });
      onSubmit();
      Keyboard.dismiss();
      (ref as React.RefObject<BottomSheetModal>).current?.dismiss();
    };

    useEffect(() => {
      if (oneTimeCode.length === CODE_LENGTH) {
        handleSubmit();
      }
    }, [oneTimeCode]);

    return (
      <BottomSheet
        enablePanDownToClose={false}
        detached
        ref={ref}
        snapPoints={Platform.OS === 'ios' ? ['40%'] : ['50%']}>
        <View style={styles.container}>
          <BottomSheetHeader
            title={t('screens.login.otpSheetTitle')}
            handleClose={closeBottomSheet}
          />
          <Text style={styles.description}>
            <Trans
              i18nKey="screens.login.otpSheetDescription"
              values={{ number: phoneNumber }}
              components={{ bold: <Text style={styles.phoneNumber} /> }}
            />
          </Text>
          <OneTimeCodeInput
            length={CODE_LENGTH}
            code={oneTimeCode}
            onChange={handleOneTimeCodeChange}
          />
          <View style={styles.buttonWrapper}>
            <Button disabled={oneTimeCode.length !== CODE_LENGTH} onPress={handleSubmit}>
              {t('screens.login.otpSheetCode')}
            </Button>
            <ExpoLink linkText={t('screens.login.otpSheetCodeNotFound')} href="/register" />
          </View>
        </View>
      </BottomSheet>
    );
  }
);

OtpSheet.displayName = 'OtpSheet';

export default memo(OtpSheet);

const styles = StyleSheet.create(theme => ({
  container: {
    padding: theme.spacing[4],
    flex: 1,
    gap: theme.spacing[6],
    borderRadius: theme.borderRadius['4xl'],
  },
  codeInputWrapper: {
    flexDirection: 'row',
    gap: theme.spacing[2],
  },
  description: {
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.typography.PRIMARY[800],
  },
  phoneNumber: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.typography.PRIMARY[800],
    fontSize: theme.fontSizes.sm,
  },
  buttonWrapper: {
    marginTop: 'auto',
    gap: theme.spacing[2],
    alignItems: 'center',
  },
}));
