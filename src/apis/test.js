import request from "@/utils/http";
export const getNewsListAPI = () => {
  return request({
    url: "/api/news/getNewsList",
    method: "GET",
  });
};

