#! /usr/bin/env python
# -*- coding: utf-8 -*-

import os
import datetime
from flask import *
from flask import Flask,request


app = Flask(__name__)


@app.route('/test')
def index():
	str = "hello flask"
	return str


if __name__ == '__main__':
	app.run(debug=True)



