const constraints = {
  busName: {
    presence: true,
    length: {
      minimum: 5,
      message: 'must be at least 6 characters.'
    },
    format: {
      pattern: '[a-z0-9]+',
      flags: 'i',
      message: 'can only contain alphanumeric characters'
    }
  },
  busAddressLine1: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters.'
    }
  },
  busCity: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters.'
    }
  },
  busState: {
    presence: true,
    length: {
      minimum: 2,
      message: 'must be at least 4 characters.'
    }
  },
  busPostalCode: {
    presence: true,
    length: {
      minimum: 5,
      message: 'must be 5 digits.'
    },
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: 'can only contain 0-9'
    }
  },
  busCountry: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters.'
    }
  },
  busTin: {
    presence: true,
    length: {
      minimum: 9,
      message: 'must be 9 digits.'
    },
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: '(Tax ID) can only contain 0-9'
    }
  },
  busPhone: {
    presence: true,
    length: {
      minimum: 10,
      message: 'must be 10 digits.'
    },
    format: {
      pattern: '[0-9]+',
      flags: 'i',
      message: 'can only contain 0-9'
    }
  }
}

export default constraints
