import { DevInt } from "../database/models/DevModel";

export const updateDevData = async (Dev: DevInt) => {
    Dev.day++;
    if (Dev.day > 100) {
        Dev.day = 1;
        Dev.round++;
    }
    Dev.timestamp = Date.now();
    await Dev.save();
    return Dev;
};