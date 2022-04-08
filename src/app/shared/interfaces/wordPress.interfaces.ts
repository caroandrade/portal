export interface Categoria {
    id:          number;
    count:       number;
    description: Description;
    link:        string;
    name:        string;
    slug:        string;
    taxonomy:    Taxonomy;
    parent:      number;
    meta:        any[];
    _links:      Links;
}

export interface Links {
    self:           About[];
    collection:     About[];
    about:          About[];
    up?:            Up[];
    "wp:post_type": About[];
    curies:         Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface Up {
    embeddable: boolean;
    href:       string;
}

export enum Description {
    AcademiaArgentinaDeLetras = "Academia Argentina de Letras",
    Empty = "",
    ProgramaComunidadDeAprendizajeEnseñamosABP = "Programa Comunidad de Aprendizaje\u000d\n\ud83d\udca1Enseñamos - ABP",
}

export enum Taxonomy {
    Category = "category",
}


export interface Etiquetas {
    id:          number;
    count:       number;
    description: string;
    link:        string;
    name:        string;
    slug:        string;
    taxonomy:    string;
    meta:        any[];
    _links:      Links;
}

export interface Links {
    self:           About[];
    collection:     About[];
    about:          About[];
    "wp:post_type": About[];
    curies:         Cury[];
}

export interface About {
    href: string;
}


