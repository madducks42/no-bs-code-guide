# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  root 'homepages#index'

  get 'new-rails-react-project', to: 'homepages#index'
  get 'bulma', to: 'homepages#index'
  get 'bootstrap', to: 'homepages#index'
  get 'prettier-eslint', to: 'homepages#index'
  get 'lightbox', to: 'homepages#index'
end
