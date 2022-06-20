export interface LogoImageInterface {
    logoImage: string;
}

export interface NavItemInterface {
    text: string
}

export interface TitleInterface {
    text: string
}

export interface NavMenuItemInterface {
    text: string;
    path?: string
}

export interface IntroductionInterface {
    greeting?: string;
    name: string;
    designation: string;
    description: string;
}

export interface SkillInterface {
    image: string,
    text: string,
    rating: number,
}

export interface ContainerTitleInterface {
    title: string
}


export interface ProjectsInterface {
    tabImage?: string,
    label: string,
    projects: {
        image?: string,
        title: string,
        description: string,
        technologies: string[]
    }[]
}[]