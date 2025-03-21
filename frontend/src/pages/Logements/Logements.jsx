import './Logements.scss';
import { useParams } from "react-router";
import logementsData from "../../data/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Accordion from "../../components/Accordion/Accordion";
import Rating from "../../components/Rating/Rating";

export default function Logements() {
  let params = useParams();
  console.log(logementsData);
  let logement = logementsData.find((logement) => logement.id === params.id);

  return (
    <div className="logements container">
      <Carrousel pictures={logement.pictures} />
      <section className="logements__container">
        <header className="logements__header">
          <h1 className="logements__title">{logement.title}</h1>
          <p className="logements__location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </header>
        <aside className="logements__infos">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </aside>
      </section>

      <section>
        <div className="logements__details">
          <Accordion title="Description">
            <p>{logement.description}</p>
          </Accordion>
          <Accordion title="Équipements">
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Accordion>
        </div>
      </section>
    </div>
  );
}