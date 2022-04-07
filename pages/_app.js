import Layout from '../Components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Custom app component => 일종의 청사진.
// Next JS가 렌더링 할 수 있도록 하는 가장 먼저 렌더링 되는 페이지.
// component 와 pageProps 는 프레임워크에서 꼭 지정해주는 해당 값을 받게끔 되어있는 것.
// 우리가 만든 페이지들을 Component로 받는다.

// global css의 경우 각 페이지내에서 css를 import 해서 쓰는것은 안되지만,
// _app.js 에서는 가능하다. 스타일드 컴포넌트를 사용하는 것과 style jsx는 상당히 비슷한 것 같다.

// hydration
// 처음에 사전 생성한 HTML을 받아오고 script가 다운로드 완료되면,
// react가 주도권을 가지고 와서 원래의 리액트처럼 동작하게 된다.
