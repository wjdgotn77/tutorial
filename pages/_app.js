import NavBar from '../Components/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

// 일종의 청사진.
// Next JS가 렌더링 할 수 있도록 하는 가장 먼저 렌더링 되는 페이지.
// component 와 pageProps 는 프레임워크에서 꼭 지정해주는 해당 값을 받게끔 되어있는 것.
// 우리가 만든 페이지들을 Component로 받는다.
