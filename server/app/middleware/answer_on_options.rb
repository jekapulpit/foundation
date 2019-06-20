class AnswerOnOptions
  def initialize app
    @app = app
  end
  def call env
    @status, @headers, @response = @app.call(env)
    @headers["Accept"] = "application/json"
    @headers["Access-Control-Allow-Origin"] = "*"
    @headers["X-Requested-With"] = "XMLHttpRequest"
    @headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
    @headers["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    [@status, @headers, @response.body]
  end
end
