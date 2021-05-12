import { ValidationError } from 'jsonschema';

export const formatMissingFields = (errors: ValidationError[]): string => {
  return errors.map((e) => e.argument).join(', ');
};
