import React from 'react';
import Hero from '../components/hero';
import Image from 'next/image';

const Work = () => {
  return (
    <div  className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:-h[140vh]'>
      <Hero heading='WORK'/>
      <div className="work-content">
                <h1 className="work-title0">About Our Work</h1>
                <hr className="work-title-line" />
                <div className="work-title-content">
                弊社は、第一に迅速なマーケット情報収集に注力しております。それにより海外の顧客ニーズと国内の顧客ニーズをタイムリーに把握し、両者の求める案件組成を行っております。
                </div>
          </div>

        <div className="workmain-container">

            <div className="block-1">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">SOURCING</h1>
                        <h1 className="work-number">01</h1>
                    </div>
                    <h2 className="work-subtitle">
                    最高の１件を、お客様とご一緒に組成します。
                    </h2>
                    <p className="work-main-content">
                    新造船・中古船におけるセールアンドリースバック等の案件打診を海外から受けます。 海外との幅広いネットワークにより、様々な情報・案件を提供することが出来ます。
                    </p>
                </div>
                <div className="svgsub-section-1">
                <Image src={"/01.svg"} alt="phot" className="svgsub-section-1" width={600} height={600} />
                </div>
            </div>

            <div className="rever-block-2">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">NEGOTIATION</h1>
                        <h1 className="work-number">02</h1>
                    </div>
                    <h2 className="work-subtitle">
                    お客様のご要望を捉えて、海外と交渉を行います。
                    </h2>
                    <p className="work-main-content">
                    国内船主・金融機関のニーズに合わせて、案件紹介初期の段階で海外のカウンターパーティとの条件交渉を行います。税務・財務に精通したメンバーにより、投資・税務・融資の幅広い面から国内ニーズにマッチするように、海外のカウンターパーティと交渉をすることが可能です。また顧客のニーズにあうように一件一件丁寧に交渉を行っていきます。 
                     </p>
                </div>
                <div className="svgsub-section-2">
                    <Image src={"/02.svg"} alt="section02" className="svgsub-section-2" width={600} height={600}/>
                </div>
            </div>

            <div className="block-3">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">FINANCE ARRANGEMENT</h1>
                        <h1 className="work-number">03</h1>
                    </div>
                    <h2 className="work-subtitle">
                    ファイナンスに精通したメンバーが、お客様のサポートを行います。
                    </h2>
                    <p className="work-main-content">
                    案件紹介とあわせて、融資可能な金融機関のアレンジのお手伝いを致します。船舶融資に精通している金融機関との連携により、その金融機関の融資条件等（特徴）を把握することで、その案件にあった金融機関の紹介が可能となります。
                     </p>
                </div>
                <div className="svgsub-section-3">
                <Image src={"/03.svg"} alt="section03" className="svgsub-section-3" width={600} height={600}/>
                </div>
            </div>

            <div className="rever-block-4">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">DOCUMENTATION</h1>
                        <h1 className="work-number">04</h1>
                    </div>
                    <h2 className="work-subtitle">
                    お客様に代わり丁寧でスピーディーな契約書作成を行います。
                    </h2>
                    <p className="work-main-content">
                    売買契約・傭船契約を案件毎に合わせてご準備致します。量も多く、英語である売買契約書・傭船契約書の熟読は大変時間を要する作業であるため、主要条件と照らし合わせて解説書等を作成し、要点の説明を行っております。   
                     </p>
                </div>
                    <div className="svgsub-section-4">
                    <Image src={"/04.svg"} alt="section04" className="svgsub-section-4" width={600} height={600}/>
                    </div>
             </div>

            <div className="block-5">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">PROJECT MANAGEMENT</h1>
                        <h1 className="work-number">05</h1>
                    </div>
                    <h2 className="work-subtitle">
                    関係各所と柔軟に連携を行い、円滑な案件管理を行います。
                    </h2>
                    <p className="work-main-content">
                    融資承認後、クロージングまでに必要となる作業（登記手続き・セキュリティドキュメント作成）において倉庫会社・海事弁護士と連携して円滑にクロージングまで進めて行きます。当事者と連携して案件の全体管理を行うことで、弊社でも進捗状況を把握し、クロージング期日に間に合うように調整して案件管理を行っております。
                    </p>
                </div>
                <div className="svgsub-section-5">
                <Image src={"/05.svg"} alt="section5" className="svgsub-section-5" width={600} height={600}/>
                </div>
            </div>

            <div className="rever-block-6">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">POST-CLOSING MANAGEMENT</h1>
                        <h1 className="work-number">06</h1>
                    </div>
                    <h2 className="work-subtitle">
                    一隻一隻、丁寧に管理をし、お客様のご要望へお応えします。
                    </h2>
                    <p className="work-main-content">
                    傭船者の与信管理や、傭船料の請求書作成、保険期日管理等を行っております。主担副担にて管理表作成のもと管理を行っております。
                    </p>
                </div>
                <div className="imgsub-section">
                <Image src={"/06.jpg"} alt="image06" className="imgsub-section" width={600} height={600}/>
                </div>
            </div>
            <small className="website-rights2">
        Copyright © EPknoT Co., Ltd. all rights reserved.
      </small>
        </div>
    

    </div>

    

  )
}

export default Work;