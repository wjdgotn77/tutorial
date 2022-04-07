import Seo from '../Components/seo';

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active"> 헬로</h1>
    </div>
  );
}

// 파일명으로 라우팅처리
// import react 할 필요 없다.
// useEffect, useState 같은 훅은 import 해야 함.
// csr vs ssr
// HTML 소스 코드에 one <div>가 들어있고 <script> 가 실행되면서 화면이 보여짐.
// 브라우저가 자바스크립트를 가지고 와서 빌드하는 것.

// hydration
