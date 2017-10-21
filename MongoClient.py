import pymongo
from pymongo import MongoClient

def GetFish():
    client = MongoClient('172.31.50.92', 27017)
    collection = db.fish
    fish_table = collection.find_one({"fish" : "fish1"})
    file = open('fish.json', 'w')
    file.write(fish_table)
    file.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = fish_table[arr]
    #print statement for testing
    #Post


def GetTrash():
    client = MongoClient('172.31.50.92', 8080)
    collection = db.items.negative
    trash_table = collection.find_one({"trash" : "bottle"})
    file = open('trash.json', 'w')
    file.write(trash_table)
    file.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    toPost = trash_table[arr]
    # print statement for testing
    #Post

def GetNotTrash():
    client = MongoClient('172.31.50.92', 8080)
    collection = db.items.positive
    good_table = collection.find_one({"good": "reef"})
    file = open('good.json', 'w')
    file.write(good_tables)
    file.close()

    # we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    toPost = trash_table[arr]
    # print statement for testing
    # Post

