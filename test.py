import openFile
import os

def open():
    path = openFile.openDialog()
    base = os.path.basename(path)
    return [path, base]

path = open()

print(type(path))
print(path)
print(path[0])
print(path[1])


