import { Observable } from 'rxjs';

// 创建简单的 Observable
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

// 订阅 Observable
observable.subscribe({
  next: value => console.log(`Received value: ${value}`),
  error: err => console.error(`Error: ${err}`),
  complete: () => console.log('Observation complete')
});