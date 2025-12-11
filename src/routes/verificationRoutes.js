import express from 'express';
import * as controller from '../controllers/verificationController.js';
import { auth, adminOnly } from '../middleware/auth.js';
import { validateVerification } from '../middleware/validation.js';
import { cacheVerification } from '../middleware/cache.js';

const router = express.Router();

// Ajukan verifikasi
router.post('/', validateVerification, controller.create);

// Status verifikasi
router.get('/:report_id', cacheVerification, controller.status);

// Approve / Reject (Admin only)
router.put('/:id', auth, adminOnly, controller.update);

export default router;
