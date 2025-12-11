import axios from 'axios';
import Verification from '../models/Verification.js';
import redis from '../utils/redisClient.js';

export const createVerification = async (data) => {
  const verification = await Verification.create(data);

  await redis.set(
    `verification:${data.report_id}`,
    JSON.stringify(verification),
    { EX: 60 }
  );

  return verification;
};

export const updateStatus = async (id, status, adminId) => {
  const verification = await Verification.findByPk(id);
  verification.status = status;
  verification.adminId = adminId;
  await verification.save();

  // Panggil API Report untuk update status
  await axios.put(`${process.env.REPORT_API_URL}/${verification.report_id}`, {
    verificationStatus: status
  });

  // Publish ke Redis
  await redis.publish("verification_updates", JSON.stringify({
    report_id: verification.report_id,
    status
  }));

  return verification;
};
