import Plot from "../models/plot.model.js";
import User from "../models/user.model.js";

export const sellPlot = async (req, res) => {
    try {
        const newPlot = new Plot({
            name: req.body.name,
            location: req.body.location,
            type: req.body.type,
            price: req.body.price,
            area: req.body.area,
            soldBy: req.body.soldBy,
            image: req.body.image
        })
        // console.log(req.body.image)
        await newPlot.save();

        res.send("Plot has been created")
    } catch (error) {
        res.status(400).send(error.response);
    }
}

export const getPlots = async (req, res) => {
    try {

        console.log(req.body.location)
        let query;
        if (req.body.location == 'All') {
            query = await Plot.find({ price: { $gt: req.body.startingPrice, $lt: req.body.endingPrice }, area: { $gt: req.body.startingArea, $lt: req.body.endingArea } });
        }
        else {

            query = await Plot.find({ price: { $gt: req.body.startingPrice, $lt: req.body.endingPrice }, area: { $gt: req.body.startingArea, $lt: req.body.endingArea }, location: req.body.location == 'All' ? req.body.location : req.body.location });
        }

        console.log(query);
        res.send(query);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const buyPlot = async (req, res) => {
    try {
        const buyer = await User.findOne({ email: req.body.buyerEmail });
        const seller = await User.findOne({ email: req.body.sellerEmail });

        const buyerBalance = buyer.balance - req.body.price;
        const sellerBalance = seller.balance + req.body.price;

        await User.updateOne({ email: req.body.buyerEmail }, { $set: { balance: buyerBalance } });
        await User.updateOne({ email: req.body.sellerEmail }, { $set: { balance: sellerBalance } });



        // localStorage.setItem('currentUser', );

        res.send(buyer);


    } catch (error) {
        res.status(400).send(error.response);

    }
}
