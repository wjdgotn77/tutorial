import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  // path관련 정보를 얻을 수 있따.
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
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
