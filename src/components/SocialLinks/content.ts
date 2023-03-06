export type SocialIconData = {
  url?: string;
  label: string;
};

const github: SocialIconData = {
  url: "https://github.com/carneirofc",
  label: "Github",
};
const linkedin: SocialIconData = {
  url: "https://www.linkedin.com/in/cl%C3%A1udio-carneiro-458b27195",
  label: "Linkedin",
};
const discord: SocialIconData = {
  url: "https://discordapp.com/users/425464719206252546",
  label: "Discord",
};
const instagram: SocialIconData = {
  url: "https://www.instagram.com/claudio.f.carneiro/",
  label: "Instagram",
};
const battlenet: SocialIconData = {
  label: "Battlenet",
};

export const content = {
  github,
  linkedin,
  discord,
  instagram,
  battlenet,
};
