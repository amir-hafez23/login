export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log('Login Attempt:', username, password);
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(405).json({ message: 'Only POST allowed' });
  }
}
