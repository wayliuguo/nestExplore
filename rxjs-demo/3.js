import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

of(1, 2, 3).pipe(
  tap(value => console.log(`Value: ${value}`))
).subscribe();

// Value: 1
// Value: 2
// Value: 3