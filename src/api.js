import axios from "axios";

const instacnce = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "6f519bd47eff56b36536a05bb4c15a38",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ QueryKey }) => {
  const [weather, lat, lon] = QueryKey;
  return instacnce
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

// *axios
//  - npm i axios
//  - 프론트에서 필요한 데이터를 서버에 요청하는데 url에 필요한 변수값 등을 설정

// *then()
//  - 이 요청이 끝나고 난 뒤
