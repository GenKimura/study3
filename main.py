import eel
import search

app_web = "html"
end_point = "index.html"
size = (600, 420)

@eel.expose
def kimetsuSearch(name):
    return search.kimetsuSearch(name)

eel.init(app_web)
eel.start(end_point, size = size)