import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  // path관련 정보를 얻을 수 있따.
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          About
        </a>
      </Link>
    </nav>
  );
}

// Link 태그 내에는 style, className 등의 속성을 지정할 수 없다
// Link 로 감싸고 내부에 a 태그를 사용해준다.
