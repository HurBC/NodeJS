enum ERROR_TYPES {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function showErrorMessage (error: ERROR_TYPES) {
  if (error === ERROR_TYPES.NOT_FOUND) {
    console.log('Not found')
  } else if (error === ERROR_TYPES.UNAUTHORIZED) {
    console.log('Unauthorized')
  } else if (error === ERROR_TYPES.FORBIDDEN) {
    console.log('Forbidden')
  }
}
