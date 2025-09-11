
type SocialMedia = {
    link: string;
    icon: string;
};

export type CardMentorProps = {
    img: string;
    name: string;
    namePosition: string;
    socialMedia: SocialMedia[];
    center?: boolean
};
