import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

export interface InquiryRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  serviceRequired: string;
  areaLocality: string;
  description: string;
  createdAt: string;
  status: 'received' | 'reviewing' | 'scheduled';
}

// In-memory persistent record for inquiry submissions
const inquiries: InquiryRecord[] = [];

// Phone number validator (handles Pakistani numbers +92 3xx xxxxxxx, 03xx-xxxxxxx, and international)
function isValidPhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // +923047358893 or 03047358893 or international format 8 to 15 digits
  return /^\+?[0-9]{9,15}$/.test(cleaned);
}

// POST endpoint for submitting inquiries
app.post('/api/inquiries', (req, res) => {
  try {
    const { fullName, phoneNumber, serviceRequired, areaLocality, description } = req.body;

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid full name (minimum 2 characters).'
      });
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || !isValidPhoneNumber(phoneNumber)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid phone number (e.g., +92 304 7358893 or 0304 7358893).'
      });
    }

    if (!serviceRequired || typeof serviceRequired !== 'string' || serviceRequired.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please select an electrical service category.'
      });
    }

    if (!areaLocality || typeof areaLocality !== 'string' || areaLocality.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please specify your area or locality in Multan.'
      });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Please describe the electrical issue or request in more detail (minimum 8 characters).'
      });
    }

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `SE-${dateStr}-${randomSuffix}`;

    const newRecord: InquiryRecord = {
      id: ticketId,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      serviceRequired: serviceRequired.trim(),
      areaLocality: areaLocality.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
      status: 'received'
    };

    inquiries.unshift(newRecord);

    return res.status(201).json({
      success: true,
      ticketId,
      message: 'Your inquiry has been successfully recorded. Sheraz Electric will review your details and contact you.',
      inquiry: newRecord
    });
  } catch (err) {
    console.error('Error processing inquiry:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your inquiry. Please call +92 304 7358893 directly.'
    });
  }
});

// GET endpoint to look up an inquiry ticket by ID
app.get('/api/inquiries/:ticketId', (req, res) => {
  const { ticketId } = req.params;
  const match = inquiries.find(item => item.id.toUpperCase() === ticketId.toUpperCase());
  if (!match) {
    return res.status(404).json({
      success: false,
      error: 'Inquiry ticket not found. Please verify the ticket reference number.'
    });
  }
  return res.json({
    success: true,
    inquiry: {
      id: match.id,
      fullName: match.fullName,
      serviceRequired: match.serviceRequired,
      areaLocality: match.areaLocality,
      createdAt: match.createdAt,
      status: match.status
    }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sheraz Electric server running on port ${PORT}`);
  });
}

startServer();
