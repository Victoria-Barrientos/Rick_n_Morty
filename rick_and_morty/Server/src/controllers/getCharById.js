const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

module.exports.getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender, id}) => {
        if(name) {
            const character = {
                id,
                name, 
                status,
                species,
                origin,
                image,
                gender
            }
            return res.status(200).json(character)
        }
        return res.status(404).json({error: 'Not found'})
    })
    .catch(error => res.status(500).send(error.message))
}

