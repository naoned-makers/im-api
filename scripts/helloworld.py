# helloworld.py
import time
import argparse
import string
import sys
import json

class MyListener():
    data = json.loads(sys.argv[1].encode())
    text = "Iron Man commence a "
    if data["steps"] > 0:
        text = text + "lever " 
    else:
        text = text + "baisser "
    if data["member"] == "leftArm":
        text = text + "le bras gauche " 
    else:
        text = text + "le bras droit "
    text = text + "de " + str(data["steps"]) + " pas"
    print(text)
    
    time.sleep(10)
    #print "fin du mouvement pour Iron Man"
