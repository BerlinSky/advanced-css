# Form UI Basic

## Implementating form validation

1 An input element needs to have a name attribute defined for the validation constraint mapping

```<input type="text"id="busAddressLine1" name="busAddressLine1" placeholder="Stree Address" />

```

2 Define validation constraints for all inputs requiring validation

```const constraints = {
    busAddressLine1: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters.'
      }
    }
  }
```
