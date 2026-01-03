export type Project = {
    title: string
    category: "Web" | "WordPress" | "Diseño"
    description: string
    image: string
    link: string
}

export const projects: Project[] = [
    {
        title: "Topp & Screed México",
        category: "Web",
        description: "Diseñada con React, Boostrap y CSS.",
        image: "/toppandscreed.png",
        link: "https://toppandscreedmx.netlify.app",
    },
    {
        title: "Virtual Bifrost",
        category: "WordPress",
        description:"Pagina web de una empresa de realidad virtual, se programo en html puro pero se gestiona con WordPress.",
        image: "/wordpress_bifrost.png",
        link: "#",
    },
    {
        title: "Answer ST",
        category: "Web",
        description: "Pagina web estatica, tipo landing page, realizada con Next.js y TailwindCSS. Logica con TypeScript.",
        image: "/answerst.png",
        link: "https://answerst.netlify.app",
    },
    {
        title: "Invitacion virtual de boda",
        category: "Web",
        description: "Pagina web estatica, tipo landing page, realizada con Next.js y TailwindCSS. Logica con TypeScript.",
        image: "/invitacionboda.png",
        link: "http://bodainvitaciona.netlify.app",
    },
    {
        title: "Pagina interactiva de nominaciones",
        category: "Web",
        description: "Pagina web estatica, realizada con Next.js y TailwindCSS. Logica con TypeScript. Pagina para que los usuarios puedan nominar a las personas nomiandas a una categoria.",
        image: "/nominaciones.png",
        link: "http://theyisusawards.netlify.app",
    },

    // 👉 Aquí podrás ir agregando más proyectos sin tocar la vista
]
