App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server
    console.log ('Action cable connected')

  disconnected: ->
    # Called when the subscription has been terminated by the server
    console.log ('Action cable disconnected')

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    drawChart(data)
    # $(".10div").text(data.content)
