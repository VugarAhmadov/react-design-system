export interface InputGeneriqueEvent {
    value :string;
    isValid :boolean;
    key? :string;
}

export interface InputProps {
    content         :string;
    type            :string;
    name            :string;
    placeHolder     :string;
    errorMessage    :string;
    disabled        :boolean;
    inputHeight     :number;
    inputWidth      :number;
    label           :string;
    customClass     :string;
    labelWidth      :number;
    minlength       :number;
    maxlength       :number;
    required        :boolean;
    noLabel         :boolean;
    onChange        :(event: InputGeneriqueEvent) => string;
    onKeyPress      :(event: InputGeneriqueEvent) => void;
    onBlur          :(event: InputGeneriqueEvent) => void;
    onFocus         :(event: InputGeneriqueEvent) => void;
    validation      :(value :string) => boolean;
    autoFocus       :boolean;
    setError        :(value :string|null) => void; // Sera envoyé par le composant HOC
    error           :boolean; // Sera envoyé par le composant HOC,
    icone_gauche    :React.ReactElement;
    icone_droite    :React.ReactElement;
}
