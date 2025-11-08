export const socials = [
  {
    id: "github",
    label: "Github",
    href: "https://github.com/Wavxr",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johnwaveraguilar/",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "https://johnwaveraguilar.vercel.app/",
  },
  {
    id: "resume",
    label: "Resume",
    href: "https://flowcv.com/resume/1wu5lkmpiois",
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
