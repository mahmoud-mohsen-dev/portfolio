type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface NavbarProps<T> {
  darkModeIsOn: T;
  setDarkModeIsOn: setState<T>;
}

export interface NavItemProps<T> {
  text: string;
  id: T;
  active: T;
  darkModeIsOn: boolean;
  isNavbarOnTop: boolean;
  closeNavWindow: () => void;
  setActive: setState<T>;
}

export interface HeroProps {
  darkModeIsOn: boolean;
}

export interface ButtonProps<M> {
  className: M;
  children: React.ReactNode;
  value?: M;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick: () => void;
}

export interface AnchorProps<M> extends Omit<ButtonProps<M>, 'onClick'> {
  href: string;
  blank?: boolean;
}

export interface projectType {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  tools: string[];
  liveSrc: string;
  codeSrc: string;
}

export interface popUpType {
  success: boolean;
  failed: boolean;
  isSubmited: boolean;
}

export interface PopUpProps {
  showPopUp: popUpType;
  setShow: React.Dispatch<React.SetStateAction<popUpType>>;
}
