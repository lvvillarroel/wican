const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const ngo = await ctx.orm.ngo.findById(ctx.params.id);
  ctx.assert(ngo, 404);
  ctx.state.ngo = ngo;
  return next();
});

router.get('ngos', '/', async (ctx) => {
  const ngos = await ctx.orm.ngo.findAll();
  return ctx.render('ngos/index', {
    ngos,
    getShowPath: ngo => ctx.router.url('ngos-show', ngo.id),
  });
});

router.get('ngos-show', '/:id', async (ctx) => {
  ctx.body = ctx.state.ngo;
});

module.exports = router;
