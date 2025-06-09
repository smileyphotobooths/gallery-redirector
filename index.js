const express = require('express');
const app = express();

app.get('/:eventID', (req, res) => {
  const { eventID } = req.params;
  res.redirect(301, `https://www.smileyphotobooths.com/gallery/?event=${eventID}`);
});

app.get('*', (req, res) => {
  res.redirect(301, 'https://www.smileyphotobooths.com/gallery/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
});
