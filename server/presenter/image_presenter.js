const repository = require('../model/image_repo');

exports.upload = data => {
    return repository.insert(data);
};