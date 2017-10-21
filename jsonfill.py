from MongoClient import GetFish
from MongoClient import GetTrash
from MongoClient import GetNotTrash

import time

while(true):

    GetFish()
    GetTrash()
    #GetNotTrash()
    time.sleep(15)