import React, {useState} from 'react'

const Modal2 = () => {
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
            <h1 className="modal-name">Hamayama Koshiro</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1996.</h3>
                <h3 className="timeline-content">岡山県生まれ</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">日本体育大学 卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">大学を卒業後2年間アメリカへ留学</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2021.</h3>
                <h3 className="timeline-content">帰国後、株式会社EPknoT入社</h3>
              </li>
            </ul>
            <div className="member-work">大学では、体育学部武道学科にて剣道を専攻し、同時に中学高校の保健体育教師免許を取得しました。大学卒業後、海外留学時に通訳翻訳科を専攻しており、英語でのコミュニケーションを得意としております。株式会社EPknoTへ入社後はSLB案件組成に関する、ドキュメンテーション、プロジェクトマネージメント業務などを行なっています。</div>
            <p className="member-work1">担当業務： 案件紹介、ドキュメンテーション、プロジェクトマネージメント</p>
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

export default Modal2