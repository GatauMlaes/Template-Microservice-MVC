const errorNotFound = (req, res, next) => {
  res.status(404).json({ error: 'NOT FOUND' });
}

export default errorNotFound