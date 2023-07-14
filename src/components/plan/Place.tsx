import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { ButtonSmall } from '@/components/buttons';
import { InputLine } from '@/components/inputs';
import { PlaceModal } from '@/components/modals/place';
import { IconLocationMedium, IconOnline } from '@/assets/icons';
import PlanContainer from './PlanContainer';

const Place = () => {
  const [onlinePlace, setOnlinePlace] = useState('');
  const [offlinePlace, setOfflinePlace] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [onoffline, setOnoffline] = useState<'online' | 'offline'>('offline');

  return (
    <PlanContainer navigationBarText="어디서 만나나요?">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StContainer>
          <PlaceModal
            isVisible={isModal}
            closeModal={() => setIsModal(false)}
            changePlaceHandler={(text: string) => setOnlinePlace(text)}
          />
          <StButtonBox>
            <ButtonSmall
              buttonState={onoffline === 'offline' ? 'ActivePrimary' : 'Line'}
              onPress={() => setOnoffline('offline')}
            >
              오프라인
            </ButtonSmall>
            <ButtonSmall
              buttonState={onoffline === 'online' ? 'ActivePrimary' : 'Line'}
              onPress={() => setOnoffline('online')}
            >
              온라인
            </ButtonSmall>
          </StButtonBox>
          {onoffline === 'offline' && (
            <InputLine
              placeholder="장소를 입력해보세요."
              value={onlinePlace}
              onPress={() => setIsModal(true)}
              editable={false}
            >
              <IconLocationMedium />
            </InputLine>
          )}
          {onoffline === 'online' && (
            <InputLine
              placeholder="(선택사항) 링크정보를 입력해보세요."
              value={offlinePlace}
              onChangeText={(text) => setOfflinePlace(text)}
            >
              <IconOnline />
            </InputLine>
          )}
        </StContainer>
      </TouchableWithoutFeedback>
    </PlanContainer>
  );
};

export default Place;

const StContainer = styled.View`
  flex: 1;
  padding: 24px 24px 0px 24px;
`;

const StButtonBox = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
`;
