const repository = require('../model/user_repo');
const bcrypt = require('bcrypt');
const { USER_SUCCESS, USER_ERROR } = require('../action/user');
const saltRounds = 10;

exports.create = user => {
    return repository.find({ $or : [{ ID: { $eq: user.ID }}, { name: { $eq: user.name }}]})
        .then(async result => {
            if (result === null) {
                const hashedPassword = await bcrypt.hash(user.password, saltRounds);
                user.password = hashedPassword;
                user.createdDate = new Date().toISOString();
                
                repository.insert(user);

                return USER_SUCCESS;
            } else {
                return USER_ERROR;
            }
        });
};

exports.validate = async user => {
    const result = await repository.find({ ID : { $eq: user.ID }});
    const matched = await bcrypt.compare(user.password, result.password);

    if (matched) {
        return result;
    } else {
        return new Error(USER_ERROR);
    }
};

exports.get = user => {
    return repository.find({ ID: { $eq: user.ID }});
};

exports.updateValue = (username, score) => {
    return repository.update({ username: { $eq: username }}, { $inc: { score : score } });
}