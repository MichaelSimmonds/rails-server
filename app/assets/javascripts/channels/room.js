App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    window.setTimeout(function(){
      return svgChart(data);
    }, 10000)
  }
});
