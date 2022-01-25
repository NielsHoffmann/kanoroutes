from doctest import OutputChecker
from bs4 import BeautifulSoup
import os

def clean_gpx(directory, input):
    outputdir = r'./output'
    gpxfile = open(directory + os.sep + input, "r", encoding="utf-8")
    soup = BeautifulSoup(gpxfile, 'xml')
    for data in soup(['extensions','time']):
        # Remove tags
        data.decompose()
    
    f = open(outputdir + os.sep + str(input).lower(), "w")
    f.write(soup.prettify())
    f.close()
    print('out: '+ outputdir + os.sep + str(input).lower())
    return 

def main():
    directory = r'./input'
    for filename in os.listdir(directory):
        if filename.endswith(".gpx"):
            print ('in: ' + directory+ os.sep +filename)
            clean_gpx(directory, filename)

if __name__ == "__main__":
    main()