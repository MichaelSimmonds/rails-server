socket = SocketIO::Client::Simple.connect 'http://localhost:8080'

socket.on :connect do
  puts "connect!!!"
end

socket.on :disconnect do
  puts "disconnected!!"
end

i = 0
socket.on :data do |data|
  # p data
  dataPoint = Socketio.new()
  dataPoint.hkld = data["hkld"]
  dataPoint.timestamp = data["timestamp"]
  dataPoint.save!
  if i > 0
    # @socketio = "AARRSSEE"
    @socketio = Socketio.select(:hkld).order(created_at: :asc).reverse_order.limit(10).reverse
    @output = []
    @socketio.each do |item|
      @output << item['hkld']
    end
    # @output = @output.join(",")
    ActionCable.server.broadcast 'room_channel', @output
    i = 0
  end
  i+=1
end

socket.on :error do |err|
  p err
end
# END
