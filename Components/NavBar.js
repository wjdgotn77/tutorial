import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  // path관련 정보를 얻을 수 있따.
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}

// Link 태그 내에는 style, className 등의 속성을 지정할 수 없다
// Link 로 감싸고 내부에 a 태그를 사용해준다.

// css module 을 import 한다.
// className = nav 로 준다고 해서 해당 모듈 내의 .nav 스타일이 적용되지 않는다.
// className 에 해당 module의 styles.nav 이런식으로 props 상속받듯이 적어주어야 한다.
// 자바스크립트의 오브젝트에서 프로퍼티 형식으로 적는것처럼!
{
  /* <nav>
<Link href="/">
  <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
</Link>
<Link href="/about">
  <a className={router.pathname === '/about' ? styles.active : ''}>
    About
  </a>
</Link>
</nav> */
}

// 두가지의 className을 함께 쓰려면
// 1. {`${첫번째} ${두번째}`}
// 2. {[첫번째, 두번째].join(" ")}

// styled jsx => Next 고유의 방식

// 퍼블릭 폴더 내에서 그냥 이미지 꺼내다 쓰면 된다.
