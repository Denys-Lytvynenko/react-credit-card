type CardBackgroundAccent = {
    solid?: false;
    accentColor?: string;
    customBG?: string;
};

type CardBackgroundSolid = {
    solid: true;
    accentColor: string;
    customBG?: string;
};

export type CardBackgroundType = CardBackgroundAccent | CardBackgroundSolid;
