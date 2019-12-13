const repository = require('../model/share_repo');
const { SHARE_SUCCESS, SHARE_ERROR } = require('../action/share');

exports.create = share => {
    return repository.insert(share)
        .then(async result => {
            if (result.acknowledged === true) {
                return SHARE_SUCCESS;
            }

            return new Error(SHARE_ERROR);
        })
        .catch(err => {
            console.log(err);
            return new Error(SHARE_ERROR);
        })
}

exports.updateValue = share => {
    return repository.update({ share_id: { $eq: share.share_id } }, { $inc: { likes : share.liked ? 1 : -1 } })
        .then(async result => {
            if (result.ok === 1) {
                return SHARE_SUCCESS;
            } 

            return new Error(SHARE_ERROR);
        })
        .catch(err => {
            console.log(err);
            return new Error(SHARE_ERROR);
        })
}

exports.getAll = () => {
    return repository.findAll({ likes: -1 });
};