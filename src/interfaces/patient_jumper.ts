export interface JumperPatient {
    Id?                 :string|number;
    IdOds?              :string|number;
    Civilite?           :string|undefined;
    NomPat?             :string|undefined;
    NomUsuel?           :string|undefined;
    Prenom?             :string|undefined;
    DateNaissance?      :string|undefined;
    Portable?           :string|undefined;
    Fixe?               :string|undefined;
    NumINSEE?           :string|undefined;
    ClefINSEE?          :string|undefined;
    //ProchainRdv       :string;
    PratReferent?       :string|undefined;
    Selected?           :boolean;
}