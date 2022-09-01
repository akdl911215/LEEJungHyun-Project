import { client } from "./Client";
import { backUrl } from "webapp/config/Config";

export const YoutubeSearchListDataAPI = (search) =>
  client.post(backUrl + "/youtube/searchList", search);

export const YoutubeUploadDataAPI = (video) =>
  client.post(backUrl + "/youtube/upload", video);

export const YoutubeListDataAPI = (page) =>
  client.post(backUrl + "/youtube/list", { viewPage: page });
