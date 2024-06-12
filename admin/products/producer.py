# amqps://ndrsdwsq:phaBfipcT8wMpTzFmUtG7gv-DWNwHCbN@shark.rmq.cloudamqp.com/ndrsdwsq
import pika, json

params = pika.URLParameters(
    "amqps://ndrsdwsq:phaBfipcT8wMpTzFmUtG7gv-DWNwHCbN@shark.rmq.cloudamqp.com/ndrsdwsq"
)

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
  properties = pika.BasicProperties(method)
  channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)

