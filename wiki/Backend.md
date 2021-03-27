# Backend documentation

## Building / Debugging

### Build
* `ŧsc` is user for build
* Generates a `./build` folder with JS code
* This code is used by the docker container
* Not commited ! Because in `.gitignore`
### Debug with nodemon
* Launch `yarn start:debug` (or `yarn start` if no debugging required!)
* Execute script in launch.json `Node: Nodemon` and pick the right node process
* Everything should be available in the IDE for debugging !

## API documentation
* Using apidoc (https://apidocjs.com/)
* Uses versionning with gitflow
* If an API has some changes, we have to put the older version in a `_apidoc.js` file to keep the changes of the endpoint. It has to be used only if some parameter are added / removed, if the METHOD changed (e.g. POST to PUT) or if the structure of the returned data has been modified!
* Had to avoid API doc to be in type doc (using `"excludeTags": ["apidefine"]` in the typedoc configuration) !

### Full example 
```javascript
/**
 * @api {get} /user/:id Get User information
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiDescription Basic endpoint
 * 
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:8000/
 * @apiSampleRequest http://localhost:8000/
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
```

## Linter
* Using eslint & prettier
* Two options in scripts : `yarn lint`, `yarn lint:fix`
