import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getHeritages,
  getRestaurants,
  getCampsites,
  getFestivals,
  getMountains,
} from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import * as S from "../styles/style.detail";

function Detail() {
  const [dataToShow, setDataToShow] = useState([]);
  const navigate = useNavigate();

  const params = useParams();

  const { id } = params;

  const {
    isLoading: isLoadingRestaurants,
    isError: isErrorRestaurants,
    data: dataRestaurants,
  } = useQuery("restaurants", getRestaurants);

  const {
    isLoading: isLoadingHeritages,
    isError: isErrorHeritages,
    data: dataHeritages,
  } = useQuery("heritages", getHeritages);
  const {
    isLoading: isLoadingCampsites,
    isError: isErrorCampsites,
    data: dataCampsites,
  } = useQuery("campsites", getCampsites);

  const {
    isLoading: isLoadingFestivals,
    isError: isErrorFestivals,
    data: dataFestivals,
  } = useQuery("festivals", getFestivals);

  const {
    isLoading: isLoadingMountains,
    isError: isErrorMountains,
    data: dataMountains,
  } = useQuery("mountains", getMountains);

  useEffect(() => {
    if (id.includes("festival")) {
      setDataToShow(dataFestivals);
    } else if (id.includes("campsite")) {
      setDataToShow(dataCampsites);
    } else if (id.includes("heritage")) {
      setDataToShow(dataHeritages);
    } else if (id.includes("restaurant")) {
      setDataToShow(dataRestaurants);
    } else if (id.includes("mountain")) {
      setDataToShow(dataMountains);
    }
  }, [
    id,
    dataCampsites,
    dataFestivals,
    dataHeritages,
    dataRestaurants,
    dataMountains,
  ]);

  if (
    isLoadingRestaurants ||
    isLoadingHeritages ||
    isLoadingCampsites ||
    isLoadingFestivals ||
    isLoadingMountains
  ) {
    return <h1>로딩중...</h1>;
  }

  if (
    isErrorRestaurants ||
    isErrorHeritages ||
    isErrorCampsites ||
    isErrorFestivals ||
    isErrorMountains
  ) {
    return <h1>로딩 중 오류가 발생하였습니다.</h1>;
  }

  return (
    <S.Container>
      <S.DetailContainer>
        <S.BackBtn
          onClick={() => {
            navigate(-1); // 이전 페이지로 이동 (-1은 뒤로가기)
          }}
        >
          뒤로가기
        </S.BackBtn>
        {dataToShow
          ?.filter((dataItem) => dataItem.id === id)
          .map((dataItem) => {
            return (
              <ul key={dataItem.id}>
                <S.DetailTitle>{dataItem.title}</S.DetailTitle>
                <S.Line />
                <img src={dataItem.img} style={{ width: "800px" }} />
                <S.Line />
                <S.DetailDescription>
                  {dataItem.description}
                </S.DetailDescription>
                <S.Line />
                <KakaoMap address={dataItem.address} />
                <S.DetailAddress>주소 : {dataItem.address}</S.DetailAddress>
                <S.DetailAddress>
                  {dataItem.call ? "연락처 :" : null} {dataItem.call}
                </S.DetailAddress>
                <S.DetailHompage>
                  <S.DetailLink href={dataItem.website}>
                    {dataItem.website ? "홈페이지" : null}
                  </S.DetailLink>
                </S.DetailHompage>
              </ul>
            );
          })}
      </S.DetailContainer>
    </S.Container>
  );
}

export default Detail;
