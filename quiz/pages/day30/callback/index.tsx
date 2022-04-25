import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function QuizCallbackPage() {
  const [state, setState] = useState([]);

  const onClickCallback = () => {
    const xml = new XMLHttpRequest();
    xml.open("get", "http://numbersapi.com/random?min=1&max=200");

    xml.send();

    xml.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];
      console.log("num", num);
      const xml2 = new XMLHttpRequest();
      xml2.open("get", `http://koreanjson.com/posts/${num}`);

      xml2.send();

      xml2.addEventListener("load", (res) => {
        const user = JSON.parse(res.target.response);
        const userId = user.UserId;
        // console.log("아이디", userId);
        const xml3 = new XMLHttpRequest();

        xml3.open("get", `http://koreanjson.com/posts?userId=${userId}`);

        xml3.send();

        xml3.addEventListener("load", (res) => {
          // console.log("res", res.target.response);
          // setState(res);
          const result = JSON.parse(res.target.response);
          console.log(result);
          setState(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    console.log("프로미스 시작");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        // console.log(userId);
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setState(res.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const getNumber = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    // console.log("번호불러오기", getNumber);
    const num = getNumber.data.split(" ")[0];
    // console.log("번호", num);

    const getPost = await axios.get(`http://koreanjson.com/posts/${num}`);
    // console.log("포스트불러오기", getPost);
    const userId = getPost.data.UserId;
    // console.log("유저아이디불러오기", userId);
    const getUserId = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    // console.log("유저의 글", getUserId);
    const list = getUserId.data;
    // console.log("json", list);
    setState(list);
  };

  return (
    <div>
      결과: <button onClick={onClickCallback}>Callback</button>
      결과: <button onClick={onClickPromise}>Promise</button>
      결과: <button onClick={onClickAsyncAwait}>Async/Await</button>
      <div>
        {state &&
          state.map((el: any) => (
            <div key={el.id}>
              <div>{el.title}</div>
              <hr></hr>
              <div>{el.content}</div>
              <hr></hr>
            </div>
          ))}
      </div>
    </div>
  );
}
