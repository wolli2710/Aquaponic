#install vim and git
sudo apt-get -y install vim
sudo apt-get -y install git-core

#install nvm
curl https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

#add source and default node version to rc.local
sudo echo "source ~/.nvm/nvm.sh" >> /etc/rc.local
sudo echo "nvm use 0.33.11 --default" >> /etc/rc.local

#reload bashrc
source ~/.nvm/nvm.sh

#install node.js 10
nvm install 10

#set node.js 10 as default version
nvm use 10
nvm alias default 10

npm install -g pm2@2.10.1

pm2 startup | grep sudo > out.sh; /bin/bash out.sh
pm2 start ~/Desktop/Aquaponic/app/server.js --name aquaponic
pm2 save
