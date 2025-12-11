import Verification from '../models/Verification.js';
import * as service from '../services/verificationService.js';

export const create = async (req, res) => {
  try {
    const verification = await service.createVerification(req.body);
    res.json(verification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const status = async (req, res) => {
  try {
    const verification = await Verification.findOne({
      where: { report_id: req.params.report_id }
    });

    if (!verification) 
      return res.status(404).json({ error: "Not found" });

    res.json(verification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const { status } = req.body;
    const verification = await service.updateStatus(
      req.params.id,
      status,
      req.user.claimant_id
    );

    res.json(verification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
