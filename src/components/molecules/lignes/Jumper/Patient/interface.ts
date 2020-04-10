import NumeroSecuInterface from '../../../../../interfaces/numero_secu'
import NomPatient from '../../../../../interfaces/nom_patient';

export interface JumperLignePatientInterface {
    civilite?        :string|undefined;
    patient?         :NomPatient|undefined;
    dateNaissance?   :string|undefined;
    numTel1?         :string|undefined;
    numTel2?         :string|undefined;
    numSecu?         :NumeroSecuInterface|undefined;
    // rendezVous      :string;
    pratReferent?    :string|undefined;
    selectable       :boolean;
    selected         :boolean;
    selectablePosition? :string;
    onSelect            :(event: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => void;
    onLigneClick        :(event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    ligneStyle?         :React.CSSProperties;
    children?           :React.ReactElement;
}