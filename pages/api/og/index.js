export default function handler(req, res) {
  const title = req.query.title || 'Ztake Payments';
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <linearGradient id="g" x1="0" x2="1">
        <stop stop-color="#0f172a" offset="0"/>
        <stop stop-color="#111827" offset="1"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="60" y="320" font-size="48" fill="#fff" font-family="Inter, Arial, sans-serif">${title}</text>
    <text x="60" y="380" font-size="24" fill="#9ca3af">pay.ztake.in</text>
  </svg>
  `;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svg);
}