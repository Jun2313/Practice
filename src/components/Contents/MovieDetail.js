import React from 'react';

//Movie탭 리스트항목 모달창
export default function MovieDetail({ details, showModal, setShowModal }) {
  console.log("MovieDetail Props:", { details, showModal });

  if (!details || !showModal) {
    return null;
  }

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-backdrop') {
      setShowModal(false);
    }
  };
  console.log("Movie Details: ", details);
  return (
    <div className="modal-backdrop" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 44
    }} onClick={handleCloseModal}>
      <div style={{
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        maxWidth: '90%',
        width: '1000px',
        maxHeight: '90%',
        flexDirection: 'row',
        height: '90%'
      }}>
        <div className="MovieDetail_EnterDetails" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${details.posters?.split('|')[0]})`,
          backgroundSize: 'cover',
          height: '40vw',
          width: '100%',
          height: '90%',
          boxSizing: 'border-box',
          margin: '5%',
        }}>
          <h1 style={{padding: '20px'}}>{details.title}</h1>
          <div className='modalContainer'>
          <div style={{ width: '40%'}}>
          {details.stlls && details.stlls.length > 0 && (
            <img style={{width: '100%'}} src={details.posters.split('|')[0]} alt={`${details.title} poster`} />
          )}
          </div>
          <div style={{ width: '40%'}}>
          <span style={{ display: 'block', marginBottom: '10px' }}>
            줄거리: {details.plots.plot[0].plotText ? 
                    `${details.plots.plot[0].plotText.substring(0, 250)}..` : 
                    '줄거리 정보가 없습니다.'}
          </span>
          <p style={{ marginBottom: '10px' }}>
            개봉날자: {details.repRlsDate ? details.repRlsDate : '개봉날짜 정보가 없습니다.'}
          </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}