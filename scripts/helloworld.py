# helloworld.py
import time
import argparse
import string
import sys
import json

class MyListener():
    print ("Python value sent: ")
    print (sys.argv[1].encode())
    data = json.loads(sys.argv[1].encode())
    print (data["steps"])
    time.sleep(10)
    print "fin du timeout"
