import styles from "../../style/explore/ExploreCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount } from "../../util";
import { YoutubeLikeClickDataAPI } from "webapp/api/youtubeApi";
import { UserAuthDataAPI } from "webapp/api/userApi";
import { SessionRemove } from "webapp/common/component/SessionRemove";
import { useNavigate } from "react-router-dom";
import likeOne from "../../../images/like1-1.png";
import likeTwo from "../../../images/like1-2.png";

const ExploreCard = ({ data }) => {
  const videoId = data?.video_id;
  const navigate = useNavigate();

  const likeClick = () => {
    UserAuthDataAPI().then((res) => {
      if (res?.data?.code === 200) {
        YoutubeLikeClickDataAPI({
          username: sessionStorage.getItem("username"),
          youtubeVideoId: videoId,
        })
          .then((res) => {
            console.log("res : ", res);
            if (res?.data?.code === 200) {
              alert("좋아요 추가");
              window.location.reload();
            } else {
              alert("좋아요 실패");
            }
          })
          .catch((err) => console.error("youtube like click error : ", err));
      } else {
        const result = window.confirm(
          "재로그인이 필요합니다. 로그인을 진행하시겠습니까?"
        );
        if (result) {
          SessionRemove();
          sessionStorage.setItem("signinPage", "/youtube_explore");
          navigate("/users_signin");
        }
      }
    });
  };

  return (
    <>
      <div className={styles.cardContainerBox}>
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          <div className={styles.card}>
            <img
              className={styles.thumbnail}
              src={data.thumbnail}
              alt={`${data.title}의 썸네일`}
            />
            <div className={styles.info}>
              <div className={styles.title}>{data.title}</div>
              <div className={styles.meta}>
                <a
                  href={`https://www.youtube.com/channel/${data.channelId}`}
                  className={styles.uploader}
                >
                  {data.channelTitle}
                </a>
                {/* <div className={styles.view}>
              {ProcessViewCount(data.viewCount)}
            </div> */}
                {/* <div className={styles.time}>{moment(data.date).fromNow()}</div> */}
              </div>
              <div className={styles.desc}>{data.description}</div>
            </div>
          </div>
        </a>

        <button
          disabled={data?.likeBool}
          className={styles.likeBtn}
          onClick={likeClick}
        >
          {data?.likeBool ? (
            <img src={likeTwo} className={styles.likeImage} />
          ) : (
            <img src={likeOne} className={styles.likeImage} />
          )}
        </button>
      </div>
    </>
  );
};
export default ExploreCard;
