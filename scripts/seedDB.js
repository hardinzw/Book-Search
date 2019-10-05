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
    authors: "George Orwell",
    googleId: "VO8nDwAAQBAJ",
    description: "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    image: "https://books.google.com/books/content?id=VO8nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70NaOV_iEpITgsQNijiXqxh2Vw6rkzinykcWPkrGkx3Fskg0CHEawVPQH9x73ux4ZTTZgJpu0NnK5jO1YF7zK1MoIwmIShSh0cDeQ8xGAq0lSBr5AkfjZgsGydqkr58y2tIGSo_",
    link: "https://books.google.com/books?id=VO8nDwAAQBAJ&dq=1984&source=gbs_navlinks_s"
  },
  {
    title: "The Dead Zone",
    authors: "Stephen King",
    googleId: "ZbUACwAAQBAJ",
    description: "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "https://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73-6cYs2E4VkhgipfU0yOu5K9o_YmiXqKyrt_Ha-_2lmlRXhI0TtdSHTs5Lsl5AA-Mggnj8GvbHQtDCq3mdyBbypY9fR6mdRem-_uGjlcNXLyBdcUHHidq4cRvzcMbDZ2I2qEeh",
    link: "https://books.google.com/books?id=ZbUACwAAQBAJ&dq=the+dead+zone&source=gbs_navlinks_s"
  },
  {
    title: "Lord of the Flies",
    authors: "William Golding",
    googleId: "iyfgqV5dxXQC",
    description: "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "https://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73A3s_jMt_B6_BU0r535kC27ooSEzd1q5u3lqwfv9-6V3DfmNh19xQ1VoR0K2NyB7Q5xLjKnePxVJSS_DWIYwCQ4h0yX175Ej0xjBm4OQ4QbZkBnnQuVJxIyGqDQCZLmlRUqcA4",
    link: "https://books.google.com/books?id=iyfgqV5dxXQC&dq=lord+of+the+flies&source=gbs_navlinks_s"
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    googleId: "ss3YgEACAAJ",
    description: "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image: "https://books.google.com/books/content?id=-ss3YgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72YtpNbXW8FW9DWS9kCq9hlNXA5XCkjbLd1b4jv5T9O94tx1v9JT-GMbWW_fsgQBw5twCxJOWeF9aqJKujE73-z8a2ObBakXMO1oYKXiAXB3e5PJdtVhR_Ig_1hGzIPGSjeV2Dd",
    link: "https://books.google.com/books?id=-ss3YgEACAAJ&dq=the+catcher+in+the+rye&hl=en&sa=X&ved=2ahUKEwjjy_qtnYHlAhVyUN8KHR2XC9kQ6AEwAHoECAIQAg"
  },
  {
    title: "The Punch Escrow",
    authors: "Tal M. Klein",
    googleId: "yns3DwAAQBAJ",
    descritpion: "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport―the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems―until he’s accidentally duplicated while teleporting. Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    image: "https://books.google.com/books/content?id=yns3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72jeDP0a1O6urtfRWDD8B2K15vNGJBJwor7_U4KYrnwqXxJ-5hczd9jl30T1DBclNwfq4OtZNbp_2vUNelYZD4uIT5Pxj0Kca66nG2PS3hIa7dhEGOOhNV1hTfU_bqjXx6HMfQz",
    link: "https://books.google.com/books?id=yns3DwAAQBAJ&dq=the+punch+escrow&source=gbs_navlinks_s"
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    authors: "J.K. Rowling",
    googleId: "39iYWTb6n6cC",
    description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    image: "https://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RXsg7vKjbRxjeacsO4Wc1-kZ0fHxXqiGkEMsAWPxtxBfOKTapnIKT31855LevEtebRu5yAb-IHZrExx8SjuICCQUt-GJxx19qm0E272iOx_rhw3AqfYn1f3u_P_Kkuz483WI1",
    link: "https://books.google.com/books?id=39iYWTb6n6cC&dq=harry+potter+and+the+sorcerer%27s+stone&hl=en&sa=X&ved=2ahUKEwi3op2vnoHlAhWpmOAKHXaUDQEQ6AEwAHoECAAQAg"
  },
  {
    title: "Coraline",
    authors: "Neil Gaiman",
    googleId: "C8NVhWNU_uIC",
    description: "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
    image: "https://books.google.com/books/content?id=C8NVhWNU_uIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73y4KKzInaV47znE2XBzD1f2LWmrwfJWlXlsEc713okW80s2MWcq_znVSRJk31sA2zgUncltnCYstW0bW1dxYJH9tAXzvlkjZPqgFb_GI1PSnaCcpcFsPghkUtkNxkjbk_6PIuG",
    link: "https://books.google.com/books?id=C8NVhWNU_uIC&dq=coraline&source=gbs_navlinks_s"
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    authors: "Charles Petzold",
    googleId: "iptCAwAAQBAJ",
    description: "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    image: "https://books.google.com/books/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE723Uo9ZlqTfTbHlsmnYnndb_KZDQXC1MheNrd-yXYa1RvHAg75BncJct88xssYwqhFVnTd1Y_l4istsYMPcOPsmZsGQv0aJDKyy300sXYDt9gIzoAGrHZzJODSdNTI53FS8xRhN",
    link: "https://books.google.com/books?id=iptCAwAAQBAJ&dq=code:+hidden&source=gbs_navlinks_s"
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    authors: "Brad Stone",
    googleId: "t95iRvivDHIC",
    description: "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
    image: "https://books.google.com/books/content?id=t95iRvivDHIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73ceKewhZn2dZAj0NqLeHII3jmq9Z8yTEZ3-eJzjSsPbffrjLY2jATLVpOMjetE69XeqP4u9gkQfVQGUSJKX1j2Np7Ua4Z5GPHwADvDIMNJKLx2VpahvN0Ee59e2k7EuDXuQUe5",
    link: "https://books.google.com/books?id=t95iRvivDHIC&dq=the+everything+store&source=gbs_navlinks_s"
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    authors: "Arnold Schwarzenegger",
    googleId: "ZvojgDyjYM4C",
    description: "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
    image: "https://books.google.com/books/content?id=ZvojgDyjYM4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72ga_HvyVFyd8LwLdey6Bf4n47YfT7jRd9Rq1Nis5APJe5Ammh1PDdbOF7ojsTQ8LtQWKsR53m2g0Ddb9J7yc2iDfsQfioe0sgV_eX3P2lFbMeUJHhb0i_wC1f5KCqMpS9yuyGQ",
    link: "https://books.google.com/books?id=ZvojgDyjYM4C&dq=total+recall&source=gbs_navlinks_s"
  },
];

async function seed() {
  await mongoose
    .connect(
      MONGODB_URI,
      options
    )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let book of booksSeed) {
    const { _id: bookId } = await new Book({
      title: book.title,
      authors: book.authors,
      link: book.link,
      description: book.description,
      image: book.image,
      googleId: book.googleId
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();

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