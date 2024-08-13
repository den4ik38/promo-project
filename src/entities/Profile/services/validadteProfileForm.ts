import { Profile, ValidatesErrors } from "../types/profile";

export function validadteProfileForm(profile?: Profile){
    if (!profile) {
        return [ValidatesErrors.NO_DATA]
    }
    const {first, lastname, age} = profile;
    const errors: ValidatesErrors[]= []
    if (!first || !lastname || (first?.length === 0 || undefined) || (lastname?.length === 0 || undefined)) {
        errors.push(ValidatesErrors.INCORRECT_NAME)
    }
    if (!age || !Number.isInteger(age) || !(/^\d+$/.test(String(age)))) {
        errors.push(ValidatesErrors.INCORRECT_AGE)
    }
    return errors;
};