import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import { useEffect } from "react";

function App() {
  return (
    <>
      {/*  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

useEffect(() => {
  console.log("起動しました！！！！！");


// データを保存するためのuseStateの定義
const [data, setData] = React.useState([]);

// データを取得する非同期関数の定義 
const fetchData = async () => {
      try {
        const response = await fetch("xxxx");
        console.log(response, "response");
        //ここでjsの形に変換するjson()を行なっています🤗
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      } catch (error) {}

      // おまじないの処理の終わり、下は消さない
    };

      // 画面表示と同時にデータを取得するため、fetchData関数を実行する
  fetchData();
}, []);


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
