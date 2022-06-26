import { Theme } from "@mui/system";

export interface LogoImageInterface {
  logoImage: string;
}

export interface NavItemInterface {
  text: string;
}

export interface TitleInterface {
  text: string;
}

export interface NavMenuItemInterface {
  text: string;
  path?: string;
}

export interface IntroductionInterface {
  greeting?: string;
  name: string;
  designation: string;
  description: string;
}

export interface SkillInterface {
  image: string;
  text: string;
  rating: number;
}

export interface ContainerTitleInterface {
  title: string;
}

export interface ProjectsInterface {
  tabImage?: string;
  label: string;
  projects: {
    image?: string;
    title: string;
    description: string;
    technologies: string[];
  }[];
}
[];

export interface UserAuthInterface {
  notify: string;
  setNotify: React.Dispatch<React.SetStateAction<string>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
}

export interface UserSignInInterface extends UserAuthInterface {
  handleLoginSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface UserSignUpInterface extends UserAuthInterface {
  handleRegisterSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
