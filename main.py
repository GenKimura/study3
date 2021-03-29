import eel

import search
import openFile

app_web = "html"
end_point = "index.html"
size = (600, 420)

@eel.expose
def openFile():
    return openFile.openDialog()

# @eel.expose
# def kimetsuSearch(name, path):
#     return search.kimetsuSearch(name, path)

eel.init(app_web)
eel.start(end_point, size = size)