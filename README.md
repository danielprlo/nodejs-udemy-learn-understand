# nodejs-udemy-learn-understand

# Get image: docker pull andresvidal/rpi3-mongodb3  ```
# First create a local directory for storing data
mkdir ~/db/mongo
 #Create container
docker run -d --name rpi-mongodb3 -v /home/pi/db/mongo:/data.db -p 27017:27017 andresvidal/rpi3-mongodb3 mongod

# User mongodb
# Pass mongodb
# Port 27017

