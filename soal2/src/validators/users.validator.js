export function validateCreateUser(body) {
  const errors = [];

  if (!body || typeof body !== 'object') {
    return ['Payload harus JSON object'];
  }

  const { name, email } = body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push('name wajib diisi');
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    errors.push('email wajib diisi');
  } else {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) errors.push('email tidak valid');
  }

  return errors;
}
