// require model
const Youtube = require("../model/youtube");

// get all youtube 
const getAllYoutube = async (req, res) => {
    await Youtube.find()
        .populate('youtube')
        .then(youtubes => {
            res.send(youtubes)
        }
    )
};

// get single youtube by id
const getSingleYoutube = async(req, res)=>{
    const {id} = req.params;
    await Youtube.findById(id)
    .populate('youtube')
    .then(youtube =>{
        res.send(youtube)
    })
}

// create youtube controller
const createYoutubeController = async (req, res) => {
    const newYoutube = new Youtube({
        title: req.body.title,
        videoid: req.body.videoid,
        description: req.body.description,
        youtube: req.body.youtube
    });
    newYoutube.save().then(youtube => {
        res.send(youtube);
    })
}

// subject wise youtube show
const getSubjectYoutube = async (req, res) => {
    const { id } = req.params;
    await Youtube.find()
        .then(youtubes => {
            const data = youtubes.filter(item => {
                return item.youtube._id == id;
            });
            res.send(data);
        })
};



// edit or update youtube controller
const updateYoutubeController = async (req, res) => {
    const { id } = req.params;
    const { title, videoid, description, youtube } = req.body;
    const ytb = await Youtube.findById(id);
    ytb.title = title || ytb.title;
    ytb.videoid = videoid || ytb.videoid;
    ytb.description = description || ytb.description;
    ytb.youtube = youtube || ytb.youtube;
    res.send(await youtube.save());
}

// delete youtube controller
const deleteYoutubeController = async (req, res) => {
    const { id } = req.params;
    const deleteYoutube = await Youtube.findById(id);
    res.send(await deleteYoutube.remove());
} 

// exports all youtube controllers
module.exports = {
    getAllYoutube,
    createYoutubeController,
    updateYoutubeController,
    deleteYoutubeController,
    getSubjectYoutube,
    getSingleYoutube
}