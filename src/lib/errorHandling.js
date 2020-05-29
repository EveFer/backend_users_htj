function errorsHandling (errors) {
  const errorsArray = Object.entries(errors.errors).map((entry) => {
    const [key, value] = entry
    return { [key]: value.message }
  })
  return errorsArray
}

module.exports = {
  errorsHandling
}
