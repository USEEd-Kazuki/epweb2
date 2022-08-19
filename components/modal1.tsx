import React, {useState} from 'react'

const Modal1 = () => {

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
            <h1 className="modal-name">Nagatake Mari</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <div className="timeline-date1">0000.</div>
                <h3 className="timeline-content">高校、大学を海外で生活</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2005.</h3>
                <h3 className="timeline-content">カナダの大学を卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2005.</h3>
                <h3 className="timeline-content">経営コンサルティング会社に入社</h3>
              </li>
              <li className='modal-li'>
                <div className="timeline-date1">0000.</div>
                <h3 className="timeline-content">（国内外企業に対するコンサルティングサービスや、プロジェクトマネジャーを経験）</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2016.</h3>
                <h3 className="timeline-content">帰国後、シップブローカー入社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2022.</h3>
                <h3 className="timeline-content">株式会社EPknotに入社</h3>
              </li>
            </ul>
            <div className="member-work">海外生活や、経営コンサルタントとしての経験で培った語学力、ビジネスコンサルティングスキル、ドキュメンテーションスキルを強みとしております。</div>
            <p className="member-work1">担当業務: 案件紹介資料作成、ドキュメンテーション、クロージング後の案件管理、プロジェクトマネジメント業全般</p>
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

export default Modal1