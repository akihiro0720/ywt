json.array!(@reports) do |report|
  json.extract! report, :id, :user_id, :date, :y, :w, :t, :draft
  json.url report_url(report, format: :json)
end
