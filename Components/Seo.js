import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

// Meta 등등 더 추가해서 사용 가능
