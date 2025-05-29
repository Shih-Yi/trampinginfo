# spring 啟動，出現logger gem 載入順序的問題，強制先載入 Ruby 內建 logger
# uninitialized constant ActiveSupport::LoggerThreadSafeLevel::Logger (NameError)
require 'logger'  

ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "bootsnap/setup" # Speed up boot time by caching expensive operations.
