socket = SocketIO::Client::Simple.connect 'http://localhost:8080'

socket.on :connect do
  puts "connect!!!"
end

socket.on :disconnect do
  puts "disconnected!!"
end

socket.on :data do |data|
  # p data
  dataPoint = Socketio.new()
  dataPoint.hkld = data["hkld"]
  dataPoint.timestamp = data["timestamp"]
  dataPoint.save!
end

socket.on :error do |err|
  p err
end
# END
