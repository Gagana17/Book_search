import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 600 }); // Cache for 10 minutes

export const cacheMiddleware = (duration) => (req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    return res.json(cachedResponse);
  }

  res.originalJson = res.json;
  res.json = (body) => {
    cache.set(key, body, duration);
    res.originalJson(body);
  };
  next();
};
