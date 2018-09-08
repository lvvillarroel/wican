const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.param('id', async (id, ctx, next) => {
  const user = await ctx.orm.user.findById(ctx.params.id);
  ctx.assert(user, 404);
  ctx.state.user = user;
  return next();
});

router.get('users', '/', async (ctx) => {
  ctx.body = await ctx.orm.user.findAll();
});

router.post('users-create', '/', async (ctx) => {
  await ctx.orm.user.create(ctx.request.body);
  ctx.redirect(ctx.router.url('users'));
});

router.get('users-show', '/:id', async (ctx) => {
  ctx.body = ctx.state.user;
});

router.patch('users-update', '/:id', async (ctx) => {
  ctx.body = await ctx.state.user.update(
    ctx.request.body,
    { fields: ['firstName', 'lastName', 'password'] },
  );
});

router.delete('users-destroy', '/:id', async (ctx) => {
  await ctx.state.user.destroy();
  ctx.redirect(ctx.router.url('users'));
});

module.exports = router;
