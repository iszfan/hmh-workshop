import { Mongo } from 'meteor/mongo';

//This creates a collection called "links" in the database
export default Links = new Mongo.Collection('links');
