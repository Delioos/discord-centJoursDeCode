import {connect} from 'mongoose';

// the name of the database is stored in the .env file, db name is cluster0
export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI!);
    console.log('\x1b[36m%s\x1b[0m',`[DATABASE] Connected to ${process.env.MONGO_URI?.substring(0, 22)}...`);
}
