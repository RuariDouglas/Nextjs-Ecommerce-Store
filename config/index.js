const dev = process.env.NODE_ENV !== "production";

// CHANGE THIS BEFORE DEPLOYMENT
export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
