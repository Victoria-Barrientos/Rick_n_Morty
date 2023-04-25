let myFavorites = [];

module.exports.postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
};

module.exports.deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((char) => char.id !== parseInt(id));
    return res.status(200).json(myFavorites)  
}