const constraints = {
  busName: {
    presence: true,
    length: {
      minimum: 5,
      message: 'must be at least 6 characters'
    }
  },
  busAddressLine1: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters'
    }
  }
}

export default constraints
