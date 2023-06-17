export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            books: [
              {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                publisher: "HarperCollins",
                year: 1960,
                image:
                  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg",
                price: 9.99,
                defaultControl: "Currently Reading",
              },
              {
                id: 2,
                title: "1984",
                author: "George Orwell",
                publisher: "Penguin Books",
                year: 1949,
                image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
                price: 8.99,
                defaultControl: "Want to read",
              },
              {
                id: 3,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                publisher: "Little, Brown and Company",
                year: 1951,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
                price: 10.99,
                defaultControl: "Currently Reading",
              },
              {
                id: 4,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                publisher: "Scribner",
                year: 1925,
                image: "https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg",
                price: 7.99,
                defaultControl: "Read",
              },
              {
                id: 5,
                title: "Brave New World",
                author: "Aldous Huxley",
                publisher: "Harper Perennial Modern Classics",
                year: 1932,
                image:
                  "https://pagdandi.org/wp-content/uploads/2021/04/Brave-New-World.jpg",
                price: 12.99,
                defaultControl: "Want to read",
              },
              {
                id: 6,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                publisher: "Penguin Classics",
                year: 1813,
                image: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg",
                price: 6.99,
                defaultControl: "Read",
              },
              {
                id: 7,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                publisher: "Houghton Mifflin Harcourt",
                year: 1937,
                image:
                  "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
                price: 11.99,
                defaultControl: "Currently Reading",
              },
              {
                id: 8,
                title: "Moby-Dick",
                author: "Herman Melville",
                publisher: "Penguin Classics",
                year: 1851,
                image:
                  "https://m.media-amazon.com/images/I/91DhazpQXML._AC_UF1000,1000_QL80_.jpg",
                price: 9.99,
                defaultControl: "Want to read",
              },
              {
                id: 9,
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                publisher: "HarperCollins",
                year: 1954,
                image:
                  "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
                price: 14.99,
                defaultControl: "Read",
              },
            ],
            user: {
              name: "Raju",
              bio: "25 din mein paisa double",
              img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/no-akshay-kumar-no-hera-pheri-3-finally-worked-producers-to-bring-back-khiladi-001.jpg",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Books list not found.",
        });
      }
    }, 2000);
  });
};
