router.delete("/:slug", async (req, res, next) => {
    console.log("DELETE REQUEST CALLED SUCCESSFULLY")
    
  
    try {
      await Page.destroy({
        where: {
          slug: req.params.slug
        }
      });
  
      const pages = await Page.findAll();
      res.send(pages);
    } catch (error) {
      next(error);
    }
  });
