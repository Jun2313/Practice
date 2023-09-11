import React from 'react';

export default function MovieDetail({ details, showModal, setShowModal }) {

  if (!details || !showModal) {
    return null;
  }

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-backdrop') {
      setShowModal(false);
    }
  };

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
        flexDirection: 'row'
      }}>
        <div className="MovieDetail_EnterDetails" style={{
          background: 'skyblue',
          height: '40vw',
          width: '100%',
          boxSizing: 'border-box',
          margin: '5%'
        }}>
          <h1>{details.title}</h1>
          <p>개봉날자 : {details.releaseDate}</p>
          
          <h2 >Poster</h2>
          {details.posterUrls && details.posterUrls.length > 0 && (
            <img style={{width: "300px"}} src={details.posterUrls[0]} alt={`${details.title} poster`} />
          )}
          
          
        </div>
      </div>
    </div>
  );
}