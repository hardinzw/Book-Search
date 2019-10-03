const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleBooks",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      family: 4 // Use IPv4, skip trying IPv6
    }
);

const bookSeed = [
  {
    title: "1984",
    author: "George Orwell",
    googleId: "VO8nDwAAQBAJ",
    description: "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    date: new Date(Date.now()),
    image: "https://books.google.com/books/content?id=VO8nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70NaOV_iEpITgsQNijiXqxh2Vw6rkzinykcWPkrGkx3Fskg0CHEawVPQH9x73ux4ZTTZgJpu0NnK5jO1YF7zK1MoIwmIShSh0cDeQ8xGAq0lSBr5AkfjZgsGydqkr58y2tIGSo_",
    link: "https://books.google.com/books?id=VO8nDwAAQBAJ&dq=1984&source=gbs_navlinks_s"
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });