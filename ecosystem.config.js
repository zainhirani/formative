module.exports = {
  apps: [
    {
      name: "formative-frontend",
      script: "yarn start",
      watch: false,
      // cwd:"",
      args: "",
      interpreter_args: "",
      // instances:-1,
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
