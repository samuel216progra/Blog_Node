import mongoose from "mongoose";

const PublicationSchema = mongoose.Schema({
    autor: {
        type: String,
    },
    titulo: {
        type: String,
        required: [true, "Title is required"],
    },
    categoria: {
        type: String,
        required: [true, "Category is required"],
    },
    texto: {
        type: String,
        required: [true, "Content is mandatory"],
    },
    tools:{
        type: String,
        required: true
    },
    imagePrincipal: {
        type: String,
        default: 'none'
    },
    link:{
        type: String,
        required: true
    },
    comentarios: [{
        usuario: {
            type: String,
        },
        comment: {
            type: String,
        },
    }],
});

export default mongoose.model("Publication", PublicationSchema);