import React from 'react';
import ListComponent from '../../composants/List';
import QualificatifForm from '../../components/QualificatifForm';
import { ListContext } from '../../context/listContext';
import { useContext } from 'react';
import { QualificatifContext } from '../../context/qualificatifContext';
import { QUALIFICATIF_COLUMNS } from '../../constants';
import { Qualificatif } from '../../types/qualificatifTypes';
import { supprimerColonnesId, trouverIdQualificatif } from '../../context/qualificatifContext';
 

const QualificatifPage: React.FC = () => {
    const {  updateModalOpen } = useContext(ListContext);
    const { qualificatifList, qualificatifListError, removeQualificatif, deleteQualificatifError,
       modifyQualificatifError, modifyQualificatif, updateQualificatifMaximal, updateQualificatifMinimal
      } = useContext(QualificatifContext);
    console.log("qual" ,qualificatifList);



  // Données fictives
 const dat = supprimerColonnesId(qualificatifList);

  // Handlers pour les actions

 

  const handleEdit = (rowData: any) => {
    console.log('Modifier:', rowData);
    updateQualificatifMinimal(rowData.minimal);
    updateQualificatifMaximal(rowData.maximal);
    


  };

  const handleDelete = (rowData: any) => {
    console.log('Supprimer:', rowData);
    const id_supp = trouverIdQualificatif( rowData, qualificatifList);
    removeQualificatif(id_supp);

  };


  return (
    <div>
     <div style={{ textAlign: 'center', color: 'red' }}>
  {qualificatifListError && qualificatifListError}
  {deleteQualificatifError && deleteQualificatifError}
</div>
      <ListComponent title={"Liste des qualificatifs" } columns={QUALIFICATIF_COLUMNS} data={dat.reverse()} actions={true}
       remove={true} deleteHandler={handleDelete}
       modify={true} modifyElement={<div><QualificatifForm  add={false}  /></div>} modifyHandler={handleEdit} 
       addElement={<div><QualificatifForm  add={true} /></div>} 
       />
       
    </div>
   
  );
};

export default QualificatifPage;
