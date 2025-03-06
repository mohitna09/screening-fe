const CONFIG = {
  development: {
    BASE_URL: "http://localhost:3000",
  },
  production: {
    BASE_URL: "https://screening-be.onrender.com",
  },
};

export default CONFIG[import.meta.env.VITE_CONFIG_PROFILE || "development"];
