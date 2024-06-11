export interface Student {
  idEleve: number;
  classe: {
    idClasse: number;
    nomClasse: string;
    niveau: string;
  };
  utilisateur: {
    idUtilisateur: number;
    nom: string;
    prenom: string;
  };
}
