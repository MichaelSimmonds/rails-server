# README

This is a project that takes data from an websocket on port 8080 and stores the data in a sqlite database. As each datapoint is stored, the database is queried for the last 10 values and these are displayed on a basic chart made from div elements (now uses d3 to some extent).

_relevant files_

socket.io reciever, db storage + query - config/initializers/socketio_reciever
ActionCable - app/assets/javascripts/channels/room.coffee
Drawing Chart - app/assets/javascripts/drawChart.js
Chart view - app/views/socketios/index.html
