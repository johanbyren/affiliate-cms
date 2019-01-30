const http = require('http');

export const getProductFeedFromAddrecord = async (event:any, context: any, cb: any) => {
  const params = {
    url: "http://feed.adrecord.com/proteinbolaget.json?id=e4a9dd0aeecd", // TODO: Change this to correct url later...... 
    json: true,
  }

  const res = await http.request(params).pormise();

  console.log("Result: ", res);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is the product feed',
      result: res
    })
  };

  return cb(null, response);
};
