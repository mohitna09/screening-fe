# Vite Application

This is a Vite application that allows for fast development and optimized builds. Below are the instructions on how to get started, build the application, and configure it.

## Getting Started

To get started with the Vite application, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>


   npm install

   npm run dev


   Building the Application
   To create a production build of your application, run the following command:
   ```

bash
Run
Copy code
npm run build
This will generate optimized static files in the dist directory, which you can then deploy to your server.

Configuration
You can change the configuration of your Vite application using environment variables. Create a .env file in the root of your project and set the desired profile:

env
Run
Copy code
VITE_CONFIG_PROFILE=development
or

env
Run
Copy code
VITE_CONFIG_PROFILE=production
Make sure to restart the development server after changing the .env file for the changes to take effect.

CORS Unblocking
If you encounter CORS issues while making requests to your backend, you may need to use a CORS unblocker. This is necessary because the backend may only allow requests from specific origins.

You can use browser extensions like "CORS Unblock" or "Allow CORS: Access-Control-Allow-Origin" to bypass these restrictions during development. However, for production, ensure that your backend is configured to allow requests from your application's origin.
