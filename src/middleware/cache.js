import redis from '../utils/redisClient.js';

export const cacheVerification = async (req, res, next) => {
  const { report_id } = req.params;
  const cacheKey = `verification:${report_id}`;

  const cached = await redis.get(cacheKey);
  if (cached) return res.json(JSON.parse(cached));

  req.cacheKey = cacheKey;
  next();
};
