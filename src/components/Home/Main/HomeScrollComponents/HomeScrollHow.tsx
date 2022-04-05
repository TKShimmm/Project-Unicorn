import React from "react";
import styled from "styled-components";
import ImgScrollLine from "../../../../assets/images/Img-Scroll-Line.svg";
import ImgScroll_1 from "../../../../assets/images/Img-Scroll-1.svg";
import ImgScroll_2 from "../../../../assets/images/Img-Scroll-2.svg";
import ImgScroll_3 from "../../../../assets/images/Img-Scroll-3.svg";
import IconScroll_1 from "../../../../assets/icons/Icon-Scroll-1.svg";
import IconScroll_2 from "../../../../assets/icons/Icon-Scroll-2.svg";
import IconScroll_3 from "../../../../assets/icons/Icon-Scroll-3.svg";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  /* background-color: #07145a; */
`;

const Inner = styled.div`
  width: 1440px;
  height: 2464px;
  margin: 0 auto;
  background-color: #07145a;
`;

const Header = styled.div`
  padding-top: 50px;
  margin: 0 130px;
`;

const SpanTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  color: #e5e5e5;
`;
const SpanInfo = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 55px;
  color: #4a73f3;
`;

const UnicornBtn = styled.div`
  left: 140px;
  background: #4a73f3;
  color: #fff;
  width: 360px;
  top: 281px;
  display: block;
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  font-size: 20px;
  font-weight: 700;
  top: 152px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 1440px;
  margin: 0 auto;
  position: relative;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 125px;
  position: absolute;
  z-index: 1;
`;
const SpanContainer = styled.div`
  margin-left: 20px;
`;
const HowSpanTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29.6px;
  color: #fff;
`;
const HowSpanText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  color: #fff;
`;

const Img = styled.div`
  width: 720px;
  height: 618.98px;
  position: absolute;
  left: 595px;
  overflow: hidden;
  top: -384px;
  `;

const ImgScroll1 = styled.img`
  background-image: url(${ImgScroll_1});
  background-repeat: no-repeat;
  width: 1110px;
  height: 618.98px;
  border: none;
`;
const ImgScroll2 = styled.img`
  background-image: url(${ImgScroll_2});
  background-repeat: no-repeat;
  width: 1110px;
  height: 618.98px;
  border: none;
`;
const ImgScroll3 = styled.img`
  background-image: url(${ImgScroll_3});
  background-repeat: no-repeat;
  width: 1110px;
  height: 618.98px;
  border: none;
`;

const Bar = styled.div`
  height: 1800px;
  width: 2px;
  background-color: #f5f5f5;
  position: absolute;
  top: 500px;
  left: 170px;
`;

function HomeScrollHow() {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");

  const goToLtv = () => {
    authToken ? navigate("/term-agree") : navigate("/login");
  };
  return (
    <>
      <Base>
        <Inner>
          <Header>
            <SpanTitle>어떻게 사용하나요?</SpanTitle>
            <SpanInfo>
              CSV 파일 업로드 및 간단한 정보입력으로 인사이트를 얻어보세요!
            </SpanInfo>
            <UnicornBtn
              onClick={() => {
                // eslint-disable-next-line no-lone-blocks
                {
                  authToken ? navigate("/term-agree") : navigate("/login");
                }
              }}
            >
              유니콘 판별기 사용하기
            </UnicornBtn>
          </Header>
          <Main>
            <InfoContainer style={{top: "444px"}}>
              <Img>
                <ImgScroll1 />
              </Img>
              <img src={IconScroll_1} alt="" />
              <SpanContainer>
                <HowSpanTitle>CSV 파일 업로드</HowSpanTitle>
                <HowSpanText>
                  {" "}
                  사용자 데이터를 담은 CSV 파일을 업로드 해주세요.{" "}
                </HowSpanText>
              </SpanContainer>
            </InfoContainer>
            <InfoContainer style={{ top: "1219px"}}>
              <Img>
                <ImgScroll2 />
              </Img>
              <img src={IconScroll_2} alt="" />
              <SpanContainer>
                <HowSpanTitle>기본 정보 입력</HowSpanTitle>
                <HowSpanText>서비스 명, URL등 정보를 입력해주세요.</HowSpanText>
              </SpanContainer>
            </InfoContainer>
            <InfoContainer style={{top: "2024px"}}>
              <Img>
                <ImgScroll3 />
              </Img>
              <img src={IconScroll_3} alt="" />
              <SpanContainer>
                <HowSpanTitle>LTV 결과 확인</HowSpanTitle>
                <HowSpanText>
                  {" "}
                  결과를 확인하고, 성장의 발판으로 삼아보세요.{" "}
                </HowSpanText>
              </SpanContainer>
            </InfoContainer>
            <Bar />
          </Main>
        </Inner>
      </Base>
    </>
  );
}

export default HomeScrollHow;
