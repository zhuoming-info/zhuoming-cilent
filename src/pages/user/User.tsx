import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle,
  IonToolbar, IonButtons, IonButton,
  IonSegment, IonSegmentButton, IonLabel,
  IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonItem,
  IonImg, IonText, IonThumbnail, IonPopover, IonList, IonNote
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import QRcode from '../../components/user/QRcode'
// const url = new URL(window.location.href);
// const code = url.searchParams.get("code");
// if (code) {
//   axios.post('/wx/login', { code: code })
//     .then(function (res) {
//       console.log(res)
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// }


const User: React.FC = () => {

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const { t } = useTranslation();

  if (!localStorage.getItem("zhuoming_userid")) {
    return (
      <QRcode />
    )
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink={'/user/follow'}>{t("user.follow")}</IonButton>
          </IonButtons>
          <IonTitle>{t("user.user")}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink={'/user/settings'}
            // onClick={
            //   (e: any) => {
            //     e.persist();
            //     setShowPopover({ showPopover: true, event: e })
            //   }}
            >{t("user.settings")}</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonItem lines="none" button routerLink={"/user/profile"}>
            <IonThumbnail slot="start">
              <IonImg style={{ borderRadius: "50%" }} src="/assets/avatar.png" />
            </IonThumbnail>
            <IonLabel>
              <h1><strong>Faiyuching</strong></h1>
              <p>签名</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonNote>石墨：</IonNote>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >
          <IonList>
            <IonItem button>{t("user.moments")}</IonItem>
            <IonItem button>{t("user.bookmarks")}</IonItem>
            <IonItem button routerLink={'/user/settings'}>{t("user.settings")}</IonItem>
          </IonList>
        </IonPopover>
        <IonItem lines="none">
          <IonSegment value="unfinished" onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="unfinished">
              <IonLabel>{t("user.unfinished")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="finished">
              <IonLabel>{t("user.finished")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonItem>
        <IonCard routerLink={'/response/task/1'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
        <IonCard routerLink={'/response/task/2'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
        <IonCard routerLink={'/response/task/3'}>
          <IonCardHeader>
            <IonCardSubtitle>组名｜岗位名</IonCardSubtitle>
            <IonCardTitle>任务标题</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            任务内容
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
