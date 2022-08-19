import React from 'react';
import Hero from '../components/hero';

{/* 
import Image from 'next/image';
*/}


const about = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:-h[140vh]'>
      <Hero heading='ABOUT US'/>
      <div className="about-content">
        <div className="about-title-section">
          <h1 className="about-title">ABOUT US</h1>
          <hr className="about-line" />
          <div className="about-title-content">
          EPknoTは、ブローカー事業を主軸とした関連事業を通して、お客様に寄り添ったサービス提供によりビジネスの成長を実現するとともに、世界の物流を担い人々の生活を支える海運業界での船舶需給を結びつけることで、その発展に寄与することを目的に設立しました。情報化やデジタル化が進む昨今、社会は以前よりも無機質に感じられるようになってきました。そんな社会だからこそ、私たちはお客様と寄り添い、案件全体を通して苦楽を共にするという仕事の仕方を大切にしています。お客様と同じ方向を向き、一緒に伴走することで、お客様のビジネスの拡大に貢献していきます。そして、ブローカー業を通して、船主や造船所、傭船者やファイナンサーを単に結びつけるだけでなく、それぞれのニーズや強み、利益を最大化できるベストな組み合わせの案件を行うことで、海運業界のさらなる発展に貢献します。
          </div>
        </div>
        <div className="about-title-section">
          <h1 className="about-title">COMPANY</h1>
          <hr className="about-line" />
          <div className="about-title-content">
          EPknoTは、商業船舶の新造船及び中古船における売買や傭船の仲介、セールスアンドリースバックなどのファイナンス案件組成、船舶融資におけるファイナンスアレンジメントなど船舶に関する様々なサービスを提供するブローカーハウスです。また、マーケットレポートや傭船者レポート作成及び提供なども積極的に行っています。
          </div>
        </div>

      {/* 
        <div className="about-photo-section">
        <div className="imgsub-about1">
            <Image src={"/office1.jpg"} alt="image01" className="imgsub-about1" width={300} height={300}/>
        </div>

        <div className="imgsub-about2">
            <Image src={"/office2.jpg"} alt="image03" className="imgsub-about2"  width={300} height={300}/>
        </div>
        </div>
      */}
  

        <div className="about-profile-section">
          <h2 className="about-profile-title">PROFILE</h2>
          <hr className="about-line" />

          <table className="table01">
            <tbody>
            <tr>
              <th className='about-th'>Company Name</th>
              <td className='about-td'>株式会社EPknoT (EPknoT Co., Ltd.)</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='about-th'>Founded</th>
              <td className='about-td'>2020年 11月 18日</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='about-th'>E-mail</th>
              <td className='about-td'>office@epknot.com</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='about-th'>CEO</th>
              <td className='about-td'>山本 尚季 (Yamamoto Naoki)</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='about-th'>Office</th>
              <td className='about-td'>〒 104-0061 東京都中央区銀座5丁目14番3号 銀座５丁目ビル</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th className='about-th'>Fields of Activities</th>
              <td className='about-td'>船舶売買に関する仲介業及び、これに関するコンサルティング、リサーチ業</td>
            </tr>
            </tbody>
          </table>
        <small className="website-rights1">
        Copyright © EPknoT Co., Ltd. all rights reserved.
      </small>
        </div>
      </div>
    </div>
  )
}

export default about;