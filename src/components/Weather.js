import { styled } from "styled-components";

const Layout = styled.div``;
const Location = styled.div``;
const Temp = styled.div``;
const Desc = styled.div``;
const ConWrap = styled.div``;
const Con = styled.div``;

export const Weather = ({ data }) => {
  const {
    name,
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = data;

  return (
    <Layout>
      <Location>{name}</Location>
      <Temp>{temp}º</Temp>
      <Desc>{weather[0].description}</Desc>
      <ConWrap>
        <Con>
          <p>체감온도</p>
          <p>{feels_like}º</p>
        </Con>
        <Con>
          <p>최고온도</p>
          <p>{temp_max}º</p>
        </Con>
        <Con>
          <p>최저온도</p>
          <p>{temp_min}º</p>
        </Con>
      </ConWrap>
    </Layout>
  );
};
