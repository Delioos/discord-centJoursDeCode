import DevModel from "../database/models/DevModel";

export const getDevData = async (id:string) => {
    const devData = (await DevModel.findOne({id})) ||
        // fallback if the user is not in the database
        (await DevModel.create({
            discordId: id,
            round: 1,
            day: 0,
            timestamp: Date.now(),
        }));
    return devData;
};

