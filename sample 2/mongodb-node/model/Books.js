console.log("mongoose")
const mongoose = require("mongoose")

const { Schema,model } = mongoose
const bookSchema = new Schema(
    {
        title: String, // String is shorthand for {type: String}
        author: String,
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now }
    }
)
// COLLECTION CREATION
const learner = new mongoose.model('learner', bookSchema)

// CREATING DOCUMENT
// const Book = new learner();
// Book.title = "phone X"
// Book.author = "Apple"
// Book.body = "mobile"

// Book.save()

// CREATING A DOCUMENT

const createDocument = async () => {
    try {
        const Book = new learner({
            title: "The Great Gatsby",
            author:"nitin chauhan",
            body:"mobile"
        });
        const result = await Book.save();
        
        console.log(result)      
    }
    catch(err){
        console.log(err)
    }
}



createDocument()

module.exports = learner