



nvm install 0.10.26
npm update -g npm

npm install -g pm2

pm2 startup                   # Detect init system, generate and configure pm2 boot on startup
[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/home/pi/.nvm/versions/node/v10.4.1/bin /home/pi/.nvm/versions/node/v10.4.1/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi

pm2 save                      # Save current process list




pm2 resurrect
