import Data from "./data";

export function get(endpoint){
  // const delay = Math.floor(Math.random() * 1000) + 300;
  const delay = Math.floor(Math.random() * 100) + 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Data.hasOwnProperty(endpoint)) {
        const validEndpoints = Object.keys(Data)
          .map((endpoint) => ` - "${endpoint}"`)
          .join("\n ");
        reject(
          `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
        );
      }
      // console.log(Data[endpoint]);

      const response = { status: 200, data: Data[endpoint] };

      resolve(response);
    }, delay);
  });
}