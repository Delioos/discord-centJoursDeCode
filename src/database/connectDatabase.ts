import {connect} from 'mongoose';

// the name of the database is stored in the .env file, db name is cluster0
export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI!);
    console.log("Connected to database");
}
