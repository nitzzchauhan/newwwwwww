const mongoose = require('mongoose')
// import { Schema } from 'mongoose';
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
console.log("mongoose")



const blogSchema = new Schema({
    title: { type: String }, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});




// const doc_str = 
const Backend = mongoose.model("Backend", blogSchema)

// const firstDoc = new Backend({
//     title : "muskAN",
//     author :"author1234567890",
//     body:"this is the content of the blog post",    
// comments:[{body:"comment1",date:Date()}],
// date:new Date(),
// hidden:false,   
// meta:{votes:0,favs:0},
// });

// firstDoc.save()


const createDocument = async () => {
    try {
        const firstDoc = new Backend({
            title: "nitin",
            author: "author1234567890",
            body: "this is the content of the blog post",
            comments: [{ body: "comment1", date: Date() }],
            date: new Date(),
            hidden: false,
            meta: { votes: 0, favs: 0 }
        })
        const second_doc = new Backend({
            title: "geeetika",
            author: "author1234567890",
            body: "this is the content of the blog post",
            comments: [{ body: "comment1", date: Date() }],
            date: new Date(),
            hidden: false,
            meta: { votes: 0, favs: 0 },
        })
        const result = await Backend.insertMany([firstDoc, second_doc])
        console.log(result)

    }
    catch (err) {
        console.error(err);
    }
}
createDocument();


////// read or get

// const getDoc= async()=> {
//     const result =  await Backend.find({title:"geeetika"}).select({date:1}).limit(2).countDocuments()
//     console.log(result)

// }
// getDoc()


module.exports = Backend



// https://github.com/coderdost/full-stack-dev-2023#chapter-7---mongoose-and-rest-apis

