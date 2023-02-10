import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import LifeCycle from "./LifeCycle";

// https://jsonplaceholder.typicode.com/comments

// const dummyList = [
//   {
//     id :1,
//     author : "강지수",
//     content : "하이1",
//     emotion : 5,
//     create_date : new Date().getTime()
//   },
//   {
//     id :2,
//     author : "홍길동",
//     content : "하이2",
//     emotion : 4,
//     create_date : new Date().getTime()
//   },
//   {
//     id :3,
//     author : "아무게",
//     content : "하이3",
//     emotion : 3,
//     create_date : new Date().getTime()
//   },

// ]

function App() {
  const [data, setData] = useState([]);

  const datatId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date : new Date().getTime(),
        id : datatId.current++
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: datatId.current,
    };

    datatId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      {/* <LifeCycle/> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
