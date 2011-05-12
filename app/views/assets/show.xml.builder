xml.instruct!

xml.asset do
  xml.id @asset.id, "type" => "int"
  xml.name @asset.name
  xml.latlong do
    xml.lat @asset.latitude
    xml.long @asset.longitude
  end
  xml.desc @asset.description
  xml.remain @asset.remaining, "type" => "int"
  xml.hits @asset.hits, "type" => "int"
end