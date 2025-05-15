import { config } from "dotenv";

config();
const env = {
  port: process.env.PORT,
  mongodb_url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clusterfortesting.vjjjwap.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority&appName=ClusterForTesting`,
  persistence: process.env.PERSISTENCE,
  jwt_secret: process.env.JWT_SECRET
}
export default env;
