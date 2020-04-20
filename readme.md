# Form UI Basic

## Implementating form validation

1 An input element needs to have a name attribute defined for the validation constraint mapping

```<input type="text"id="busAddressLine1" name="busAddressLine1" placeholder="Stree Address" />

```

2 Define validation constraints for all inputs requiring validation'

````const constraints = {
    busAddressLine1: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters.'
      }
    }
  }
3 Apply the validation rules to the "Business Information" section

4 Create the HTML tag to house the validation error message. The "data-input-name" is used to link the input element

```<input type="text" id="busName" name="busName" placeholder="Company Name" />
````
