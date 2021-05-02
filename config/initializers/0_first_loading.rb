def development?
  env_is('development')
end

def staging?
  env_is('staging')
end

def production?
  env_is('production')
end

def test?
  env_is('test') || env_is('staging')
end

def env_is(env)
  Rails.env == env
end
