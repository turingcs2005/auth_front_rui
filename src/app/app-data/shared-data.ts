import { Validators } from '@angular/forms';

export const textValidators = [Validators.required, Validators.minLength(6), Validators.maxLength(256)];