import { JumperLignePatientInterface } from "../../../molecules/lignes/Jumper/Patient/interface";



export default interface ListePatientsInterface {
    patients :Array<JumperLignePatientInterface>;
    preloadCount :number;
    height:string;
}