import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "./IconsSocials";

export const FOOTER_LINKS = [
  {
    title: "Información adicional",
    links: [
      {
        tittle: "Acerca de Purrfect Hire",
        link: "#about-section",
      },
      {
        tittle: "Poriciones abiertas",
        link: "#open-roles-section",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contacto",
  links: [
    { label: "Para clientes", value: "sales@purrfecthire.com" },
    { label: "Para candidatos", value: "hiring@purrfecthire.com" },
  ],
};

export const SOCIALS = {
  title: "Social Media",
  links: [
    {
      link: "https://www.facebook.com/purrfecthirehr",
      svg: Facebook,
    },
    {
      link: "https://www.linkedin.com/company/purrfect-hire/mycompany/",
      svg: LinkedIn,
    },
    {
      link: "https://www.instagram.com/purrfecthirehr/",
      svg: Instagram,
    },
    {
      link: "https://twitter.com/purrfecthire",
      svg: Twitter,
    },
  ],
};
