import {response, request} from "express";
import Publication from "./posting.model.js";

export const publicationsPost = async (req, res) => {
    const publi = await Publication.find();

    if (publi.length === 0) {
        const publication = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "hanged",
            categoria: "HTML",
            texto: "hangman game made with html, css and javaScript",
            tools: "html, css , javaScript",
            imagePrincipal: "https://www.toponimos.es/toponimos/img/ahorcado_0.png",
            link: "https://github.com/jdomingo2022206/hanged.git"
        })

        const publication2 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "AdaptAPet",
            categoria: "HTML",
            texto: "pet adoption system where you can see the breed, type of animal, name and weight of the pet",
            tools: "html, css , javaScript",
            imagePrincipal: "https://s.tmimgcdn.com/scr/400x250/110000/spadog-plantilla-para-sitio-web-de-peluqueria-canina_110020-2-original.jpg",
            link: "https://github.com/ygarcia2022194/Laboratorio-2_api.git"
        })
        const publication3 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "Business manager",
            categoria: "Node.js",
            texto: "Manages the stock within the company and other procedures related to the company",
            tools: "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://www.researchgate.net/publication/308818801/figure/fig1/AS:599300010684416@1519895665309/Figura-1-Interfaz-correspondiente-al-Gestor-de-proyectos.png",
            link: "https://github.com/samuel216progra/Informe.git"
        })
        const publication4 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "Cooperex",
            categoria: "HTML",
            texto: "It is a web page that is responsible for managing the shipping of packages, having two interfaces for the admin role and the user role.",
            tools: "Html, css , javaScript",
            imagePrincipal: "https://ilioon.com/wp-content/uploads/2021/05/ventas-online.png",
            link: "https://github.com/samuel216progra/COPEREX.git"
        })
        const publication5 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "FacebookOP",
            categoria: "NodeJS",
            texto: "It is a manager of publications and comments to each publication similar to that of Facebook",
            tools: "nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lbC2yan81e2VCnedhih-e3R-6xIPWdPl__od_sWxVA&s",
            link: "https://github.com/samuel216progra/Facebook_OP.git"
        })
        const publication6 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "Online store",
            categoria: "Node js",
            texto: "This project focuses on the development of a web API implemented in NodeJS, intended to manage the registration of sales, online products and other commercial operations of a company. The application is structured in two main sections, administrator and client, each with specific functionalities",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://helpdesk.bitrix24.es/upload/medialibrary/be4/ix3htbiyw1ms08k9gd7e4v319fbzzstz/9.jpg",
            link: "https://github.com/samuel216progra/Tienda_En_Linea.git"
        })
        const publication7 = new Publication({
            autor: "Samuel Rodriguez",
            titulo: "Online store",
            categoria: "HTML",
            texto: "This project focuses on the development of a web API implemented in NodeJS, intended to manage the registration of sales, online products and other commercial operations of a company. The application is structured in two main sections, administrator and client, each with specific functionalities",
            tools: "Se utilizo nodejs, express, mongodb, jwt, bcrypt, cors, dotenv, morgan, nodemon, mongoose",
            imagePrincipal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIm2c1Lhb3qPv4cgXRdKDZQl1_1MKCzpqFxiSw-_7hQ&s",
            link: "https://github.com/samuel216progra/Tienda_En_Linea.git"
        })
        await publication.save();
        await publication2.save();
        await publication3.save();
        await publication4.save();
        await publication5.save();
        await publication6.save();
        await publication7.save();
    } else {
        console.log('Publications already exist');
    };
};

export const publicationsGet = async (req, res) => {
    const publications = await Publication.find();
    res.json(publications);
};

export const publicationsGetById = async (req, res) => {
    const { id } = req.params;
    const publication = await Publication.findById(id);
    res.json(publication);

}

export const publicationsPut = async (req, res) => {
    const { id} = req.params;
    const { _id, author, title, texto, tools, image, link, ...rest} = req.body;
    const addComment = { ...rest};
    await Publication.findByIdAndUpdate(id, { $push: { comments: addComment } });
    res.status(200).json({ msg: "Comment added" });
};

