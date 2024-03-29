

export interface Qualificatif {
    id: number;
    maximal: string;
    minimal: string;
  }
  
  export interface Question {
    id: number;
    type: string;
    noEnseignant: number | null;
    idQualificatif: Qualificatif;
    intitule: string;
  }
  
  export interface QuestionEvaluation {
    id: number;
    intitule: string | null;
    idQuestion: Question;
    ordre: number;
  }
  
  export interface Rubrique {
    id: number;
    type: string;
    designation: string | null;
    ordre: number;
    questionEvaluations: QuestionEvaluation[] | null;
  }
  
  export interface RubriqueEvaluation {
    id: number;
    designation: string | null;
    idRubrique: Rubrique;
    ordre: number;
    questionEvaluations: QuestionEvaluation[] | null;
  }
  
  export interface Evaluation {
    id: number;
    designation: string;
    debutReponse: string;
    finReponse: string;
    rubriqueEvaluations: RubriqueEvaluation[];
  }
  
  export interface EvaluationResponse {
    success: boolean;
    message: string;
    data: Evaluation;
  }
  

  