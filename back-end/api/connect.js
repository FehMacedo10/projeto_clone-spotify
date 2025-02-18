import { MongoClient } from "mongodb";

const URI = "mongodb+srv://FehMacedo:XWkyJPckip0A2HYM@cluster0.roaoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("projeto_cloneSpotify");