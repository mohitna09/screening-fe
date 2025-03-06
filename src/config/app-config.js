const CONFIG = {
  development: {
    BASE_URL: "http://localhost:3000",
  },
  production: {
    BASE_URL: "https://screening-be.onrender.com",
  },
};

export default CONFIG[process.env.CONFIG_PROFILE];
