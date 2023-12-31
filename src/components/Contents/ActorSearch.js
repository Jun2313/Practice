import { useState } from "react";
import axios from "axios";


function ActorSearch() {
    const [actorName, setActorName] = useState("");
    const [actors, setActors] = useState([]);
    const [selectedActor, setSelectedActor] = useState(null);
  
    const onChange = (e) => {
      setActorName(e.target.value);
    };
  
    const handleSubmit = async (event) => { 
        event.preventDefault();
        const apiKey = "cea2c957318d918a9478f73088964f66";
        axios
        .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${apiKey}&peopleNm=${actorName}`
        )
        .then((response) => {
        const actorData = response.data.peopleListResult.peopleList;
        console.log(actorData);
        setActors(actorData);
        })
        .catch((error) => {
            console.error("API 요청 에러:", error);
        });
    };
  
    const openActorModal = (actor) => {
      setSelectedActor(actor);

    };
  
    const closeActorModal = () => {
      setSelectedActor(null);
    };
  
    return (
      <>
        <div className="ActorSearch">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="배우 이름을 입력하세요."
              value={actorName}
              onChange={onChange}
              style={{
                border: "none",
                outline: "none",
                borderBottom: "1px solid #fff",
                background: "transparent",
                width: "15rem",
                paddingLeft: "0.5rem",
                paddingBottom: "0.3rem",
                fontSize: "1rem",
                color: "#fff",
                margin: "10px 20px",
              }}
            />
          </form>
        </div>
        <div>
          {actors.map((actor) => (
            <div
              key={actor.id}
              className="ActorResultBox"
              onClick={() => openActorModal(actor)}
            >
              <h2>{actor.peopleNm}</h2>
            </div>
          ))}
        </div>
  
        {selectedActor && (
          <div className="modalContainer">
            <div className="ActorModalContent">
              <span className="CloseButton" onClick={closeActorModal}>
                &times;
              </span>
              <h2>{selectedActor.peopleNm}</h2>
              <p>배우 ID: {selectedActor.peopleCd}</p>
              <p>영화인명(영문): {selectedActor.peopleNmEn}</p>
              <p>분야: {selectedActor.repRoleNm}</p>
              <p>필모리스트: {selectedActor.filmoNames}</p>
            </div>
          </div>
        )}
      </>
    );
  }
export default ActorSearch;