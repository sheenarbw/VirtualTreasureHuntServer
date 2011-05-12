xml.instruct!

xml.assets do
  xml.total @assets.length, "type"=>"int"
  for asset in @assets
    xml.asset do
      xml.id asset.id, "type"=>"int"
      xml.latlong do
        xml.lat asset.latitude
        xml.long asset.longitude
      end
    end
  end
end