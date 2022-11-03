import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function Password(pass: string, matchpass: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[pass];
        const matchingControl = formGroup.controls[matchpass];

        if (matchingControl.errors && !matchingControl.errors['passvalidators']) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passvalidators: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
