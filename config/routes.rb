Rails.application.routes.draw do
  get 'socketios/index'

  root 'socketios#index'
  mount ActionCable.server, at: '/cable'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
