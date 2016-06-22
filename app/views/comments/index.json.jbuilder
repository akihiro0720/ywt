json.array!(@comments) do |comment|
  json.extract! comment, :id, :reports_id, :comment, :commented_user
  json.url comment_url(comment, format: :json)
end
