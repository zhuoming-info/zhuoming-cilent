import React, { useEffect, useState } from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar,
  IonItem, IonButtons, IonButton, IonBackButton, IonIcon,
  IonModal, IonNote, IonTextarea, IonGrid, IonAlert, IonImg, IonLabel,
} from '@ionic/react';
import { useTranslation } from "react-i18next";
import { heart, heartOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import axios from "axios"
import Toast from "../../components/Toast"

interface ParamTypes {
  post_id: string
}

const PostDetail: React.FC = () => {
  const { t } = useTranslation();
  const { post_id } = useParams<ParamTypes>()
  const [showAddComment, setShowAddComment] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showFailToast, setShowFailToast] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [deleteCommentAlert, setDeleteCommentAlert] = useState(false)
  const [content, setContent] = useState("")
  const [post, setPost] = useState({
    post_id: "",
    content: "",
    created_at: "",
    User: {
      user_id: "",
      nickname: "",
      headimgurl: "",
      role: "",
      job: "",
      introduction: ""
    }
  })

  const [comments, setComments] = useState([{
    comment_id: "",
    content: "",
    created_at: "",
    User: {
      user_id: "",
      nickname: "",
      headimgurl: "",
      role: "",
      job: "",
      introduction: ""
    }
  }])
  const [isLike, setIsLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    axios.get(`/forum/post/${post_id}`)
      .then(function (res) {
        setPost(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    axios.get(`/forum/like/${post_id}`)
      .then(function (res) {
        setLikeCount(res.data.length)
        console.log(res.data)
        res.data.forEach((each: any) => {
          if (each.user_id === localStorage.getItem("user_id")) {
            setIsLike(true)
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    axios.get(`/forum/comment/${post_id}`)
      .then(function (res) {
        setComments(res.data)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [showSuccessToast, deleteCommentAlert])

  const AddComment = () => {
    if (content !== "") {
      axios.post(`/forum/comment/${post_id}`, {
        user_id: localStorage.getItem("user_id"),
        content,
        post_id
      })
        .then(function (res) {
          setShowAddComment(false)
          setShowSuccessToast(true)
          setContent("")
        })
        .catch(function (error) {
          console.log(error);
          setShowAddComment(false)
          setShowFailToast(true)
        });
    } else {
      alert("???????????????")
    }
    setShowSuccessToast(false)
    setShowFailToast(false)
  }

  const AddLike = () => {
    axios.post(`/forum/like/${post_id}`, {
      user_id: localStorage.getItem("user_id"),
    })
      .then(function (res) {
        setIsLike(true)
        setLikeCount(likeCount + 1)
      })
      .catch(function (error) {
        setIsLike(false)
        setLikeCount(likeCount - 1)
      });
  }
  const DeletePost = () => {
    axios.delete(`/forum/post/${post_id}`)
      .then(function (res) {
        window.location.href = "/forum"
      })
      .catch(function (error) {
      });
  }
  const DeleteComment = (comment_id: string) => {
    axios.delete(`/forum/comment/${comment_id}`)
      .then(function (res) {
      })
      .catch(function (error) {
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonBackButton defaultHref="/forum" text={t("back")} />
            </IonButton>
          </IonButtons>
          <IonTitle>{t("forum.forum")}</IonTitle>
          <IonButtons slot="end">
            {localStorage.getItem("user_id") ?
              <IonButton color={isLike ? "danger" : "medium"} onClick={() => { AddLike() }}>
                {likeCount === 0 ? "" : likeCount}
                <IonIcon slot="end" icon={isLike ? heart : heartOutline} />
              </IonButton> :
              <IonButton color={isLike ? "danger" : "medium"}>
                {likeCount === 0 ? "" : likeCount}
                <IonIcon slot="end" icon={isLike ? heart : heartOutline} />
              </IonButton>
            }
          </IonButtons>
          <IonAlert
            isOpen={deleteConfirm}
            onDidDismiss={() => setDeleteConfirm(false)}
            header={"???????????????"}
            // message={t("response.end_message")}
            buttons={[
              {
                text: t("response.okay"),
                handler: () => { DeletePost() }
              },
              {
                text: t("response.cancel"),
                role: 'cancel',
                handler: blah => {
                  console.log('Confirm Cancel: blah');
                }
              }
            ]}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem lines="none" routerLink={`/user?id=${post.User.user_id}`}>
          <IonAvatar slot="start">
            <IonImg src={post.User.headimgurl} />
          </IonAvatar>
          <IonLabel>
            <h2>{post.User.nickname}</h2>
            <p>
              {post.User.role === "user" && "??????"}
              {post.User.role === "volunteer" && "?????????"}
              {post.User.role === "developer" && "?????????"}
              {post.User.role === "admin" && "?????????"}
              {post.User.role === "super_admin" && "0?????????"}
              {post.User.job && ("-" + post.User.job)}
              {post.User.introduction && ("-" + post.User.introduction)}
            </p>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <p>{post.content}</p>
        </IonItem>
        <IonItem>
          <IonNote>{post.created_at.split(".")[0].replace("T", " ")}</IonNote>
          <IonButtons slot="end">
            {localStorage.getItem("user_id") && <IonButton color="medium" onClick={() => { setShowAddComment(true) }}>??????</IonButton>}
            {localStorage.getItem("user_id") === post.User.user_id && <IonButton color="medium" onClick={() => { setDeleteConfirm(true) }}>??????</IonButton>}
          </IonButtons>
        </IonItem>
        {comments.length !== 0 && comments.map((comment, index) => {
          return (
            <IonGrid key={index}>
              <IonItem lines="none" routerLink={"/user"}>
                <IonAvatar slot="start">
                  <IonImg src={comment.User.headimgurl} />
                </IonAvatar>
                <IonLabel className="ion-text-wrap">
                  <h2>{comment.User.nickname}</h2>
                  <p>
                    {comment.User.role === "user" && "??????"}
                    {comment.User.role === "volunteer" && "?????????"}
                    {comment.User.role === "developer" && "?????????"}
                    {comment.User.role === "admin" && "?????????"}
                    {comment.User.role === "super_admin" && "0?????????"}
                    {comment.User.job && ("-" + comment.User.job)}
                    {comment.User.introduction && ("-" + comment.User.introduction)}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <p>{comment.content}</p>
              </IonItem>
              <IonItem>
                <IonNote>{comment.created_at.split(".")[0].replace("T", " ")}</IonNote>
                {localStorage.getItem("user_id") === comment.User.user_id &&
                  <IonButtons slot="end" onClick={() => { }}>
                    <IonButton color="medium" onClick={() => { setDeleteCommentAlert(true) }}>??????</IonButton>
                  </IonButtons>
                }
                <IonAlert
                  isOpen={deleteCommentAlert}
                  onDidDismiss={() => setDeleteCommentAlert(false)}
                  header={"???????????????"}
                  // message={t("response.end_message")}
                  buttons={[
                    {
                      text: t("response.okay"),
                      handler: () => { DeleteComment(comment.comment_id) }
                    },
                    {
                      text: t("response.cancel"),
                      role: 'cancel',
                      handler: blah => {
                        console.log('Confirm Cancel: blah');
                      }
                    }
                  ]}
                />
              </IonItem>
            </IonGrid>
          )
        })}
        <Toast open={showSuccessToast} message={"???????????????"} duration={1000} color={"success"} />
        <Toast open={showFailToast} message={"???????????????"} duration={1000} color={"danger"} />
        <IonModal isOpen={showAddComment} >
          <IonContent>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => { setShowAddComment(false) }}>{t("close")}</IonButton>
                </IonButtons>
                <IonTitle>????????????</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => { AddComment() }}>{t("ok")}</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonItem>
              <IonTextarea autoGrow rows={20} value={content}
                onIonChange={e => setContent(e.detail.value!)}
                placeholder="?????????????????????"
              ></IonTextarea>
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
