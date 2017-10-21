import pymongo
from pymongo import MongoClient
import json
def GetFish():
    client = MongoClient('172.31.50.92', 27017)
    db = client.Poseidon
    collection = db.fish
    fish_table = collection.find({"name":"Reef Shark"})
    for document in fish_table:
        fishstr = pprint.pformat(document)
    with open('fish.json', 'w') as file:
        json.dump(fishstr, file)
    file.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = fish_table[arr]
    #print statement for testing
    #Post


def GetTrash():
    client = MongoClient('172.31.50.92', 8080)
    db = client.Poseidon
    collection = db.items.negative
    trash_table = collection.find_one({"name":"bottle"})
    with open('trash.json', 'w') as file:
        json.dump(trash_table, file)
    file.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = trash_table[arr]
    # print statement for testing
    #Post

def GetNotTrash():
    client = MongoClient('172.31.50.92', 8080)
    db = client.Poseidon
    collection = db.items.positive
    good_table = collection.find_one({"name":"reef"})
    with open('good.json', 'w') as file:
        json.dump(good_table, file)
    file.close()

    # we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = trash_table[arr]
    # print statement for testing
    # Post

