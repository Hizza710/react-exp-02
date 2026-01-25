import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/News";
import CalendarItem from "./components/CalendarItem";
import ChartBar from "./components/ChartBar";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Chart from "./pages/chart";
import Customer from "./pages/customer";
import NotFound from "./pages/notfound";
import Orders from "./pages/orders";



function App() {
  // inputが２個あるので、入力したものを保持するためにuseStateが２ついります🤗
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");
  const [morita, setMorita] = useState(false);
  // 今かやること、useStateを追加します！これはapiのデータを受け取るためです🤗絶対にいります！！
  const [data, setData] = useState([]);

  // イベント処理=クリックしたらXXXする,マウスを動かしたらXXXする、マウスが離れたらxxxx,.....
  const handleNameChange = (e) => {
    // 処理を書きます🤗
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // 処理を書きます🤗
    setEmail(e.target.value);
  };

  useEffect(() => {
    // この中に書きます🤗
    console.log("起動しました！！！！！！");

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        console.log(response, "response");
        //ここでjsの形に変換するjson()を行なっています🤗
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      } catch (error) { }

      // おまじないの処理の終わり、下は消さない
    };

    // fetchDataを以下で動かします🤗
    fetchData();

    // スプレッドシートAPIを記述を書いて、データを読み込む→読み込みができたら画面に表示する
    // この下は消さない
  }, []);

  // useEffectの前に追加でコンソールログを以下に書きます↓
  console.log("順番の確認🤗");

  return (
    <>
      {/* デバッグ用: JSONPlaceholder の全件表示を一時的に非表示にします
      <h1>データを表示する方法</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}
      */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>

      <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/*  */}
    </>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>💫リアクト中級編、よろしくお願いします💫</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//            <a href="https://react-exp-02-ri5uf0uyn-hizza710s-projects.vercel.app">　</a> 
//         </p>
//       </div>
//       <p className="read-the-docs">
//         アーカイブのおかげで、やっと初級編の理解が進みました。追いつけるか不安ですが、よろしくお願いいたします！
//       </p>
//     </>
//   )
// }

// export default App
