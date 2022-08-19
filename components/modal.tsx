import React, {useState} from 'react';


const Modal = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () =>{
      setModal(!modal)
  }

  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">
        READ MORE
    </button>
    {modal &&(
    <div className="modal">
        <div onClick={toggleModal}
        className="overlay"></div>
        <div className="modal-content">
        <div className="modal-section">
            <h1 className="modal-name">Yamamoto Naoki</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1982.</h3>
                <h3 className="timeline-content">愛媛県に生まれ、高校、大学を海外で生活</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2006.</h3>
                <h3 className="timeline-content">南カルフォルニア大学 卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2006.</h3>
                <h3 className="timeline-content">あおぞら銀行入行 シップファイナンスチームに所属</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2009.</h3>
                <h3 className="timeline-content">株式会社ユニバーシップ 入社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2012.</h3>
                <h3 className="timeline-content">デロイトトーマツファイナンシャルアドバイザリー合同会社 入社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2013.</h3>
                <h3 className="timeline-content">株式会社ユニバーシップ 帰社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2020.</h3>
                <h3 className="timeline-content">株式会社EPknoT 設立</h3>
              </li>
            </ul>
            <div className="member-work">海外大学でのビジネス専攻によりビジネスコミュニケーションに長け、銀行では国内船主向け船舶ローン、海外船主向けダイレクトファイナンスやノンリコースプロジェクトファイナンス、外銀とのシンジケートローン、コンテナリース(JOLCO)ファイナンスの実績を多数有しております。ファイナンスアドバイザリー業務の経験も有し、金融知識も必要とする新造船長期傭船案件やセールアンドリースバック(SLB)案件組成を得意としております。これまでに60隻以上のSLB案件の成約実績を有しております。案件組成だけでなく融資のサポートまで顧客のニーズにあった幅広い業務を行なっています。</div>
            <p className="member-work1">担当業務: 案件ソーシング、案件紹介、ドキュメンテーション、プロジェクトマネジメント</p>
          </div>
            <span 
            className="close-modal"
            onClick={toggleModal}
            >
            </span>
        </div>
    </div>
    )}
    </>
  )
}

export default Modal