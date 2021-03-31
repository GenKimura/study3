import os

import eel

import search
import openFile

app_web = "html"
end_point = "index.html"
size = (600, 500)

@eel.expose
def open():
    path = openFile.openDialog()
    base = os.path.basename(path)
    return [path, base]

@eel.expose
def kimetsuSearch(name, path):
    return search.kimetsuSearch(name, path)

eel.init(app_web)
eel.start(end_point, size = size)