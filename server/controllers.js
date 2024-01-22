const SellerSettings = require('./schemas');

const updateUserSettings = async (req, res) => {
    const { email, sellingLocation, StockXSellerRating, GOATSellerLevel } = req.body;
    try {
        /*  Tries to find an user with the email from thr requests,
            if it finds the user, it updates the data with the request body,
            if there is no user with the current email it adds the user w/ default settings
        */
        let user = await SellerSettings.findOneAndUpdate(
            { email },
            { $set: { sellingLocation, StockXSellerRating, GOATSellerLevel }},
            { new: true, upsert: true }
        );
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getUserSettings= async (req, res) => {
    try {
        //Finds user in database based off of email and then gets their settings 
        const user = await SellerSettings.findOne({ email: req.params.email });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUserSettings= async (req, res) => {
    try {
        //Deletes users based on email
        const result = await SellerSettings.deleteOne({ email: req.params.email });
        if (result.deletedCount === 0) {
            res.status(404).send('User not found');
        } else {
            res.status(200).send('User deleted');
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    updateUserSettings,
    getUserSettings,
    deleteUserSettings,
};

