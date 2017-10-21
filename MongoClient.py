import pymongo
from pymongo import MongoClient

def GetFish():
    client = MongoClient('172.31.50.92', 27017)
    collection = db.fish
    fish_table = collection.find_one({"fish" : "fish1"})
    #we can store images on our server and just send the link from the db
    arr = {'name', 'description', 'image'}
    toPost = fish_table[arr]
    #Post


def GetTrash():
    client = MongoClient('172.31.50.92', 8080)
    collection = db.items.negative
    trash_table = collection.find_one({"trash" : "bottle"})
    #we can store images on our server and just send the link from the db
    arr = {'name', 'description', 'image'}
    toPost = trash_table[arr]
    #Post

def GetNotTrash():
    client = MongoClient('172.31.50.92', 8080)
    collection = db.items.positive
    trash_table = collection.find_one({"trash": "reef"})
    # we can store images on our server and just send the link from the db
    arr = {'name', 'description', 'image'}
    toPost = trash_table[arr]
    # Post

