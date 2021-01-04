exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: `public key: ${process.env.STRIPE_PUBLIC_KEY}`,
  };
};
