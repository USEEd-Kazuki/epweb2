import type { NextPage } from 'next';
import Head from 'next/head';
import Top from '../components/top';

const Home: NextPage = () => {
  return (
        <div  className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:-h[140vh]'>
    <Head>
        <title>EPknoT</title>
        <meta name="google-site-verification" content="Q1UDjEDkSeXTnZzh03RCNeoR1NuFTxCL8oJzqocorNI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta content="船舶売買仲介会社である株式会社EPknoTのコーポレートサイトです" name="description" />
        <meta name="keywords" content="EPknoT,エプノット,船舶,ブローカー,シップブローカー,船舶仲介,ship, broker, consulting, japan, finance, タンカー" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Top />
        <div className='home-main-container'>
          <div >
            <h1 className='homeTitle'>We value each and every work.</h1>
            <h1 className='home-main-title'>Transformationを繰り返し新しい可能性を探し続けます。</h1>
            <h1 className='home-main-content1'>目まぐるしく形を変え続ける世界の中で、</h1>
            <h1 className='home-main-content2'>昨日までの方程式は、今日には適しないものとなってしまいます。</h1>
            <h1 className='home-main-content3'>しかし、変革を進化と捉えれば、そこにはまだ見ぬビジネスの可能性が眠っていると考えます。</h1>
            <h1 className='home-main-content4'>お客様目線を徹底的に追求したサポートに加え</h1>
            <h1 className='home-main-content5'>マーケットの状況やその時のニーズを正確に捉え、</h1>
            <h1 className='home-main-content6'>独自開発のシッピングモデルを組み合わせることで、</h1>
            <h1 className='home-main-content7'>洗練された案件を組成し、高いサービスを提供致します。</h1>
            <h1 className='home-main-content8'>EPknoTは、世界中に散らばるビジネスチャンスを見つけ出し、</h1>
            <h1 className='home-main-content9'>高品質なサービスを提供することで、世界そしてお客様へ貢献します。</h1>
          <small className="website-rights">
        Copyright © EPknoT Co., Ltd. all rights reserved.
      </small>
          </div>
        </div>
    </div>
  )
}

export default Home;
