#from flask import Flask

#app = Flask(__name__)

#@app.route('/captureButton')
#def button():
 #   print("Hello World")
  #  return "Hello World"
    

#@app.route('/')
#def index():
 #   return render_template('index.html')

#if __name__ == '__main__':
 #   app.run(debug=True, host='0.0.0.0')

#!/usr/bin/env python

import cgi
import cgitb

cgitb.enable()

print "Content-type: text/html\n\n"

form=cgi.FieldStorage()

if "light" not in form:
    print "<h1>Neither radio button was selected.</h1>"
else:
    text=form["light"].value
    print "<h1>Radio button chosen:</h1>"
    print cgi.escape(text)
