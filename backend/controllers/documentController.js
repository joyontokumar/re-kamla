// require model
const Document = require("../model/document");
// get all document 
const getAllDocument = async (req, res) => {
    await Document.find()
        .populate('subject')
        .then(documents => {
            res.send(documents)
        }
    )
};

// get single document by id
const getSingleDocument = async(req, res) =>{
    const {id} = req.params;
    await Document.findById(id)
        .populate('subject')
        .then(documents=>{
            res.send(documents)
        })
}

// create document controller
const createDocumentController = async (req, res) => {
    const newDocument = new Document({
        title: req.body.title,
        documentfile: req.body.documentfile,
        description: req.body.description,
        subject: req.body.subject
    });
    newDocument.save().then(document => {
        res.send(document);
    })
}


// subject wise document show
const getSubjectDocument = async (req, res) => {
    const { id } = req.params;
    await Document.find()
        .then(document => {
            const data = document.filter(item => {
                return item.subject._id == id;
            });
            res.send(data);
        })
};

// edit or update document controller
const updateDocumentController = async (req, res) => {
    const { id } = req.params;
    const { title, documentfile, description } = req.body;
    const document = await Document.findById(id);
    document.title = title || document.title;
    document.documentfile = documentfile || document.documentfile;
    document.description = description || document.description;
    document.subject = document || document.subject;
    res.send(await document.save());
}

// delete document controller
const deleteDocumentController = async (req, res) => {
    const { id } = req.params;
    const deleteDocument = await Document.findById(id);
    res.send(await deleteDocument.remove());
}

// exports all document controllers
module.exports = {
    getAllDocument,
    createDocumentController,
    updateDocumentController,
    deleteDocumentController,
    getSubjectDocument,
    getSingleDocument
}