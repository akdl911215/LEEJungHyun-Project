import { Client } from "webapp/api/Client";
import { backUrl } from "webapp/config/Config";

// 페이지 리스트 데이터 호출
export const UserPagenationListDataAPI = (page) => {
  console.log("UserPagenationListDataAPI page : ", page);

  const str =
    "page=" +
    (page.page ? page.page : 1) +
    "&type=" +
    (page.type ? page.type : "") +
    "&keyword=" +
    (page.keyword ? page.keyword : "");

  const userUrl = backUrl + "/users/list?" + str;
  console.log("userUrl : ", userUrl);
  return Client.get(userUrl);
};
