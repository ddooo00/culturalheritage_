import React, { useState } from "react";

function TestQnA() {
  const [page, setPage] = useState(0);

  //유형 테스트 QnA
  //TODO:db.json으로 넘겨서 관리할 수 있는지 해보기
  const questionList = [
    {
      q: ["친구 생일 파티에 잘생긴 사람을 봤다."],
      a: [
        { type: "C", text: "먼저 다가가 말을 건다." },
        { type: "B", text: "어깨동무를 하며 친한 척을 한다." },
        { type: "D,E", text: "그냥 맛있는 거 먹으면서 사진이나 찍는다." },
        { type: "A", text: "춤을 추면서 다가가서 인사한다." },
      ],
    },
    {
      q: ["산에 올라갔는데 산삼을 찾았다!"],
      a: [
        { type: "B", text: "바로 땅 파서 심 봤다!를 외친다." },
        { type: "C,D", text: "조심히 챙겨서 비싸게 판다." },
        { type: "E", text: "우와~대박이야 하며 사진을 찍어 SNS에 자랑한다." },
        { type: "A", text: "집 가서 잔치를 벌인다." },
      ],
    },
    {
      q: ["길을 가다가 곰인형을 발견했다. 곰인형을 앞에서 보면?"],
      a: [
        { type: "A", text: "윙크를 하고 있다." },
        { type: "B", text: "공과 배트를 가지고 있다." },
        { type: "D,E", text: "책과 벌꿀통을 들고있다." },
        { type: "C", text: "아무것도 들고 있지 않다." },
      ],
    },
    {
      q: ["씨앗을 심으려고 한다. 어떤 씨앗을 심을 것인가?"],
      a: [
        { type: "A,E", text: "빛나는 황금빛 씨앗" },
        { type: "D", text: "엄청나게 커다란 씨앗" },
        { type: "B", text: "돌만큼 단단한 씨앗" },
        { type: "C", text: "내가 잘 알고 있는 씨앗" },
      ],
    },
    {
      q: [
        "길을 건너려고 하는데 건너편에서 무언가가 나를 향해 달려오고 있다. 달려오고 있는 것은 무엇일까?",
      ],
      a: [
        { type: "B", text: "자전거" },
        { type: "A,D", text: "전애인" },
        { type: "E", text: "얼룩말" },
        { type: "C", text: "경찰" },
      ],
    },
    {
      q: ["놀이공원 폐장 30분 전이다. 이때 나는?"],
      a: [
        { type: "D", text: "아까 못먹은 츄러스가 생각이 나 줄을 서 사먹는다." },
        {
          type: "A,B",
          text: "마지막으로 아까 제일 재밌었던 놀이기구를 한 번 더 타러 간다.",
        },
        {
          type: "E",
          text: "아직 인생샷을 건지지 못한 걸 깨닫고 사진을 더 찍는다.",
        },
        { type: "C", text: "이제 놀만큼 놀았으니까 놀이공원을 나간다." },
      ],
    },
    {
      q: [
        "친구와 같이 시험공부를 하기로 했는데 지각한 당신. 친구는 단단히 화가 난 상태다. 어떻게 친구의 화를 풀어주지?",
      ],
      a: [
        {
          type: "D,E",
          text: "맛있는 거 먹으면 금방 풀리지! 공부하기 전, 인스타 맛집으로 데려간다.",
        },
        {
          type: "C",
          text: "그래도 공부는 해야지! 친구가 원하던 족보를 넘겨주고 같이하자!",
        },
        { type: "A", text: "지각했는데 공부는 무슨! 술이나 마시러가자." },
        { type: "B", text: "난 줄게없다. 친구 집 앞까지 찾아가서 싹싹 빈다." },
      ],
    },
    {
      q: [
        "친구와 같이 시험공부를 하기로 했는데 지각한 당신. 친구는 단단히 화가 난 상태다. 어떻게 친구의 화를 풀어주지?",
      ],
      a: [
        {
          type: "D,E",
          text: "맛있는 거 먹으면 금방 풀리지! 공부하기 전, 인스타 맛집으로 데려간다.",
        },
        {
          type: "C",
          text: "그래도 공부는 해야지! 친구가 원하던 족보를 넘겨주고 같이하자!",
        },
        { type: "A", text: "지각했는데 공부는 무슨! 술이나 마시러가자." },
        { type: "B", text: "난 줄게없다. 친구 집 앞까지 찾아가서 싹싹 빈다." },
      ],
    },
    {
      q: ["5분뒤에 시내 한복판에 핵폭탄이 떨어진다고 한다. 당신의 행동은?"],
      a: [
        {
          type: "A",
          text: "어차피 죽을거 가족, 지인과 작별인사를 하고 멋지게 죽는다.",
        },
        {
          type: "D",
          text: "먹고 죽은 귀신이 때깔도 곱다. 뭐라도 하나 더 먹자",
        },
        {
          type: "B,C",
          text: "최대한 힘을 다해 도망가자. 지하로 도망가면 살수도 있다.",
        },
        { type: "E", text: "마지막으로 기도해야지." },
      ],
    },
    {
      q: ["갑자기 요정이 나타나서 원하는 것을 들어준다고 한다."],
      a: [
        {
          type: "B,C",
          text: "공주 바디는 100만불짜리 바디!",
        },
        {
          type: "A",
          text: "도심과 10분 떨어진 '100평 궁전(자가)",
        },
        {
          type: "D",
          text: "파워 블로거는 나의 꿈",
        },
        { type: "E", text: "비오는 날이 제일 좋아 나는야 비의 공주~" },
      ],
    },
    {
      q: ["마녀가 나타나서 사과대신 이것을 주었다. 이것이 뭘까?"],
      a: [
        {
          type: "B",
          text: "비타민",
        },
        {
          type: "A",
          text: "100만 구독자",
        },
        {
          type: "C,E",
          text: "주먹도끼",
        },
        { type: "D", text: "쿠폰" },
      ],
    },
    {
      q: ["테스트가 끝났습니다! 결과를 보러 갈까요?"],
      a: [{ type: "", text: "결과 보러 가기▶▶" }],
    },
  ];
  // console.log("💛💛💛", questionList);

  //유형 리스트 관리
  const [gongjuList, setGongjuList] = useState([
    { name: "A", count: 0 },
    { name: "B", count: 0 },
    { name: "C", count: 0 },
    { name: "D", count: 0 },
    { name: "E", count: 0 },
  ]);

  const handleAnswerCount = (typeStr, idx) => {
    console.log("typeStr>>>", typeStr);
    const types = typeStr.split(",");

    // type이 여러 개인 경우 콤마(,)로 구분된 배열로 분리

    let ls = gongjuList.map((item) => ({ ...item }));
    types.forEach((type) => {
      const gongjuItem = ls.find((item) => item.name === type);
      if (gongjuItem) {
        gongjuItem.count += 1;
      }
    });

    setGongjuList(ls);
    setPage(page + 1);

    if (idx + 1 === questionList.length) {
      console.log("결과보기");
    }
  };

  return (
    <>
      {page === 0 ? (
        <div>
          <div onClick={() => setPage(1)}>테스트 시작하기</div>
        </div>
      ) : page <= questionList.length ? (
        <div>
          <div>
            <div>나는 어떤 공주일까?</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>

          {questionList.map((val, idx) => (
            <div
              key={idx}
              style={{ display: page === idx + 1 ? "flex" : "none" }}
            >
              {console.log(gongjuList)}
              {/* 질문 */}
              <div>
                {val.q.map((qval, qidx) => (
                  <div key={qidx}>{qval}</div>
                ))}
              </div>
              <div>
                {/* 선택지 */}
                <div>
                  {val.a.map((aval, aidx) => (
                    <div
                      key={aidx}
                      onClick={() => handleAnswerCount(aval.type, aidx)}
                    >
                      {aval.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>결과페이지</div>
      )}
    </>
  );
}

export default TestQnA;
