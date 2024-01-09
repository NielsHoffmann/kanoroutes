import gpxpy
import gpxpy.gpx
import os

def update_gpx(directory, input):
    outputdir = r'./output'
    gpxfile = open(directory + os.sep + input, "r", encoding="utf-8")
    gpx = gpxpy.parse(gpxfile)

    trk_len = gpx.tracks[0].length_2d()
    trk_len = round(trk_len/1000, 2)

    new_gpx = gpxpy.gpx.GPX()
    
    gpx_track = gpx.tracks[0]
    gpx_track.description = str(trk_len) + ' km; ' + str(input).lower()
    
    new_gpx.tracks.append(gpx_track)

    f = open(outputdir + os.sep + str(input).lower(), "w")
    f.write(new_gpx.to_xml())
    f.close()
    print('out: '+ outputdir + os.sep + str(input).lower())
    return 

def main():
    directory = r'./clean'
    for filename in os.listdir(directory):
        if filename.endswith(".gpx"):
            print ('in: ' + directory+ os.sep +filename)
            update_gpx(directory, filename)

if __name__ == "__main__":
    main()