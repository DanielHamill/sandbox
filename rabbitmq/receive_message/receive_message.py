#!/usr/bin/env python
import pika

EXCHANGE = "parking-deck-messages"

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='danielhamill.me', port=30672))
channel = connection.channel()

channel.exchange_declare(exchange=EXCHANGE, exchange_type='fanout')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange=EXCHANGE, queue=queue_name)

print(' [*] Waiting for logs. To exit press CTRL+C')

def callback(ch, method, properties, body):
    print(body)

channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()