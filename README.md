Aquaponic System
======

Aquaponic System controlled with a Raspberry Pi.
The Program running on the Raspberry Pi is written in Node.js for the backend and Angular.js for the frontend.
=======
# Aquaponic system
======

Aquaponic system controlled with a Raspberry Pi.
The program running on the Raspberry Pi is written in node.js for the backend and Angular.js for the frontend. The described system is fully autonomous and driven by a solar panel.

======

## Hardware


| quantity | type | price/EUR | total |
| -------- | :-------------: | --------: | ---------: |
| 1 | [Solar Panel](https://www.amazon.de/gp/product/B00HTSVDAM/ref=oh_aui_detailpage_o04_s00?ie=UTF8&psc=1) | 100 | 100 |
| 1 | [Solar power controller](https://www.amazon.de/gp/product/B071VT42D2/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1) | 15.99 | 15.99 |
| 1 | [Solar cables](https://www.amazon.de/gp/product/B0171FERLE/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1) | 9.99 | 9.99 |
| 1 | [Car battery](https://www.amazon.de/BSA-DC-Solarbatterie-Versorgungsbatterie-Wohnmobil/dp/B07D562RWH/ref=sr_1_13?s=garden&ie=UTF8&qid=1531844717&sr=1-13&keywords=solar+batterie+12v) | 119.90 | 119.90 |
| 1 | [Raspberry Pi 3 B+](https://www.amazon.de/Raspberry-1373331-Pi-Modell-Mainboard/dp/B07BDR5PDW/ref=sr_1_5?s=computers&ie=UTF8&qid=1529962187&sr=1-5&keywords=raspberry+pi+3+b%2B) | 35.99 | 35.99 |
| 1 | [Water pump](https://www.amazon.de/gp/product/B01MTNBHPT/ref=oh_aui_detailpage_o09_s00?ie=UTF8&psc=1) | 18.99 | 18.99 |
| 1 | [Relais](https://www.amazon.de/gp/product/B01N25NYD6/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) | 5.99 | 5.99 |
| 1 | [Stepper motor](https://www.amazon.de/DC-5V-Elektro-28BYJ-48-Modulplatine/dp/B00DGNO6PI/ref=sr_1_12?s=ce-de&ie=UTF8&qid=1529962986&sr=1-12&keywords=stepper+motor) | 1.80 | 1.80 |
| 1 | [Drill Coppler](https://www.amazon.de/gp/product/B0783QQMKP/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1) | 7.99 | 7.99 |
| 1 | [Drill](https://www.amazon.de/Bosch-2608596305-Pro-Holzspiralbohrer-%C3%98/dp/B0009W86IC/ref=sr_1_6?s=industrial&ie=UTF8&qid=1529962344&sr=1-6&keywords=Bohrer+8mm) | 4.50 | 4.50 |
||||321.14|

## Setup

* Download the NOOBS package for your Raspberry Pi (tested with 2.8.1) https://github.com/raspberrypi/noobs/releases
* Unzip the folder and copy, not the folder, but the content of the folder to your SD Card.
* Plugin your Raspberry Pi after putting the SD Card into it.
* Choose an OS that fits your needs (tested with Raspian) and follow the installation steps on your screen.
* Boot your fresh installation, change the password of the standarduser pi and activate ssh: https://www.youtube.com/watch?v=RgUM8ulMfHE
* Connect your Raspberry Pi to the WiFi
Note: I had to remove the line **link local 169.x.x.x** in the file **/etc/networks** from my fresh installation, to get a correct IP adress from my router.
* Reboot your Raspberry Pi
* Change to the Aquaponic directory. Then update the deploy.sh in the root of the project to your needs. Also change the file **app/config/server.js** accordingly.
* Enable the needed interfaces (ssh, serial, remote gpio) shown here: https://www.youtube.com/watch?v=RgUM8ulMfHE
* Open a commandline on your Computer and execute **./deploy.sh**
* Allow connecting and enter the password of your user pi that you set previously.
* On your Raspberry Pi change to the directory **~/Desktop/Aquaponic** and execute **./setup.sh** from the commandline.
* Do the wiring of the pump and feeder as described within the Wiring section of this document.
* Now reboot your Raspberry Pi and execute **npm install** from within the folder **~/Desktop/Aquaponic**
* Restart pm2 from the console **pm2 restart aquaponic**
* Open **localhost:8080** on the browser of your Raspberry Pi and check if everything works.

## Wiring
