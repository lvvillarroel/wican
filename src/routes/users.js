const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('users', '/', async (ctx) => {
  ctx.body = await ctx.orm.user.findAll();
});

module.exports = router;
