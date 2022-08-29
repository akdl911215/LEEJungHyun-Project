import styles from "../../style/SearchListCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import { ProcessViewCount } from "../../util";

const SearchListCard = ({ data }) => {
  console.log("SearchListCard data : ", data);
  const videoUrl = `https://www.youtube.com/watch?v=${data.id}`;

  const videoRegister = (video = {}) => {
    if (video === {}) {
      video = {
        url: "",
        title: "영상이 정상적으로 선택되지 않았습니다.",
      };
    }

    const upload = window.confirm(
      `[${video.title}] 영상을 홈페이지에 업로드 하시겠습니까?`
    );

    if (upload) {
      const state = {
        url: video.url,
        title: video.title,
        username: sessionStorage.getItem("username"),
      };

      // 백으로 레지스터 하기
    }
  };

  return (
    <>
      <div className={styles.continer}>
        <a href={videoUrl}>
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
                <div className={styles.view}>
                  {ProcessViewCount(data.viewCount)}
                </div>
                {/* <div className={styles.time}>{moment(data.date).fromNow()}</div> */}
              </div>
              <div className={styles.desc}>{data.description}</div>
            </div>
          </div>
        </a>
        <button
          onClick={() =>
            videoRegister({
              url: videoUrl,
              title: data.title,
            })
          }
        >
          영상 업로드
        </button>
      </div>
    </>
  );
};
export default SearchListCard;
