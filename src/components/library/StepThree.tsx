import React from 'react';
import {
  IonList, IonListHeader, IonLabel, IonItem, IonInput,
} from '@ionic/react';
import { useTranslation } from "react-i18next";

const StepThree: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonList>
      <IonListHeader>三、上传链接或文件</IonListHeader>
      <IonItem>
        <IonLabel>上传链接</IonLabel>
        <IonInput></IonInput>
      </IonItem>
    </IonList>

  );
};

export default StepThree;