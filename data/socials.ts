export const socials = [
  {
    id: "github",
    label: "Github",
    href: "https://github.com/Wavxr",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-waver-aguilar-2a695335a/",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "https://johnwaveraguilar.dev",
  },
  {
    id: "resume",
    label: "Online Resume",
    href: "https://drive.google.com/file/d/1PSOxqhKAThzlatQ3hXpOATjrCyXCMRFX/view?usp=sharing",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/johnver.aguilar.71",
  },
  {
    id: "gmail",
    label: "Gmail",
    href: "mailto:johnwaveraguilar@gmail.com",
  },
] as const;

export type Social = (typeof socials)[number];

export default socials;
