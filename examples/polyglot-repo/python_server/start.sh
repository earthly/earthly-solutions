#!/bin/bash
gunicorn -w 4 'quote:app' -b 0.0.0.0:8002 --chdir src
