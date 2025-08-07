module.exports = {
  apps: [
    {
      name: "frontend",
      script: "serve",
      args: "-s /var/www/deploy-frontend -l 3000",
      interpreter: "none"
    }
  ]
};
