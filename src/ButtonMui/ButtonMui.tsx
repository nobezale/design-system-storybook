import React, { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import SaveIcon from '@mui/icons-material/Save';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
export interface PropsButtonMui {
  //extends HTMLAttributes<HTMLButtonElement>
  children: ReactNode;
  disabled: boolean;
  variant: 'contained' | 'outlined' | 'text' | string;
  type: 'button' | 'submit' | 'reset' | undefined;
  arrow: 'back' | 'forward';
}
export const ButtonMui = ({
  variant,
  disabled,
  type,
  arrow,
  children,
  ...props
}: PropsButtonMui) => {
  return (
    <MuiButton
      variant="contained"
      disabled={disabled}
      type={type}
      endIcon={arrow === 'back' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
