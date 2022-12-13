const mongoose = require("mongoose");
const faker = require("faker");
const Blog = require("./models/Blog");

mongoose.connect("mongodb//localhost/Blog");

let topics = ["reat", "javascript", "mongodb", "nodeJS", "HTML-CSS"];

let blogs = [];

for(let topic of topics){
    for(let i=0; i<2; i++){
        blogs.push({
            topic: topic,
            description: faker.lorem.paragraphs(2),
            posted_at: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
            posted_by: faker.name.findName()
        })
    }
}


Blog.insertMany(blogs)
  .then((res) => console.log())
  .catch((err) => console.log(err));

