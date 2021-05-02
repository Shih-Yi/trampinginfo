CarrierWave.configure do |config|
  config.root = Rails.root
  config.fog_provider = 'fog/google'
  config.fog_credentials = {
    provider: 'Google',
    google_project: Settings.google_cloud_storage_project_name,
    google_json_key_string: Settings.google_cloud_storage_credential_content
  }
  config.fog_directory = 'tracksinfo_bucket'
end