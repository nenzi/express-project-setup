const logger = (url: string) => {
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var time = today.getTime();

  console.log(`Request Sent ${mm}/${dd}/${yyyy}:${time} URL: ${process.env.BASEURL}:${process.env.PORT}${url}`);
};

export default logger;
