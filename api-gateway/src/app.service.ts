import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';
import { CreateOrderRequest } from './create-order-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World! Woe';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'create_order',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
