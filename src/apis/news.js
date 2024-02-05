import request from "@/utils/http";
export const getHomeConsultRightInfoAPI = () => {
  return request({
    url: "/api/homeConsultRight/getHomeConsultRightInfo",
    method: "GET",
  });
};

