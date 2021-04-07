import validateLoginSchema from '../validators/validateLogin.json';
import validateCreateUserSchema from '../validators/validateCreateUser.json';
import { validate } from 'jsonschema';

export function validateLogin(body: unknown): boolean {
  return validate(body, validateLoginSchema).valid;
}

export function validateCreateUser(body: unknown): boolean {
  return validate(body, validateCreateUserSchema).valid;
}
