import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

throwError(new Error('Something went wrong!')).pipe(
  catchError(err => {
    console.error('Error caught:', err.message);
    return of('Fallback value');
  })
).subscribe(result => console.log(result));

// Error caught: Something went wrong!
// Fallback value