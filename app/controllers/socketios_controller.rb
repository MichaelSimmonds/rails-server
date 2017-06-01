class SocketiosController < ApplicationController
  def index
    @socketio = Socketio.all

  end
end
