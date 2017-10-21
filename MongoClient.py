import pymongo
from pymongo import MongoClient
import json
import pprint
import random

def GetFish(): #way to choose random fish 
    choose = (random.randint(1, 100))%3
    name = ' '
    if choose == 1: name = 'Reef Shark'
    elif choose == 2: name = 'Great White Shark'
    else: name = 'Goblin Shark'
    client = MongoClient('127.0.0.1', 27017)
    db = client.Poseidon
    collection = db.fish
    fish_table = collection.find({"fish": name})
    fishstr = None
    for document in fish_table:
        fishstr = pprint.pformat(document)
    with open('fish.json', 'w') as file:
        fishstr.encode('utf-8')
        file.write(fishstr) #worksssss
    file.close()
    client.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = fish_table[arr]
    #print statement for testing
    #Post


def GetTrash():
    client = MongoClient('127.0.0.1', 27017)
    choose = (random.randint(1, 100))%3
    name = ' '
    if choose == 1: name = 'Plastic Bottles'
    elif choose == 2: name = 'Plastic Bags'
    else: name = 'Fishing Net'
    db = client.Poseidon
    collection = db.items
    collection = collection.negative
    trash_table = collection.find({'name': name})
    trashstr = None

    for document in trash_table:
        trashstr = pprint.pformat(document)
        #print type(trashstr)
    with open('trash.json', 'w') as file:
        trashstr.encode('utf-8')
        file.write(trashstr)
    file.close()
    client.close()

    #we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = trash_table[arr]
    # print statement for testing
    #Post

def GetNotTrash(): #needs to be finished
    client = MongoClient('127.0.0.1', 27017)
    db = client.Poseidon
    collection = db.items
    collection = collection.positive
    nottrash_table = collection.find({'name': 'Artificial Reef'})
    nottrashstr = None

    for document in nottrash_table:
        nottrashstr = pprint.pformat(document)
        # print type(trashstr)
    with open('good.json', 'w') as file:
        nottrashstr.encode('utf-8')
        file.write(nottrashstr)
    file.close()
    client.close()
    # we can store images on our server and just send the link from the db
    #arr = {'name', 'description', 'image'}
    #toPost = trash_table[arr]
    # print statement for testing
    # Post

GetTrash()

