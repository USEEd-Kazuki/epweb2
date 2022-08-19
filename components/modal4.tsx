import React, {useState} from 'react'

const Modal4 = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () =>{
      setModal(!modal)
  }

  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">
        read more
    </button>
    {modal &&(
    <div className="modal">
        <div onClick={toggleModal}
        className="overlay"></div>
        <div className="modal-content">
        <div className="modal-section">
            <h1 className="modal-name">Iwamoto Kazuki</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1996.</h3>
                <h3 className="timeline-content">東京都に生まれ、千葉県で生活</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">文教大学 卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2020.</h3>
                <h3 className="timeline-content">株式会社ユニバーシップ 入社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2021.</h3>
                <h3 className="timeline-content">株式会社EPknoT 入社</h3>
              </li>
            </ul>
            <div className="member-work">大学では、国際学部にてホスピタリティ心理学を学び、ビジネスを行う上での強固なチームワーク構築に関する研究を行っていました。大学卒業後は航空大学校の受験を通して、自然科学の基礎的知識及び数学知識を習得致しました。また株式会社EPKnoTへ入社後、Sales and BBC Back案件組成に関するサポート業務を行いながら、アプリケーションエンジニアとしてフロントエンド、バックエンド、サーバーサイド業務などを行なっています。</div>
            <p className="member-work1">担当業務： 案件概要書制作、プロジェクトマネージメント、Webサイト・アプリケーション開発</p>
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

export default Modal4