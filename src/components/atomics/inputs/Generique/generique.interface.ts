interface InputGeneriqueEvent {
    value :string;
    isValid :boolean;
    key? :string;
}

export interface inputProps {
    content :string;
    type :string;
    name  :string;
    placeHolder :string;
    errorMessage  :string;
    disabled :boolean;
    height :number;
    width :number;
    label :string;
    customClass :string;
    labelWidth: number;
    minlength:number;
    maxlength :number;
    required :boolean;
    noLabel: boolean;
    onChange :(event: InputGeneriqueEvent) => string;
    onKeyPress :(event: InputGeneriqueEvent) => void;
    onBlur :(event: InputGeneriqueEvent) => void;
    onFocus :(event: InputGeneriqueEvent) => void;
    validation :(value :string) => boolean;
    autoFocus :boolean;
    setError :(value :string|null) => React.Dispatch<React.SetStateAction<null>>; // Sera envoyé par le composant HOC
    error :boolean; // Sera envoyé par le composant HOC,
    icone_gauche :React.ReactElement;
    icone_droite :React.ReactElement;
}
