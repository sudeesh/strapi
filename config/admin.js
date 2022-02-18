module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '032df77c691724d064c41228401d9495'),
  },
});
