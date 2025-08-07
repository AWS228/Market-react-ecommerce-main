module.exports = {
  apps: [
    {
      name: "frontend",
      script: "serve",
      //args: "-s /var/www/deploy-frontend -l 3000  --listen 0.0.0.0",
      args: "-s /var/www/deploy-frontend --listen http://0.0.0.0:3000",
      interpreter: "none"
    }
  ]
};
