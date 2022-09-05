import Layout from "../component/Layout";
import ContentsLayout from "../component/ContentsLayout";
import ExploreCard from "../component/explore/ExploreCard";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "webapp/common/component/GoHomeButton";
import { useEffect, useState } from "react";
import {
  YoutubeListDataAPI,
  YoutubeUploadListDataAPI,
} from "webapp/api/youubeApi";
import styles from "../style/Explore.module.css";
import SearchBar from "./searchBar/SearchBar";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeSearchList } from "webapp/reducers/youtube.reducer";

const Explore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.setItem("currentPage", "Explore");

    YoutubeListDataAPI()
      .then((res) => dispatch(YoutubeSearchList(res?.data?.list)))
      .catch((err) => console.error("full list api error : ", err));
  }, []);

  const { searchList } = useSelector(({ YoutubeReducer }) => ({
    searchList: YoutubeReducer?.YoutubeSearchListInitial,
  }));

  return (
    <>
      <div>
        <SearchBar />
      </div>

      <div className={styles.contentsDiv}>
        <Menu />
        <ContentsLayout>
          {searchList?.map((data, index) => {
            return <ExploreCard key={`explore-card-${index}`} data={data} />;
          })}
        </ContentsLayout>
      </div>
    </>
  );
};
export default Explore;
