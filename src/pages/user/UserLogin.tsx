import {
  IonCard, IonCardHeader, IonIcon, IonImg, IonCardContent, IonItem,
  IonButton, IonContent, IonHeader, IonToolbar, IonAlert,
  IonTitle, IonPage, IonButtons, IonText, IonThumbnail,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import './UserLogin.css'
import { logoWechat } from "ionicons/icons";

let env = ''
if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
  env = "wechat"
} else {
  env = "browser"
}


const UserLogin: React.FC = () => {
  const { t } = useTranslation();
  const [alertOpen, setAlertpen] = useState(false);
  const [QRcode, setQRcode] = useState("")
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onSubmit = () => {
  //   axios.post('/user/signin', { email, password })
  //     .then(function (res) {
  //       console.log(res)
  //       // localStorage.setItem("userId", res.data.id)
  //       // window.location.href = "/"
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // };

  const openQRcode = () => {
    axios.get("/get/qrcode")
      .then(function (res) {
        if (res.data.ticket) {
          setQRcode("<img src='" + "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.ticket + "'/>")
          setAlertpen(true)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code")
    if (code) {
      axios.post('/user/login/wechat/browser', { code: code })
        .then(function (res) {
          localStorage.setItem("user_id", res.data.user_id)
          localStorage.setItem("shimo", res.data.shimo)
          localStorage.setItem("role", res.data.shimo)
          window.location.href = "/user"
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("user.sign")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonItem lines="none">
              <IonThumbnail slot="start" >
                <IonImg src="/assets/icon/icon.png" />
              </IonThumbnail>
              <IonText><strong>??????????????????????????????</strong></IonText>
            </IonItem>
          </IonCardHeader>
          <IonCardContent>
            <IonAlert
              isOpen={alertOpen}
              onDidDismiss={() => setAlertpen(false)}
              header={"?????????????????????????????????"}
              message={QRcode}
              buttons={[
                {
                  text: t("response.cancel"),
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: blah => {
                    console.log('Confirm Cancel: blah');
                  }
                }
              ]}
            />
            {/* <IonItem>
              <IonLabel position="floating">?????????</IonLabel>
              <IonInput
                type="email"
                name="email"
                onIonChange={(e) => {
                  setEmail(e.detail.value!);
                }}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">??????</IonLabel>
              <IonInput
                type="password"
                name="password"
                onIonChange={(e) => {
                  setPassword(e.detail.value!);
                }}
              ></IonInput>
            </IonItem> */}
            <br />
            {/* <IonButton color="primary" expand="block" onClick={onSubmit}>??????</IonButton> */}
            {env === "browser" &&
              <IonButton color="success" expand="block" onClick={() => { openQRcode() }}>
                <IonIcon slot="start" icon={logoWechat} />
                {t("user.wechat_sign")}
              </IonButton>}
            {env === "wechat" &&
              <IonButton color="success" expand="block" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa407d8ca09c9b93b&redirect_uri=https%3A%2F%2Fwww.zhuominginfo.cn%2Fuser%2Flogin&response_type=code&scope=snsapi_userinfo&#wechat_redirec">
                <IonIcon slot="start" icon={logoWechat} />
                {t("user.wechat_sign")}
              </IonButton>}
            <IonItem lines="none">
              {/* <IonButtons slot="start">
                <IonButton fill="clear" routerLink={'/signup'}>
                  ??????????????? <IonIcon slot="end" icon={arrowForwardOutline} />
                </IonButton>
              </IonButtons> */}
              <IonButtons slot="end">
                <IonButton>????????????</IonButton>
              </IonButtons>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
};

export default UserLogin;
