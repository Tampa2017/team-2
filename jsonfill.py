from MongoClient import GetFish
from MongoClient import GetTrash
from MongoClient import GetNotTrash

import time

while(True):

    GetFish()
    GetTrash()
    #GetNotTrash()
    time.sleep(15)