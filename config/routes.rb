# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  root 'homepages#index'

  get 'new-rails-react-project', to: 'homepages#index'
end
