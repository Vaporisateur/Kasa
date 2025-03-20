import { useParams } from "react-router";
import logementsData from "../../data/logements.json";

export default function Logements() {
  let params = useParams();
  console.log(logementsData);
  let logement = logementsData.find((logement) => logement.id === params.id);
  return (
    <div className="container">
      <div>{logement.title}</div>
    </div>
  );
}