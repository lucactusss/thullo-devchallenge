import validateCreateLinkSchema from '../validators/validateCreateLink.json';
import validateCreateKeywordSchema from '../validators/validateCreateKeyword.json';
import validateUpdateKeywordSchema from '../validators/validateUpdateKeyword.json';
import validateGetKeywordListSchema from '../validators/validateGetKeywordList.json';
import validateGetLinkListSchema from '../validators/validateGetLinkList.json';
import validateAddKeywordToLinkSchema from '../validators/validateAddKeywordToLink.json';
import { validate, ValidatorResult } from 'jsonschema';

export function validateCreateLink(body: unknown): ValidatorResult {
  return validate(body, validateCreateLinkSchema);
}

export function validateCreateKeyword(body: unknown): ValidatorResult {
  return validate(body, validateCreateKeywordSchema);
}

export function validateUpdateKeyword(body: unknown): ValidatorResult {
  return validate(body, validateUpdateKeywordSchema);
}

export function validateGetKeywordList(body: unknown): ValidatorResult {
  return validate(body, validateGetKeywordListSchema);
}

export function validateGetLinkList(body: unknown): ValidatorResult {
  return validate(body, validateGetLinkListSchema);
}

export function validateAddKeywordToLink(body: unknown): ValidatorResult {
  return validate(body, validateAddKeywordToLinkSchema);
}
