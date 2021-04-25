module.exports = {
  apps: [
    {
      name: 'server2',
      script: 'npm',
      args: 'start',
      instanses: 'max',
      exec_mode: 'cluster',
      env: {NODE_ENV: 'production'},
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './logs/pm2-err.log',
      out_file: './logs/pm2-out.log',
      combine_logs: true,
      merge_logs: true,
    },
  ],
};
