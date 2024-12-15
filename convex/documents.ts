import {
    MutationCtx,
    QueryCtx,
    action,
    internalAction,
    internalMutation,
    internalQuery,
    mutation,
    query,
  } from "./_generated/server";
  import { ConvexError, v } from "convex/values";
  import { internal } from "./_generated/api";

  export const getDocuments=query({
    async handler(ctx){
      return await ctx.db.query("documents").collect()
    }
  })

export const createDocument = mutation({
    args: {
      title: v.string(),
    //   fileId: v.id("_storage"),
      orgId: v.optional(v.string()),
    },
    async handler(ctx, args) {
    //   const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;
  
    //   if (!userId) {
    //     throw new ConvexError("Not authenticated");
    //   }
  
    //   let documentId: Id<"documents">;
  
    //   if (args.orgId) {
    //     const isMember = await hasOrgAccess(ctx, args.orgId);
    //     if (!isMember) {
    //       throw new ConvexError("You do not have access to this organization");
    //     }
  
        // documentId = 
        await ctx.db.insert("documents", {
          title: args.title,
        //   fileId: args.fileId,
        //   description: "",
        //   orgId: args.orgId,
        });
    //   } else {
    //     documentId = await ctx.db.insert("documents", {
    //       title: args.title,
    //       tokenIdentifier: userId,
    //       fileId: args.fileId,
    //       description: "",
    //     });
    //   }
  
    //   await ctx.scheduler.runAfter(
    //     0,
    //     internal.documents.generateDocumentDescription,
    //     {
    //       fileId: args.fileId,
    //       documentId,
    //     }
    //   );
    },
  });
  