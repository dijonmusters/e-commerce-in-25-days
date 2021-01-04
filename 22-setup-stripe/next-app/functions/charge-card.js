const fs = require("fs");
const matter = require("gray-matter");

const getProducts = () => {
  const directory = `${process.cwd()}/content`;
  const filenames = fs.readdirSync(directory);

  const products = filenames.map((filename) => {
    // read the file from fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    // pull out frontmatter => name
    const { data } = matter(fileContent);

    return data;
  });

  return products;
};

exports.handler = async (event, context) => {
  const { cart } = JSON.parse(event.body);

  const products = getProducts();

  const cartWithProducts = cart.map(({ id, qty }) => {
    const product = products.find((p) => p.id === id);
    return {
      ...product,
      qty,
    };
  });

  console.log(cartWithProducts);
  // talking to Stripe
  // charging the card
  return {
    statusCode: 200,
    body: "I have charged that card many times!",
  };
};
