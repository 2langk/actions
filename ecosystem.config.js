module.exports = {
  apps: [
    {
      name: 'server2',
      script: 'npm',
      args: 'start',
      instanses: 'max',
      exec_mode: 'cluster',
      env: {NODE_ENV: 'production'},
    },
  ],
};
