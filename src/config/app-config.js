const CONFIG = {
  development: {
    BASE_URL: "http://localhost:3000",
  },
  production: {
    BASE_URL: "http://localhost:3000",
  },
};

export default CONFIG[process.env.NODE_ENV];
