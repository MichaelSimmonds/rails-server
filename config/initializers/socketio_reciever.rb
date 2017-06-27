
# Connect to HKLD sensor socket.io server
socket = SocketIO::Client::Simple.connect 'http://localhost:8080'

# function to convert object into array of hkld points and transmit via ActionCable
def transmitData()
  @socketio = Socketio.select(:hkld).order(created_at: :asc).reverse_order.limit(10).reverse
  @output = []
  @socketio.each do |item|
    @output << item['hkld']
  end
  # Send data via ActionCable - see app/assets/javascripts/channels/room.coffee
  ActionCable.server.broadcast 'room_channel', @output
end

# Socket.io functions

socket.on :connect do
  puts "connect!!!"
end

socket.on :disconnect do
  puts "disconnected!!"
end


# sending data to the db
socket.on :data do |data|
  # p data
  dataPoint = Socketio.new()
  dataPoint.hkld = data["hkld"]
  dataPoint.timestamp = data["timestamp"]
  dataPoint.save!
  transmitData


end

socket.on :error do |err|
  p err
end
# END
