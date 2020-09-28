import React from 'react';
import { ButtonBase} from '@material-ui/core';
import { toast } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ButtonCopy({region, index}) {
  return (
    <CopyToClipboard key={index}text={region}>
    <ButtonBase onClick={() => toast.success('Copiado')}>
      Opção {index+1}
    </ButtonBase>
  </CopyToClipboard>
  );
}

export default ButtonCopy;