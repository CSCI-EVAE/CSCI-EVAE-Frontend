import React, { useEffect, useContext } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useParams, useLocation } from 'react-router-dom';
import { EvaluationContext } from "../../context/evaluationContext";

const DetailsEvaluationPage: React.FC = () => {
  const { id_eva } = useParams();
  const { state } = useLocation();
  const infoGenerale = state?.rowDataInfo;

  console.log("INFO GENERALE :"+infoGenerale.debutReponse);
 

  const {
    evaluationDetails,
    fetchEvaluationDetails,
  } = useContext(EvaluationContext) || {
    evaluationDetails: null,
    evaluationError: "",
    fetchEvaluationDetails: () => {},
  };

  useEffect(() => {
    if (id_eva) {
      fetchEvaluationDetails(parseInt(id_eva, 10));
    }
  }, [id_eva, fetchEvaluationDetails]);

  if (!evaluationDetails) {
    return <div>Loading...</div>;
  }

  return (

    <>
    <div style={{"margin":"100px"}}>
    <h3>{infoGenerale.nomFormation}</h3>
    <h2>{infoGenerale.anneePro}</h2>
    <h2>{infoGenerale.codeUE}</h2>
    <h2>{infoGenerale.codeEC}</h2>
    <h2>{infoGenerale.debutReponse}</h2>
    <h2>{infoGenerale.finReponse}</h2>
    </div>

    <List
      sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper", margin: "auto" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {evaluationDetails.designation}
        </ListSubheader>
      }
    >
      {evaluationDetails.rubriqueEvaluations.map((rubrique) => (
        <div key={rubrique.idRubrique.id}>
          <ListItemButton sx={{ background: "#f0f0f0", borderRadius: "4px", margin: "4px 0" }}>
            <ListItemText primary={`Rubrique: ${rubrique.idRubrique.designation}`} sx={{ fontWeight: "bold" }} />
          </ListItemButton>
          <List sx={{ pl: 4 }}>
            {rubrique.questionEvaluations && rubrique.questionEvaluations.map((question) => (
              <ListItemButton key={question.idQuestion.id} sx={{ background: "#fafafa", borderRadius: "4px", margin: "4px 0" }}>
                <ListItemText primary={`Question: ${question.idQuestion.intitule}`} sx={{ fontStyle: "italic" }} />
                <ListItemText primary={`${question.idQuestion.idQualificatif.maximal} - ${question.idQuestion.idQualificatif.minimal}`} sx={{ fontStyle: "italic", textAlign: "right" }} />
              </ListItemButton>
            ))}
          </List>
        </div>
      ))}
    </List>
    </>
  );
};

export default DetailsEvaluationPage;