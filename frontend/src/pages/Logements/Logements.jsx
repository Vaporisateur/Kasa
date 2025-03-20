import { useParams } from "react-router";
import logementsData from "../../data/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";

export default function Logements() {
  let params = useParams();
  console.log(logementsData);
  let logement = logementsData.find((logement) => logement.id === params.id);

  return (
    <div className="container">
      <Carrousel pictures={logement.pictures} />
      <section className="logements__container">
        <header className="logements__header">
          <h1 className="logements__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
        </header>
        <div className="logements__infos">
        </div>
        <div className="logements__details">
        </div>
      </section>
    </div>
  );
}