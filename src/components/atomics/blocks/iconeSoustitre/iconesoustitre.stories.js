import React, {
  useState,
  useEffect
} from 'react';
import { withActions } from '@storybook/addon-actions';
import IconeSousTitre from '.';
import Mademoiselle from '../../icones/mademoiselle'

const initialState = {icone: null, soustitre: null}

export const SansIconeNiSousTitreCpt = () => {
  const [value, setvalue] = useState(initialState)
  
  const switchValue = () => {
    if (value.icone == null) {
      setvalue({
        icone: <Mademoiselle />,
        soustitre: 'Sous titre'
      })
    } else {
      setvalue(initialState)
    }
  }

  useEffect(() => {
    setTimeout(switchValue, 2000)        
  }, [value])

  return (
    <IconeSousTitre
    icone={value.icone}
    soustitre={value.soustitre}
    wrapperStyle={{width: '80px'}}
    />
  )
}


SansIconeNiSousTitreCpt.story = {
  name: 'Skeleton',
};


export const iconeSousTitreCpt = () => (
  <IconeSousTitre
  icone={<Mademoiselle />}
  soustitre={"Sous titre"}
  wrapperStyle={{width: '80px'}}
  />
);

iconeSousTitreCpt.story = {
  name: 'Icone et sous titre',
};


export default {
  title: 'Atomes/Blocks/IconeSousTitre',
  component: SansIconeNiSousTitreCpt,
};
