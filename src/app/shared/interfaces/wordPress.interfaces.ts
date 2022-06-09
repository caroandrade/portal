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

export interface Post {
    id:             number;
    date:           Date;
    date_gmt:       Date;
    guid:           GUID;
    modified:       Date;
    modified_gmt:   Date;
    slug:           string;
    status:         StatusEnum;
    type:           Type;
    link:           string;
    title:          GUID;
    content:        Content;
    excerpt:        Content;
    author:         number;
    featured_media: number;
    comment_status: Status;
    ping_status:    Status;
    sticky:         boolean;
    template:       Template;
    format:         Format;
    meta:           any[];
    categories:     number[];
    tags:           any[];
    _links:         Links;
}

export interface Links {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                Author[];
    replies:               Author[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia":    Author[];
    "wp:attachment":       About[];
    "wp:term":             WpTerm[];
    curies:                Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRelP = "https://www.mendoza.edu.ar",
}

export enum Name {
    WpP = "wp",
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum Taxonomy {
    CategoryP = "category",
    PostTag = "post_tag",
}

export enum Status {
    Closed = "closed",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export enum Format {
    Standard = "standard",
}

export interface GUID {
    rendered: string;
}

export enum StatusEnum {
    Publish = "publish",
}

export enum Template {
    ElementorHeaderFooter = "elementor_header_footer",
    Empty = "",
}

export enum Type {
    Post = "post",
}

