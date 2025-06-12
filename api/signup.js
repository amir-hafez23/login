export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    console.log('Signup Attempt:', name, email, password);
    res.status(200).json({ message: 'Signup successful!' });
  } else {
    res.status(405).json({ message: 'Only POST allowed' });
  }
}
