import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane,
  IonSegment, IonButtons, IonButton, IonLabel, IonBackButton,
  IonSegmentButton, IonModal, IonRadioGroup, IonListHeader,
  IonItem, IonAvatar, IonImg, IonRadio, IonAlert
} from '@ionic/react';
import ResponseMenu from '../../components/response/ResponseMenu';
import TaskBaseInfo from '../../components/response/TaskBaseInfo';
import TaskMembers from '../../components/response/TaskMembers';
import TaskSubmit from '../../components/response/TaskSubmit';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router';
import axios from "axios";
import Toast from "../../components/Toast"
interface ParamTypes {
  task_id: string
}

const TaskPage: React.FC = () => {
  const [value, setValue] = useState('base_info')
  const { t } = useTranslation();
  const [showApplyList, setShowApplyList] = useState(false);
  const { task_id } = useParams<ParamTypes>()
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [description, setDescription] = useState("");
  const [showAlert, setShowAlert] = useState(false)
  const [task, setTask] = useState({
    response_id: "",
    group_id: "",
    job_id: "",
    need_shimo: "",
  })
  const [need_shimo, setNeedShimo] = useState(false)
  const [shimoAlert, setShimoAlert] = useState(false)

  useEffect(() => {
    axios.get(`/task/${task_id}`)
      .then(function (res) {
        setTask(res.data)
        setNeedShimo(res.data.need_shimo)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const receiveTask = () => {
    axios.post("/apply", {
      response_id: task.response_id,
      group_id: task.group_id,
      job_id: task.job_id,
      task_id,
      need_shimo: task.need_shimo,
      user_id: localStorage.getItem("user_id")
    })
      .then(function (res) {
        console.log(res.data)
        setShowSuccessToast(true)
      })
      .catch(function (error) {
        console.log(error);
        setShowFailToast(true)
      });
  }
  const ShimoJudge = () => {
    if (need_shimo && localStorage.getItem("shimo")) {
      setShowAlert(true)
    } else if (!need_shimo) {
      setShowAlert(true)
    } else {
      setShimoAlert(true)
    }
  }
  return (
    <IonSplitPane contentId="response">
      <ResponseMenu />
      <IonPage id="response">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton text={t("back")} defaultHref="/response/tasks" />
            </IonButtons>
            <IonTitle>{t("response.response")}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { setShowApplyList(true) }}>{t("response.invite")}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size="large">{t("response.task_detail")}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => { ShimoJudge() }}>{t("response.receive")}</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Toast open={showSuccessToast} message={"领取任务成功！"} duration={1000} color={"success"} />
          <Toast open={showFailToast} message={"领取任务失败！"} duration={1000} color={"danger"} />
          {/* <ApplyList show={showApplyList} /> */}
          <IonAlert
            isOpen={shimoAlert}
            onDidDismiss={() => setShimoAlert(false)}
            header={'需要石墨账号'}
            buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: blah => {
                  console.log('Confirm Cancel: blah');
                }
              },
              {
                text: '去完善个人资料',
                handler: () => {
                  console.log('Confirm Okay');
                }
              }
            ]}
          />
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            // header={'输入申请理由'}
            inputs={[
              {
                name: 'description',
                type: 'text',
                value: description,
                placeholder: '申请理由'
              }
            ]}
            buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
              },
              {
                text: 'Ok',
                handler: (alertData) => {
                  setDescription(alertData.description);
                  receiveTask()
                }
              }
            ]}
          />
          <IonModal isOpen={showApplyList} >
            <IonContent>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>{t("response.response")}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => { setShowApplyList(false) }}>{t("close")}</IonButton>
                  </IonButtons>
                </IonToolbar>
                <IonToolbar>
                  <IonTitle size="large">{t("response.apply_list")}</IonTitle>
                  <IonButtons slot="end">
                    <IonButton>{t("response.invite")}</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonRadioGroup>
                <IonListHeader>信息组</IonListHeader>
                <IonItem>
                  <IonAvatar slot="start">
                    <IonImg src="/assets/avatar.png" />
                  </IonAvatar>
                  <IonLabel>
                    <h2>Faiyuching</h2>
                    <p>正在进行中的任务：x个</p>
                  </IonLabel>
                  <IonRadio value="faiyuching" />
                </IonItem>
              </IonRadioGroup>
            </IonContent>
          </IonModal>
          <IonSegment value={value} onIonChange={e => setValue(e.detail.value!)}>
            <IonSegmentButton value="base_info">
              <IonLabel>{t("response.base_info")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_recipient">
              <IonLabel>{t("response.task_recipient")}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="task_submit">
              <IonLabel>{t("response.task_submit")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {value === "base_info" && <TaskBaseInfo />}
          {value === "task_recipient" && <TaskMembers />}
          {value === "task_submit" && <TaskSubmit />}
        </IonContent>
      </IonPage>
    </IonSplitPane>
  );
};

export default TaskPage;
