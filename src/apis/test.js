import request from "@/utils/http";
export const getNewsListAPI = () => {
  return request({
    url: "/api/news/getNewsList",
    method: "GET",
  });
};

// export function getNewsListAPI() {
//   return request({
//     url: "/api/news/getNewsList",
//   });
// }
