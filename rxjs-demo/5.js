import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

interval(3000).pipe( // 每3秒发出一个值
  timeout(2000) // 设置2秒超时
).subscribe({
  next: value => console.log(value),
  error: err => console.error('Timeout error:', err.message)
});

// Timeout error: Timeout has occurred