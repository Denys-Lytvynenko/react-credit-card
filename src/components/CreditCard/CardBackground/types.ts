type CardBackgroundAccent = {
    solid?: false;
    accentColor?: string;
};

type CardBackgroundSolid = {
    solid: true;
    accentColor: string;
};

export type CardBackgroundType = CardBackgroundAccent | CardBackgroundSolid;
